using Localization.Resources.AbpUi;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;
using System.Text;
using System.Linq;
using System;
using MediatR;

namespace FS.Abp
{
    [DependsOn(
        typeof(AbpApplicationContractsModule),
        typeof(FS.Abp.AspNetCore.Mvc.AbpAspNetCoreMvcModule))]
    [DependsOn(
        typeof(FS.Abp.EntityTypes.EntityTypesApplicationModule),
        typeof(FS.Abp.EntityTypes.EntityTypesHttpApiModule)
        )]
    [DependsOn(typeof(FS.Abp.AuditLogging.AuditLoggingHttpApiModule))]
    [DependsOn(typeof(FS.Abp.Metadata.MetadataModule))]
    public class AbpHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(AbpHttpApiModule).Assembly);
            });
        }
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
        }
    }
}
