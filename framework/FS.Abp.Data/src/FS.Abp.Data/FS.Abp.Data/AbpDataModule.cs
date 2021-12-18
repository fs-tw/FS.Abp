using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace FS.Abp.Data
{
    [DependsOn(
        typeof(Volo.Abp.Data.AbpDataModule)
        )]
    public class AbpDataModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
        }
    }
}
