using Volo.Abp.Domain;
using Volo.Abp.Modularity;
using Volo.Abp.TextTemplating;

namespace Volo.Abp.TextTemplateManagement
{
    [DependsOn(
        typeof(TextTemplateManagementDomainSharedModule),
        typeof(AbpTextTemplatingModule),
        typeof(AbpDddDomainModule)
        )]
    public class TextTemplateManagementDomainModule : AbpModule
    {
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            LicenseChecker.Check<TextTemplateManagementDomainModule>(context);
        }
    }
}
