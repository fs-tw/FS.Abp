using FS.CodingManagement.SerialNumbers;
using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.CodingManagement
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(CodingManagementDomainSharedModule)
    )]
    [DependsOn(typeof(EasyAbp.Abp.Trees.AbpTreesDomainModule))]
    public class CodingManagementDomainModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<ProviderOptions>(options =>
            {
                options.Providers.AddOrReplace(ProviderOptions.DefaultProviderName, 5,typeof(FS.CodingManagement.SerialNumbers.DefaultGenerator));
            });
        }

    }
}
