using FS.Abp.Npoi.Mapper;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.CmsKit.Blogs;
using Volo.CmsKit.MediaDescriptors;
using Volo.Abp.BlobStoring;

namespace FS.CmsKitManagement.Data
{
    public class BlogsSeeder : DomainService, ITransientDependency
    {
        private const string SourceData = "/Files/Blogs.xlsx";
        private Volo.CmsKit.Blogs.IBlogRepository blogRepository => this.LazyServiceProvider.LazyGetRequiredService<IBlogRepository>();//部落格ID
        private readonly Volo.CmsKit.Users.ICmsUserRepository cmsUserRepository;//USER ID=作者ID
        private IBlogPostRepository blogPostRepository => this.LazyServiceProvider.LazyGetRequiredService<IBlogPostRepository>();
        
        private IVirtualFileNpoiReader VirtualFileNpoiReader => this.LazyServiceProvider.LazyGetRequiredService<IVirtualFileNpoiReader>();
        private BlogManager BlogManager => this.LazyServiceProvider.LazyGetRequiredService<BlogManager>();
        private BlogPostManager BlogPostManager => this.LazyServiceProvider.LazyGetRequiredService<BlogPostManager>();

        //upload coveImg
        private IBlobContainer<MediaContainer> blobContainer => this.LazyServiceProvider.LazyGetRequiredService<IBlobContainer<MediaContainer>>();
        private Volo.Abp.VirtualFileSystem.IVirtualFileProvider virtualFileProvider => this.LazyServiceProvider.LazyGetRequiredService<Volo.Abp.VirtualFileSystem.IVirtualFileProvider>();
        private MediaDescriptorManager mediaDescriptorManager => this.LazyServiceProvider.LazyGetRequiredService<MediaDescriptorManager>();
        private IMediaDescriptorRepository mediaDescriptorRepository => this.LazyServiceProvider.LazyGetRequiredService<IMediaDescriptorRepository>();

        

        public BlogsSeeder(
                Volo.CmsKit.Users.ICmsUserRepository cmsUserRepository
            )
        {
            this.cmsUserRepository = cmsUserRepository;

        }
        
        public async Task SeedAsync(DataSeedContext context)
        {
            var blogsCount = await this.blogRepository.GetCountAsync();
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

                await this.blogRepository.InsertManyAsync(blogs, true);
            }


            var Imgs = new List<MediaDescriptor>();
            foreach (var file in virtualFileProvider.GetDirectoryContents("Files/BlogPostCoverImageMedia")) 
            {
                var mimeType = Utils.FileExtensionContentTypeUtils.GetMimeType(System.IO.Path.GetExtension(file.Name));
                
                MediaDescriptor img = await mediaDescriptorManager.CreateAsync(
                    BlogPostConsts.EntityType,
                    System.IO.Path.GetFileNameWithoutExtension(file.Name),
                    mimeType,
                    file.Length);

                await blobContainer.SaveAsync(img.Id.ToString(), file.CreateReadStream(), true);


                Imgs.Add(img);
            }
            await mediaDescriptorRepository.InsertManyAsync(Imgs,true);

            var blogList = await this.blogRepository.GetListAsync();
            var user = await this.cmsUserRepository.FindByUserNameAsync("admin");
            var mediaList = await this.mediaDescriptorRepository.GetListAsync();

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
            
            
            await this.blogPostRepository.InsertManyAsync(blogPosts, true);
        }
    }
}
