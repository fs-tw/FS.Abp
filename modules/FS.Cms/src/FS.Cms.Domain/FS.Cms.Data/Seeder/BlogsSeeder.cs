using FS.Abp.VirtualFileSystem;
using FS.Cms.Blogs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Guids;


namespace FS.Cms.Data.Seeder
{
    public class BlogsSeeder : ITransientDependency
    {
        private readonly string fileRoute = "/Files/Data/Blogs/Blogs.json";
        public IGuidGenerator _guidGenerator { get; set; }
        public IVirtualFileJsonReader _virtualFileJsonReader { get; set; }
        public Blogs.IBlogsStore _blogsStore { get; set; }

        public async Task SeedAsync(DataSeedContext context)
        {
            var hasDatas = (await this._blogsStore.Blog.GetCountAsync()) > 0;
            if (hasDatas) return;

            List<Blog> sourceData = this._virtualFileJsonReader.ReadJson<List<Blog>>(fileRoute);

            var i = 0;
            foreach (var item in sourceData)
            {
                var definition = this._blogsStore.Blog.Where(x => x.No == item.No).FirstOrDefault();
                if (definition != null) continue;

                Blog blog = new Blog();
                blog.No = item.No;
                blog.DisplayName = item.DisplayName;
                blog.Description = item.Description;
                blog.Disable = false;
                blog.Sequence = i;
                blog.TenantId = context.TenantId;
                EntityHelper.TrySetId(blog, () => this._guidGenerator.Create(), true);

                blog.Children = createChildren(context, blog.Id, blog.Children.ToList());

                await this._blogsStore.Blog.InsertAsync(blog, true).ConfigureAwait(false);
                i++;
            }
        }

        private List<Blog> createChildren(DataSeedContext context, Guid parentId, List<Blog> children)
        {
            var result = new List<Blog>();
            var i = 0;
            foreach (var item in children)
            {

                Blog blog = new Blog();
                blog.ParentId = parentId;
                blog.No = item.No;
                blog.DisplayName = item.DisplayName;
                blog.Description = item.Description;
                blog.Disable = false;
                blog.Sequence = i;
                blog.TenantId = context.TenantId;
                EntityHelper.TrySetId(blog, () => this._guidGenerator.Create(), true);

                blog.Children = createChildren(context, blog.Id, item.Children.ToList());

                result.Add(blog);
                i++;
            }

            return result;
        }

    }
}
