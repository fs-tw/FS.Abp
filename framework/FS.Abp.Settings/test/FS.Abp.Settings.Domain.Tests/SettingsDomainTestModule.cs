using FS.Abp.Settings.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Abp.Settings
{
    /* Domain tests are configured to use the EF Core provider.
     * You can switch to MongoDB, however your domain tests should be
     * database independent anyway.
     */
    [DependsOn(
        typeof(SettingsEntityFrameworkCoreTestModule)
        )]
    public class SettingsDomainTestModule : AbpModule
    {
        
    }
}
