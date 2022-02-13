
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.Entity.MultiLinguals
{
    [DependsOn(
        typeof(AbpAspNetCoreMvcModule))]
    [DependsOn(
        typeof(MultiLingualsApplicationModule),
        typeof(EntityFrameworkCore.MultiLingualsEntityFrameworkCoreModule))]
    public class MultiLingualsAspNetCoreModule : AbpModule
    {


        public override void ConfigureServices(ServiceConfigurationContext context)
        {
        }
    }
}


