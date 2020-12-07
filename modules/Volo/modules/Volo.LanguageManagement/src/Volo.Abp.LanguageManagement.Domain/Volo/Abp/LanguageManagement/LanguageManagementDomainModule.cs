using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Caching;
using Volo.Abp.Domain;
using Volo.Abp.Domain.Entities.Events.Distributed;
using Volo.Abp.LanguageManagement.Localization;
using Volo.Abp.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Modularity;
using Volo.Abp.ObjectExtending;
using Volo.Abp.ObjectExtending.Modularity;
using Volo.Abp.Threading;

namespace Volo.Abp.LanguageManagement
{
    [DependsOn(
        typeof(LanguageManagementDomainSharedModule),
        typeof(AbpAutoMapperModule),
        typeof(AbpDddDomainModule),
        typeof(AbpCachingModule)
        )]
    public class LanguageManagementDomainModule : AbpModule
    {
        private static readonly OneTimeRunner OneTimeRunner = new OneTimeRunner();

        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            OneTimeRunner.Run(() =>
            {
                ModuleExtensionConfigurationHelper.ApplyEntityConfigurationToEntity(
                    LanguageManagementModuleExtensionConsts.ModuleName,
                    LanguageManagementModuleExtensionConsts.EntityNames.Language,
                    typeof(Language)
                );
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.GlobalContributors.Add<DynamicLocalizationResourceContributor>();
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("Volo.Abp.LanguageManagement", typeof(LanguageManagementResource));
            });

            context.Services.AddAutoMapperObjectMapper<LanguageManagementDomainModule>();
            
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<LanguageManagementDomainAutoMapperProfile>(validate: true);
            });

            Configure<AbpDistributedEntityEventOptions>(options =>
            {
                options.EtoMappings.Add<Language, LanguageEto>(typeof(LanguageManagementDomainModule));
                options.EtoMappings.Add<LanguageText, LanguageTextEto>(typeof(LanguageManagementDomainModule));
            });
        }
        
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            LicenseChecker.Check<LanguageManagementDomainModule>(context);
        }
    }
}
