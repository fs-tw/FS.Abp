using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;
using Microsoft.Extensions.DependencyInjection;
using System.ComponentModel;
using System.Linq;

namespace FS.Abp.AuditLogging
{
    [DependsOn(
        typeof(AuditLoggingDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    [DependsOn(typeof(FS.Abp.AutoFilterer.Abstractions.AbpAutoFiltererAbstractionsModule))]
    public class AuditLoggingApplicationContractsModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.OnRegistred(s =>
            {
                var setAuditLogAttribute = TypeDescriptor.GetAttributes(s.ImplementationType)
                .OfType<ModifyCurrentAuditLogInfoAttribute>()
                .SingleOrDefault();

                if (setAuditLogAttribute != null)
                {
                    s.Interceptors.TryAdd<ModifyCurrentAuditLogInterceptor>();
                }
            });

        }
    }
}
