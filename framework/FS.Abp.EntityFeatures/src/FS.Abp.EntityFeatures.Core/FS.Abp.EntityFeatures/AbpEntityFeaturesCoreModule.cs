using Volo.Abp.Modularity;

namespace FS.Abp.EntityFeatures
{
    [DependsOn(typeof(Data.AbpDataModule))]
    public class AbpEntityFeaturesCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {

        }
    }
}
