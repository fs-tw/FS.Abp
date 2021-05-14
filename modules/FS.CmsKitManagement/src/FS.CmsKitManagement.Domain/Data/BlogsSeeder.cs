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

namespace FS.CmsKitManagement.Data
{
    public class BlogsSeederOptions : FS.Abp.Data.ISeederOptions
    {
        public bool Ignore { get; set; }
        public string FileName { get; set; }
        public string BlogPostCoverImageMediaDirectory { get; set; }
        
    }
    public class BlogsSeeder : FS.Abp.Data.Seeder<BlogsSeederOptions>, ITransientDependency
    {
        private IVirtualFileNpoiReader VirtualFileNpoiReader => this.LazyServiceProvider.LazyGetRequiredService<IVirtualFileNpoiReader>();
        private IVirtualFileProvider VirtualFileProvider => this.LazyServiceProvider.LazyGetRequiredService<IVirtualFileProvider>();
        private IBlogRepository BlogRepository => this.LazyServiceProvider.LazyGetRequiredService<IBlogRepository>();
        private ICmsUserRepository CmsUserRepository=>this.LazyServiceProvider.LazyGetRequiredService<ICmsUserRepository>();
        private IBlogPostRepository BlogPostRepository => this.LazyServiceProvider.LazyGetRequiredService<IBlogPostRepository>();
        
        private BlogManager BlogManager => this.LazyServiceProvider.LazyGetRequiredService<BlogManager>();
        private BlogPostManager BlogPostManager => this.LazyServiceProvider.LazyGetRequiredService<BlogPostManager>();

        private IBlobContainer<MediaContainer> BlobContainer => this.LazyServiceProvider.LazyGetRequiredService<IBlobContainer<MediaContainer>>();

        private MediaDescriptorManager MediaDescriptorManager => this.LazyServiceProvider.LazyGetRequiredService<MediaDescriptorManager>();
        private IMediaDescriptorRepository MediaDescriptorRepository => this.LazyServiceProvider.LazyGetRequiredService<IMediaDescriptorRepository>();
        
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

            var blogList = await this.BlogRepository.GetListAsync();
            var user = await this.CmsUserRepository.FindByUserNameAsync("admin");
            var mediaList = await this.MediaDescriptorRepository.GetListAsync();

            var blogPosts = new List<BlogPost>();
            var datas = this.VirtualFileNpoiReader.Read<BlogPostInfo>(SourceData, "BlogPosts");
            datas = datas.Where(x => x.PostTitle != null).ToList();
            if (datas.Count > 0)
            {
                return;
            }
            foreach(var post in datas) 
            {
                Blog blog = blogList.Where(x => x.Name == post.PostBlog).First();
                MediaDescriptor media = mediaList.Where(x => x.Name == post.PostTitle).First();
                BlogPost blogPost = await this.BlogPostManager.CreateAsync(user, blog, post.PostTitle, blog.Slug.ToString(), content: post.PostContent.ToString(), coverImageMediaId: media.Id);
                blogPosts.Add(blogPost);
            }
            
            
            await this.BlogPostRepository.InsertManyAsync(blogPosts, true);
        }
    }
}
