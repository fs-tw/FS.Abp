using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using System;
using System.IO;
using System.Linq;
using Volo.Abp;
using Volo.Abp.Modularity;
namespace FS.Abp.SpaServices
{
    [DependsOn(typeof(Volo.Abp.AspNetCore.AbpAspNetCoreModule))]
    public class AbpSpaServiceModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var configuration = context.Services.GetConfiguration();
            Configure<AbpSpaServiceOptions>(options =>
            {
                options.ApplicationRoot = configuration.GetSection("FS:SpaService:ApplicationRoot").Value;
                if (String.IsNullOrEmpty(options.ApplicationRoot)) throw new  Exception("appsetting.json dose not contain 'FS.SpaService.ApplicationRoot' section");
                options.ApplicationNames = configuration.GetSection("FS:SpaService:ApplicationNames").Value?.Split(',').ToList();
                if (options.ApplicationNames.Count == 0) throw new Exception("appsetting.json dose not contain 'FS.SpaService.ApplicationNames' or use ',' to add mutiple app");
                context.Services.AddSpaStaticFiles(config =>
                {
                    config.RootPath = options.ApplicationRoot;
                });
            });
        }
    }
}



