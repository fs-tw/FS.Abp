using Volo.Abp.Modularity;

namespace Volo.Abp.Account
{
    [DependsOn(
        typeof(AbpAccountSharedApplicationContractsModule)
        )]
    public class AbpAccountPublicApplicationContractsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {

        } 

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
        }
    }
}
