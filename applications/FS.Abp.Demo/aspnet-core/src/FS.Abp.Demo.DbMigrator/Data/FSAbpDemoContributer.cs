using FS.Abp.Demo.DbMigrator.Data.Seeder.CmsKitManagement.Blogs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace FS.Abp.Demo.DbMigrator.Data
{
    class FSAbpDemoContributer : Volo.Abp.Domain.Services.DomainService, IDataSeedContributor, ITransientDependency
    {
        public BlogsSeeder blogsSeeder => this.LazyServiceProvider.LazyGetRequiredService<BlogsSeeder>();
        public async Task SeedAsync(DataSeedContext context)
        {
            await blogsSeeder.SeedAsync(context, options =>
            {
                options.Ignore = false;
                options.FileName = "Files/Blogs/Blogs.xlsx";
                options.BlogPostCoverImageMediaDirectory = "Files/Blogs/BlogPostCoverImageMedia";
            });
        }
    }
}
