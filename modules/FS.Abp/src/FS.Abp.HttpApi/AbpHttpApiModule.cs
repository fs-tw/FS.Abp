using Localization.Resources.AbpUi;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;
using System.Text;
using System.Linq;
using System;

namespace FS.Abp
{
    [DependsOn(
        typeof(AbpApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]
    [DependsOn(typeof(FS.Abp.AspNetCore.Mvc.AbpAspNetCoreMvcModule))]
    public class AbpHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(AbpHttpApiModule).Assembly);
            });
        }
    }
}
