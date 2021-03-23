using FS.Abp.Authentication.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Abp.Authentication
{
    /* Domain tests are configured to use the EF Core provider.
     * You can switch to MongoDB, however your domain tests should be
     * database independent anyway.
     */
    [DependsOn(
        typeof(AuthenticationEntityFrameworkCoreTestModule)
        )]
    public class AuthenticationDomainTestModule : AbpModule
    {
        
    }
}
