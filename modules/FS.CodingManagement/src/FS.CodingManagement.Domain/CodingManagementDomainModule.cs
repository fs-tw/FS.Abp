using FS.Coding.SerialNumbers;
using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.CodingManagement
{
    [DependsOn(
        typeof(CodingManagementDomainSharedModule)
    )]
    [DependsOn(typeof(FS.Coding.Codes.CodesDomainModule))]
    public class CodingManagementDomainModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<ProviderOptions>(options =>
            {
                options.Providers.AddOrReplace(ProviderOptions.DefaultProviderName, 5,typeof(FS.Coding.SerialNumbers.DefaultGenerator));
            });
        }

    }
}
