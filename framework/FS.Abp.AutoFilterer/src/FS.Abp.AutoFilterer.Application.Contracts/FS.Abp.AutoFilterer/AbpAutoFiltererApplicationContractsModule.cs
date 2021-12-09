using Volo.Abp.Modularity;

namespace FS.Abp.AutoFilterer
{
    [DependsOn(typeof(Volo.Abp.Application.AbpDddApplicationContractsModule))]
    public class AbpAutoFiltererApplicationContractsModule : AbpModule
    {
    }
}
