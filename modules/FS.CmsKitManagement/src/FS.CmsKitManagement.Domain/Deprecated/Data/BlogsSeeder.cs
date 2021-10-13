using FS.Abp.Npoi.Mapper;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.CmsKit.Blogs;
using Volo.CmsKit.MediaDescriptors;
using Volo.Abp.BlobStoring;
using Volo.CmsKit.Users;
using Volo.Abp.VirtualFileSystem;
using Npoi.Mapper.Attributes;
using FS.Abp.Data;

namespace FS.CmsKitManagement.Data
{
    public class BlogsSeederOptions : FS.Abp.Data.ISeederOptions
    {
        public bool Ignore { get; set; }
        public string FileName { get; set; }
        public string BlogPostCoverImageMediaDirectory { get; set; }
        
    }

    public class BlogInfo
    {
        [Column("Name")]
        public string BlogName { get; set; }

        [Column("Slug")]
        public string BlogSlug { get; set; }

    }

    public class BlogPostInfo
    {
        [Column("Title")]
        public string PostTitle { get; set; }

        [Column("Content")]
        public string PostContent { get; set; }

        [Column("Slug")]
        public string PostSlug { get; set; }

        [Column("BlogName")]
        public string PostBlog { get; set; }
    }
    public class BlogsSeeder : FS.Abp.Data.Seeder<BlogsSeederOptions>, ITransientDependency
    {
        private IVirtualFileNpoiReader VirtualFileNpoiReader => this.LazyServiceProvider.LazyGetRequiredService<IVirtualFileNpoiReader>();
        private IVirtualFileProvider VirtualFileProvider => this.LazyServiceProvider.LazyGetRequiredService<IVirtualFileProvider>();
        private IBlogRepository BlogRepository => this.LazyServiceProvider.LazyGetRequiredService<IBlogRepository>();
        private ICmsUserRepository CmsUserRepository=>this.LazyServiceProvider.LazyGetRequiredService<ICmsUserRepository>();
        private IBlogPostRepository BlogPostRepository => this.LazyServiceProvider.LazyGetRequiredService<IBlogPostRepository>();
        private IBlobContainer<MediaContainer> BlobContainer => this.LazyServiceProvider.LazyGetRequiredService<IBlobContainer<MediaContainer>>();
        private IMediaDescriptorRepository MediaDescriptorRepository => this.LazyServiceProvider.LazyGetRequiredService<IMediaDescriptorRepository>();

        private BlogManager BlogManager => this.LazyServiceProvider.LazyGetRequiredService<BlogManager>();
        private BlogPostManager BlogPostManager => this.LazyServiceProvider.LazyGetRequiredService<BlogPostManager>();
        private BlogFeatureManager BlogFeatureManager => this.LazyServiceProvider.LazyGetRequiredService<BlogFeatureManager>();
        private MediaDescriptorManager MediaDescriptorManager => this.LazyServiceProvider.LazyGetRequiredService<MediaDescriptorManager>();
        
        protected override async Task SeedAsync(DataSeedContext context)
        {
            var SourceData = Options.FileName;
            if (string.IsNullOrEmpty(SourceData)) return;
            var blogsCount = await this.BlogRepository.GetCountAsync();
            if (blogsCount == 0)
            {
                var blogListByExcel = this.VirtualFileNpoiReader.Read<BlogInfo>(SourceData, "Blogs");
                blogListByExcel = blogListByExcel.Where(x => x.BlogName != null).ToList();
                var blogs = new List<Blog>();

                foreach (var blogInfo in blogListByExcel)
                {
                    Blog blog = await this.BlogManager.CreateAsync(blogInfo.BlogName, blogInfo.BlogSlug);
                    blogs.Add(blog);
                }

                await this.BlogRepository.InsertManyAsync(blogs, true);
            }

            var blogList = await this.BlogRepository.GetListAsync();
            foreach(var blog in blogList)
            {
                await this.BlogFeatureManager.SetDefaultsAsync(blog.Id);
            }

            var Imgs = new List<MediaDescriptor>();
            foreach (var file in VirtualFileProvider.GetDirectoryContents(Options.BlogPostCoverImageMediaDirectory)) 
            {
                var mimeType = Utils.FileExtensionContentTypeUtils.GetMimeType(System.IO.Path.GetExtension(file.Name));
                
                MediaDescriptor img = await MediaDescriptorManager.CreateAsync(
                    BlogPostConsts.EntityType,
                    System.IO.Path.GetFileNameWithoutExtension(file.Name),
                    mimeType,
                    file.Length);

                await BlobContainer.SaveAsync(img.Id.ToString(), file.CreateReadStream(), true);


                Imgs.Add(img);
            }
            await MediaDescriptorRepository.InsertManyAsync(Imgs,true);

            
            

            var user = await this.CmsUserRepository.FindByUserNameAsync("admin");

            if (user == null)
            {
                Volo.Abp.Users.UserEto newUser = new Volo.Abp.Users.UserEto()
                {
                    Id = GuidGenerator.Create(),
                    Email = "cms_author@domain.com",
                    Name = "cms_author",
                    UserName = "cms_author"
                };
                user=await this.CmsUserRepository.InsertAsync(new CmsUser(newUser), true);
            }

            var mediaList = await this.MediaDescriptorRepository.GetListAsync();

            var blogPosts = new List<BlogPostWithBlogName>();
            var datas = this.VirtualFileNpoiReader.Read<BlogPostInfo>(SourceData, "BlogPosts");
            var dbBlogPostDatas = this.BlogPostRepository.GetListAsync();
            var postTitleExcept = datas.Select(x=>x.PostTitle).Except(dbBlogPostDatas.Result.Select(o=>o.Title)).ToList();
            if (postTitleExcept.Count() == 0) return;
            foreach(var post in datas) 
            {
                if (postTitleExcept.Contains(post.PostTitle))
                {
                    Blog blog = blogList.Where(x => x.Name == post.PostBlog).First();
                    MediaDescriptor media = mediaList.Where(x => x.Name == post.PostTitle).First();
                    BlogPost blogPost = await this.BlogPostManager.CreateAsync(user, blog, post.PostTitle, post.PostSlug, content: post.PostContent.ToString(), coverImageMediaId: media.Id);
                    blogPosts.Add(new BlogPostWithBlogName()
                    {
                        BlogName = blog.Name,
                        Data = blogPost
                    });
                }
            }
            await this.BlogPostRepository.InsertManyAsync(blogPosts.Select(x => x.Data).ToList(), true);

            context.SetProperty<BlogPost>(
                blogPosts.ToDictionary(x => x.BlogName + x.Data.Slug, x => x.Data));
        }
    }

    public class BlogPostWithBlogName
    {
        public string BlogName { get; set; }

        public BlogPost Data { get; set; }
    }
}
