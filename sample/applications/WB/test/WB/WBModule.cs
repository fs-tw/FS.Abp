using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Volo.Abp.Autofac;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;

namespace WB
{

    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(WB.EntityFrameworkCore.WBEntityFrameworkCoreModule),
        typeof(FS.Abp.Npoi.Mapper.AbpNpoiMapperModule),
        typeof(Volo.Abp.AutoMapper.AbpAutoMapperModule)
    )]
    public class WBModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var configuration = context.Services.GetConfiguration();
            var hostEnvironment = context.Services.GetSingletonInstance<IHostEnvironment>();


            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<WBModule>();
            });
            context.Services.AddHostedService<WBHostedService>();
        }
    }
}
