using Volo.Abp.Modularity;

namespace FS.Abp.AutoFilterer
{
    [DependsOn(typeof(Volo.Abp.Application.AbpDddApplicationModule))]
    [DependsOn(typeof(FS.Abp.AutoFilterer.AbpAutoFiltererApplicationContractsModule))]
    public class AbpAutoFiltererApplicationModule : AbpModule
    {
    }
}
