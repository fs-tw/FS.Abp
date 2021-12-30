using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;

namespace FS.Abp.AuditLogging
{
    [DependsOn(
        //typeof(AuditLoggingDomainModule),
        typeof(Volo.Abp.AuditLogging.AbpAuditLoggingDomainModule),
        typeof(AbpAuditLoggingApplicationContractsModule),
        typeof(AbpDddApplicationModule),
        typeof(AbpAutoMapperModule)
        )]
    public class AbpAuditLoggingApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<AbpAuditLoggingApplicationModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<AbpAuditLoggingApplicationModule>(validate: false);
            });


        }
    }
}
