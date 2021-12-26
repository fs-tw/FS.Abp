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
        typeof(FS.Abp.AuditLogging.AbpAuditLoggingApplicationModule),
        typeof(FS.Abp.AuditLogging.EntityFrameworkCore.AuditLoggingEntityFrameworkCoreModule),
        typeof(AbpAspNetCoreMvcModule),
        typeof(AbpAutoMapperModule))]
    public class AbpAuditLoggingAspNetCoreModule : AbpModule
    {

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<Volo.Abp.Auditing.AbpAuditingOptions>(options =>
            {
                options.Contributors.Add(new AuditLogContributor());
            });

            Configure<AbpAspNetCoreMvcOptions>(options =>
            {
                options.ConventionalControllers.Create(typeof(AbpAuditLoggingApplicationModule).Assembly, c =>
                 {
                     c.RootPath = "audit-logging";
                     c.RemoteServiceName = "audit-logging";
                 });
            });

            Configure<FS.Abp.MediatR.AbpMediatROptions>(options =>
            {
                options.AddOrReplaceSetting("audit-logging", "audit-logging", typeof(AbpAuditLoggingApplicationModule).Assembly);
            });
        }
    }
}
