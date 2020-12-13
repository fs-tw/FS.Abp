using Volo.Abp.Account.Localization;
using Volo.Abp.Identity;
using Volo.Abp.Ldap;
using Volo.Abp.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Modularity;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace Volo.Abp.Account
{
    [DependsOn(
        typeof(AbpIdentityApplicationContractsModule),
        typeof(AbpLdapModule)
        )]
    public class AbpAccountSharedApplicationContractsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<AbpAccountSharedApplicationContractsModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Add<AccountResource>("en")
                    .AddBaseTypes(typeof(AbpValidationResource))
                    .AddVirtualJson("/Volo/Abp/Account/Localization/Resources");
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("Volo.Account", typeof(AccountResource));
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
        }
    }
}
