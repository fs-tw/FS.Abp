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
        }
    }
}



