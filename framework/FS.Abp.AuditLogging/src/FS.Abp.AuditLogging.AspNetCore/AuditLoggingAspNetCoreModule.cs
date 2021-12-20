using Localization.Resources.AbpUi;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.AuditLogging.EntityFrameworkCore;

namespace FS.Abp.AuditLogging
{
    [DependsOn(
        typeof(FS.Abp.AuditLogging.AbpAuditLoggingCoreModule),
        typeof(AbpAspNetCoreMvcModule),
        typeof(AbpAutoMapperModule))]
    [DependsOn(typeof(Volo.Abp.AuditLogging.EntityFrameworkCore.AbpAuditLoggingEntityFrameworkCoreModule))]
    public class AbpAuditLoggingAspNetCoreModule : AbpModule
    {

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<AbpAuditLoggingAspNetCoreModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<AbpAuditLoggingAspNetCoreModule>(validate: false);
            });

            Configure<AbpAspNetCoreMvcOptions>(options =>
            {
                options.ConventionalControllers.Create(typeof(AbpAuditLoggingAspNetCoreModule).Assembly, c =>
                 {
                     c.RootPath = "audit-logging";
                     c.RemoteServiceName = "audit-logging";
                 });
            });

            context.Services.AddAbpDbContext<AbpAuditLoggingDbContext>(options =>
            {
                options.ReplaceDbContext<IAuditLoggingDbContext>();
                options.AddDefaultRepository<Volo.Abp.AuditLogging.AuditLogAction>();
            });
        }
    }
}
