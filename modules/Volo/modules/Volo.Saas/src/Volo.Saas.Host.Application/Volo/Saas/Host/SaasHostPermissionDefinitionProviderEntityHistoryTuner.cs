using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Auditing;
using Volo.Abp.Authorization.Permissions;
using Volo.Saas.Editions;
using Volo.Saas.Tenants;

namespace Volo.Saas.Host
{
    public class SaasHostPermissionDefinitionProviderEntityHistoryTuner : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var auditHelper = context.ServiceProvider.GetRequiredService<IAuditingHelper>();

            if (!auditHelper.IsEntityHistoryEnabled(typeof(Tenant)))
            {
                context.TryDisablePermission(SaasHostPermissions.Tenants.ViewChangeHistory);
            }

            if (!auditHelper.IsEntityHistoryEnabled(typeof(Edition)))
            {
                context.TryDisablePermission(SaasHostPermissions.Editions.ViewChangeHistory);
            }
        }
    }
}
