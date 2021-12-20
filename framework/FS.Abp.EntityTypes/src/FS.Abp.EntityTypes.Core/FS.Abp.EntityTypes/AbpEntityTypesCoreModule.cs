using Volo.Abp.Modularity;

namespace FS.Abp.EntityTypes
{
    [DependsOn(typeof(FS.Abp.Data.AbpDataModule))]
    public class AbpEntityTypesCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {

        }
    }
}
