using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;
using Microsoft.Extensions.DependencyInjection;
using System.ComponentModel;
using System.Linq;

namespace FS.Abp.AuditLogging
{
    [DependsOn(
        typeof(AbpAuditLoggingCoreModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    public class AbpAuditLoggingApplicationContractsModule : AbpModule
    {
        //public override void PreConfigureServices(ServiceConfigurationContext context)
        //{
        //    context.Services.OnRegistred(s =>
        //    {
        //        var setAuditLogAttribute = TypeDescriptor.GetAttributes(s.ImplementationType)
        //        .OfType<ModifyCurrentAuditLogInfoAttribute>()
        //        .SingleOrDefault();

        //        if (setAuditLogAttribute != null)
        //        {
        //            s.Interceptors.TryAdd<ModifyCurrentAuditLogInterceptor>();
        //        }
        //    });

        //}
    }
}
