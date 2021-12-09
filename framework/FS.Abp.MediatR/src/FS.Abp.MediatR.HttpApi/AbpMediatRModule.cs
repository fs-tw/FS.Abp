using Localization.Resources.AbpUi;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;
using System.Text;
using System.Linq;
using System;
using MediatR;

namespace FS.Abp.MediatR
{
    [DependsOn(typeof(FS.Abp.MediatR.AbpMediatRCoreModule))]
    [DependsOn(typeof(AbpAspNetCoreMvcModule))]
    public class AbpMediatRModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddMediatR(typeof(AbpMediatRModule));
        }
    }
}
