using Volo.Abp.BlobStoring;
using Volo.Abp.BlobStoring.Database;
using Volo.Abp.Modularity;

namespace FS.Abp.Core
{
    [DependsOn(
        typeof(CoreDomainSharedModule),
        typeof(Volo.Abp.Specifications.AbpSpecificationsModule),
        typeof(Volo.Abp.AuditLogging.AbpAuditLoggingDomainModule),
        typeof(EasyAbp.Abp.Trees.AbpTreesDomainModule),
        typeof(Volo.Abp.SettingManagement.AbpSettingManagementDomainModule),
        typeof(Volo.Abp.BlobStoring.Database.BlobStoringDatabaseDomainModule)
        )]
    public class CoreDomainModule : AbpModule
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
