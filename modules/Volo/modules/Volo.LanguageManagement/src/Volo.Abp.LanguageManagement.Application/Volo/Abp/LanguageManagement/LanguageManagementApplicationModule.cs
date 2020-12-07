using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.LanguageManagement.Dto;
using Volo.Abp.Modularity;
using Volo.Abp.ObjectExtending;
using Volo.Abp.ObjectExtending.Modularity;
using Volo.Abp.SettingManagement;
using Volo.Abp.Threading;

namespace Volo.Abp.LanguageManagement
{
    [DependsOn(
        typeof(LanguageManagementDomainModule),
        typeof(LanguageManagementApplicationContractsModule),
        typeof(AbpAutoMapperModule),
        typeof(AbpSettingManagementDomainModule)
        )]
    public class LanguageManagementApplicationModule : AbpModule
    {
        private static readonly OneTimeRunner OneTimeRunner = new OneTimeRunner();

        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            OneTimeRunner.Run(() =>
            {
                ModuleExtensionConfigurationHelper
                    .ApplyEntityConfigurationToApi(
                        LanguageManagementModuleExtensionConsts.ModuleName,
                        LanguageManagementModuleExtensionConsts.EntityNames.Language,
                        getApiTypes: new[] { typeof(LanguageDto) },
                        createApiTypes: new[] { typeof(CreateLanguageDto) },
                        updateApiTypes: new[] { typeof(UpdateLanguageDto) }
                    );
            });

        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<LanguageManagementApplicationModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<LanguageManagementApplicationAutoMapperProfile>(validate: true);
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            LicenseChecker.Check<LanguageManagementApplicationModule>(context);
        }
    }
}
