using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Auditing;
using Volo.Abp.Authorization.Permissions;

namespace Volo.Abp.Identity
{
    public class IdentityPermissionDefinitionProviderEntityHistoryTuner : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var auditHelper = context.ServiceProvider.GetRequiredService<IAuditingHelper>();
            
            if (!auditHelper.IsEntityHistoryEnabled(typeof(IdentityUser)))
            {
                context.TryDisablePermission(IdentityPermissions.Users.ViewChangeHistory);
            }

            if (!auditHelper.IsEntityHistoryEnabled(typeof(IdentityRole)))
            {
                context.TryDisablePermission(IdentityPermissions.Roles.ViewChangeHistory);
            }
        }
    }
}
