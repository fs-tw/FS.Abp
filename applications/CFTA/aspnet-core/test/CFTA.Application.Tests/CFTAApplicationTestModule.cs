using Volo.Abp.Modularity;

namespace CFTA
{
    [DependsOn(
        typeof(CFTAApplicationModule),
        typeof(CFTADomainTestModule)
        )]
    public class CFTAApplicationTestModule : AbpModule
    {

    }
}