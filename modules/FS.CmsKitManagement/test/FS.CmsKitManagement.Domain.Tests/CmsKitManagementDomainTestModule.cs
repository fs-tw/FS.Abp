using FS.CmsKitManagement.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.CmsKitManagement
{
    /* Domain tests are configured to use the EF Core provider.
     * You can switch to MongoDB, however your domain tests should be
     * database independent anyway.
     */
    [DependsOn(
        typeof(CmsKitManagementEntityFrameworkCoreTestModule)
        )]
    public class CmsKitManagementDomainTestModule : AbpModule
    {
        
    }
}
