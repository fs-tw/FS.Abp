using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Services;
using FS.CmsKitManagement.Data;
using FS.CmsKitManagement.Data.Vocabularies;

namespace DEMO.Data.CmsKitManagement
{
    public class CmsKitManagementDataSeedContributor : DomainService, IDataSeedContributor, ITransientDependency
    {
        public BlogsSeeder blogPostSeeder => this.LazyServiceProvider.LazyGetRequiredService<BlogsSeeder>();
        public TwZipCodeSeeder TwZipCodeSeeder => this.LazyServiceProvider.LazyGetRequiredService<TwZipCodeSeeder>();
        public VocabulariesSeeder VocabulariesSeeder => this.LazyServiceProvider.LazyGetRequiredService<VocabulariesSeeder>();


        public async Task SeedAsync(DataSeedContext context)
        {
            await TwZipCodeSeeder.SeedAsync(context);
            await blogPostSeeder.SeedAsync(context,options=> 
            {
                options.FileName = "Files/Blogs.xlsx";
                options.BlogPostCoverImageMediaDirectory = "Files/BlogPostCoverImageMedia";
            });
            await VocabulariesSeeder.SeedAsync(context, options =>
            {
                options.FileNames.Add("Files/Vocabularies/Vocabularies.xlsx");

            });

        }
    }
}