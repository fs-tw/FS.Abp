using Volo.Abp.BlobStoring;
using Volo.Abp.BlobStoring.Database;
using Volo.Abp.Modularity;

namespace FS.Cms
{
    [DependsOn(
        typeof(CmsDomainSharedModule),
        typeof(FS.Abp.CodingManagement.CodingManagementDomainModule),
        typeof(Volo.Abp.BlobStoring.Database.BlobStoringDatabaseDomainModule)
        )]
    public class CmsDomainModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context) 
        {
            Configure<AbpBlobStoringOptions>(options =>
            {
                options.Containers.ConfigureDefault(container =>
                {
                    container.UseDatabase();
                });
            });
        }
    }
}
