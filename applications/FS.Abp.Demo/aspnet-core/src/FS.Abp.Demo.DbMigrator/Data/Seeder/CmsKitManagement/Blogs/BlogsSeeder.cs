using FS.Abp.Data;
using FS.Abp.Npoi.Mapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.BlobStoring;
using Volo.Abp.Data;
using Volo.Abp.VirtualFileSystem;
using Volo.CmsKit.Blogs;
using Volo.CmsKit.MediaDescriptors;
using Volo.CmsKit.Users;

namespace FS.Abp.Demo.DbMigrator.Data.Seeder.CmsKitManagement.Blogs
{
    public class BlogsSeederOptions : FS.Abp.Data.ISeederOptions
    {
        public bool Ignore { get; set; }
        public string FileName { get; set; }
        public string BlogPostCoverImageMediaDirectory { get; set; }
        public string BlogSheetName { get; set; } = "Blogs";
        public string UserSheetName { get; set; } = "Author";
        public string BlogPostSheetName { get; set; } = "BlogPosts";
    }

    public class BlogsSeeder : FS.Abp.Data.Seeder<BlogsSeederOptions>
    {
        private IVirtualFileNpoiReader VirtualFileNpoiReader => this.LazyServiceProvider.LazyGetRequiredService<IVirtualFileNpoiReader>();

        private IBlogRepository BlogRepository => this.LazyServiceProvider.LazyGetRequiredService<IBlogRepository>();
        private ICmsUserRepository CmsUserRepository => this.LazyServiceProvider.LazyGetRequiredService<ICmsUserRepository>();
        private IBlogPostRepository BlogPostRepository => this.LazyServiceProvider.LazyGetRequiredService<IBlogPostRepository>();
        private IVirtualFileProvider VirtualFileProvider => this.LazyServiceProvider.LazyGetRequiredService<IVirtualFileProvider>();
        private IMediaDescriptorRepository MediaDescriptorRepository => this.LazyServiceProvider.LazyGetRequiredService<IMediaDescriptorRepository>();
        private IBlobContainer<MediaContainer> BlobContainer => this.LazyServiceProvider.LazyGetRequiredService<IBlobContainer<MediaContainer>>();


        private BlogManager BlogManager => this.LazyServiceProvider.LazyGetRequiredService<BlogManager>();
        private BlogPostManager BlogPostManager => this.LazyServiceProvider.LazyGetRequiredService<BlogPostManager>();
        private MediaDescriptorManager MediaDescriptorManager => this.LazyServiceProvider.LazyGetRequiredService<MediaDescriptorManager>();

        private IVirtualFileProvider virtualFileProvider => this.LazyServiceProvider.LazyGetRequiredService<IVirtualFileProvider>();
        protected override async Task SeedAsync(DataSeedContext context)
        {
            //部落格
            await processBlogAsync();
            //使用者
            await processUserAsync();
            //部落格貼文封面圖
            await processMediaAsync();
            //部落格貼文
            await processBlogPostAsync();


            async Task processBlogAsync()
            {
                var blogsCount = await this.BlogRepository.GetCountAsync();
                if (blogsCount != 0) return;
                //var file = this.virtualFileProvider.GetDirectoryContents(@"Files");
                var blogListByExcel = this.VirtualFileNpoiReader.Read<BlogInfo>(Options.FileName, Options.BlogSheetName);
                blogListByExcel = blogListByExcel.Where(x => x.Name != null).ToList();
                var blogs = new Dictionary<string, Blog>();

                foreach (var blogInfo in blogListByExcel)
                {
                    Blog blog = await this.BlogManager.CreateAsync(blogInfo.Name, blogInfo.Slug);
                    blogs.Add(blogInfo.Name, blog);
                }

                await this.BlogRepository.InsertManyAsync(blogs.Select(x => x.Value), true);
                context.SetProperty(blogs);
            }

            async Task processUserAsync()
            {
                var user = await this.CmsUserRepository.FindByUserNameAsync("cms_author");
                if (user != null) return;

                var userByExcel = this.VirtualFileNpoiReader.Read<UserInfo>(Options.FileName, Options.UserSheetName);
                var users = new Dictionary<string, CmsUser>();
                foreach (var userInfo in userByExcel)
                {
                    Volo.Abp.Users.UserEto newUser = new Volo.Abp.Users.UserEto()
                    {
                        Id = GuidGenerator.Create(),
                        Email = userInfo.Email,
                        Name = userInfo.Name,
                        UserName = userInfo.Name
                    };
                    users.Add(newUser.Id.ToString(), new CmsUser(newUser));
                    user = await this.CmsUserRepository.InsertAsync(new CmsUser(newUser), true);
                }
                context.SetProperty(users);
            }

            async Task processMediaAsync()
            {
                var mediaDescriptor = new Dictionary<string, MediaDescriptor>();
                foreach (var file in VirtualFileProvider.GetDirectoryContents(Options.BlogPostCoverImageMediaDirectory))
                {
                    var mimeType = Utils.FileExtensionContentTypeUtils.GetMimeType(System.IO.Path.GetExtension(file.Name));

                    MediaDescriptor img = await MediaDescriptorManager.CreateAsync(
                        BlogPostConsts.EntityType,
                        System.IO.Path.GetFileNameWithoutExtension(file.Name),
                        mimeType,
                        file.Length);

                    await BlobContainer.SaveAsync(img.Id.ToString(), file.CreateReadStream(), true);

                    mediaDescriptor.Add(img.Name, img);
                }
                await MediaDescriptorRepository.InsertManyAsync(mediaDescriptor.Select(x => x.Value), true);
                context.SetProperty(mediaDescriptor);
            }

            async Task processBlogPostAsync()
            {
                var blogs = context.GetProperty<Blog>();
                var users = context.GetProperty<CmsUser>();
                var mediaDescriptor = context.GetProperty<MediaDescriptor>();

                var blogsPostCount = await this.BlogPostRepository.GetCountAsync();
                if (blogsPostCount != 0) return;

                var postListByExcel = this.VirtualFileNpoiReader.Read<PostInfo>(Options.FileName, Options.BlogPostSheetName);
                postListByExcel = postListByExcel.Where(x => x.BlogName != null).ToList();
                var posts = new List<BlogPostWithBlogName>();

                foreach (var postInfo in postListByExcel)
                {
                    CmsUser user = users.Where(x => x.Value.UserName == postInfo.AuthorName).Select(x => x.Value).Single();
                    Blog blog = blogs.Where(x => x.Value.Name == postInfo.BlogName).Select(x => x.Value).Single();
                    MediaDescriptor media = mediaDescriptor.Where(x => x.Value.Name == postInfo.imageName).Select(x => x.Value).Single();
                    BlogPost blogPost = await this.BlogPostManager.CreateAsync(user, blog, postInfo.Title, postInfo.Slug, content: postInfo.Content, coverImageMediaId: media.Id);

                    posts.Add(new BlogPostWithBlogName()
                    {
                        BlogName = blog.Name,
                        Data = blogPost
                    });
                }

                await this.BlogPostRepository.InsertManyAsync(posts.Select(x => x.Data).ToList(), true);
                context.SetProperty<BlogPost>(
                posts.ToDictionary(x => x.BlogName + x.Data.Slug, x => x.Data));
            }
        }
        public class BlogInfo
        {
            public string Name { get; set; }
            public string Slug { get; set; }
        }
        public class UserInfo
        {
            public string Name { get; set; }
            public string Email { get; set; }
        }
        public class PostInfo
        {
            public string BlogName { get; set; }
            public string AuthorName { get; set; }
            public string Title { get; set; }
            public string Slug { get; set; }
            public string Content { get; set; }
            public string imageName { get; set; }
        }
        public class BlogPostWithBlogName
        {
            public string BlogName { get; set; }

            public BlogPost Data { get; set; }
        }




    }
}
