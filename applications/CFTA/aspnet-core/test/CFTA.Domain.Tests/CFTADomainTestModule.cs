using CFTA.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace CFTA
{
    [DependsOn(
        typeof(CFTAEntityFrameworkCoreTestModule)
        )]
    public class CFTADomainTestModule : AbpModule
    {

    }
}