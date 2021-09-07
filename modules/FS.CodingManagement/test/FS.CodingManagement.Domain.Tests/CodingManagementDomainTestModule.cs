using FS.CodingManagement.EntityFrameworkCore;
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
        
    }
}
