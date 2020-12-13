using Volo.Abp.AspNetCore.TestBase;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace Volo.Abp.AspNetCore.Mvc.UI.Theme.Commercial
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(AbpAspNetCoreTestBaseModule),
        typeof(AbpAspNetCoreMvcUiThemeCommercialModule)
        )]
    public class AbpAspNetCoreMvcUiThemeCommercialTestModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {

        }
    }
}
