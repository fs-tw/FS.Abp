using Volo.Abp.Modularity;

namespace FS.Abp.AutoFilterer
{
    [DependsOn(typeof(Volo.Abp.Application.AbpDddApplicationContractsModule))]
    [DependsOn(typeof(FS.Abp.AutoFilterer.AbpAutoFiltererCoreModule))]
    public class AbpAutoFiltererApplicationContractsModule : AbpModule
    {
    }
}
