using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.VirtualFileSystem;
using FS.Abp.Localization;

namespace FS.Abp
{
    [DependsOn(
        typeof(AbpValidationModule)
    )]
    [DependsOn(
        typeof(EasyAbp.Abp.Trees.AbpTreesDomainSharedModule)
        )]
    [DependsOn(typeof(FS.Abp.AuditLogging.AuditLoggingDomainSharedModule))]
    public class AbpDomainSharedModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<AbpDomainSharedModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Add<AbpResource>("en")
                    .AddVirtualJson("Localization/Abp");

                options.DefaultResourceType = typeof(AbpResource);
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("Abp", typeof(AbpResource));
            });
        }
    }
}
