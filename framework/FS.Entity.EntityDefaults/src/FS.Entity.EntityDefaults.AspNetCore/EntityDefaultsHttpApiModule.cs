using Localization.Resources.AbpUi;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.Entity.EntityDefaults
{
    [DependsOn(
        typeof(AbpAspNetCoreMvcModule))]
    [DependsOn(
        typeof(FS.Entity.EntityDefaults.EntityDefaultsApplicationModule),
        typeof(FS.Entity.EntityDefaults.EntityFrameworkCore.EntityDefaultsEntityFrameworkCoreModule))]
    public class EntityDefaultsAspNetCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
        }
    }
}


