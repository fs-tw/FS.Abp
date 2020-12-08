using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.ObjectExtending;
using Volo.Abp.ObjectExtending.Modularity;
using Volo.Abp.Threading;

namespace Volo.Abp.AuditLogging
{
    [DependsOn(
        typeof(AbpAutoMapperModule),
        typeof(AbpAuditLoggingApplicationContractsModule),
        typeof(AbpAuditLoggingDomainModule))]
    public class AbpAuditLoggingApplicationModule : AbpModule
    {
        private static readonly OneTimeRunner OneTimeRunner = new OneTimeRunner();

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<AbpAuditLoggingApplicationModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<AbpAuditLoggingApplicationAutoMapperProfile>(validate: true);
            });
        }

        public override void PostConfigureServices(ServiceConfigurationContext context)
        {
            OneTimeRunner.Run(() =>
            {
                ModuleExtensionConfigurationHelper
                    .ApplyEntityConfigurationToApi(
                        AuditLoggingModuleExtensionConsts.ModuleName,
                        AuditLoggingModuleExtensionConsts.EntityNames.AuditLog,
                        getApiTypes: new[] {typeof(AuditLogDto)}
                    );

                ModuleExtensionConfigurationHelper
                    .ApplyEntityConfigurationToApi(
                        AuditLoggingModuleExtensionConsts.ModuleName,
                        AuditLoggingModuleExtensionConsts.EntityNames.AuditLogAction,
                        getApiTypes: new[] { typeof(AuditLogAction) }
                    );

                ModuleExtensionConfigurationHelper
                    .ApplyEntityConfigurationToApi(
                        AuditLoggingModuleExtensionConsts.ModuleName,
                        AuditLoggingModuleExtensionConsts.EntityNames.EntityChange,
                        getApiTypes: new[] { typeof(EntityChangeDto) }
                    );
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            //LicenseChecker.Check<AbpAuditLoggingApplicationModule>(context);
        }
    }
}
