using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Modularity;

namespace FS.Cms.Host.HttpApi
{
    [DependsOn(
        typeof(FS.Cms.CmsApplicationModule),
        typeof(FS.Cms.CmsHttpApiModule),
        typeof(FS.Cms.EntityFrameworkCore.CmsEntityFrameworkCoreModule)
        )]
    public class CmsHttpApiHostModule:AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            //context.Services.AddJsonSubtypesConverterProfile<EpsyApplicationModule>();
            Configure<AbpAspNetCoreMvcOptions>(options =>
            {
                options.ConventionalControllers.Create(typeof(FS.Cms.CmsApplicationModule).Assembly, action => action.RootPath = "Cms");
            });
        }
    }
}
