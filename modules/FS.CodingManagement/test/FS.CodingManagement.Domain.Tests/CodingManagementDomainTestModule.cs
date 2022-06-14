using FS.Coding.SerialNumbers;
using FS.CodingManagement.EntityFrameworkCore;
using FS.CodingManagement.SerialNumbers;
using Volo.Abp.Modularity;

namespace FS.CodingManagement
{
    /* Domain tests are configured to use the EF Core provider.
     * You can switch to MongoDB, however your domain tests should be
     * database independent anyway.
     */
    [DependsOn(
        typeof(CodingManagementEntityFrameworkCoreTestModule)
        )]
    public class CodingManagementDomainTestModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<ProviderOptions>(options =>
            {
                options.Providers.AddOrReplace(ProviderOptions.DefaultProviderName, 6);
            });
        }
    }
}
