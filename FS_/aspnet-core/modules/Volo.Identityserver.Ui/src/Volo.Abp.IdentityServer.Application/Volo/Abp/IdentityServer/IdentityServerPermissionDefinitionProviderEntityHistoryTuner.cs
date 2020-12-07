using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Auditing;
using Volo.Abp.Authorization.Permissions;

namespace Volo.Abp.IdentityServer
{
    public class IdentityServerPermissionDefinitionProviderEntityHistoryTuner : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var auditHelper = context.ServiceProvider.GetRequiredService<IAuditingHelper>();

            if (!auditHelper.IsEntityHistoryEnabled(typeof(Clients.Client)))
            {
                context.TryDisablePermission(AbpIdentityServerPermissions.Client.ViewChangeHistory);
            }

            if (!auditHelper.IsEntityHistoryEnabled(typeof(IdentityResources.IdentityResource)))
            {
                context.TryDisablePermission(AbpIdentityServerPermissions.IdentityResource.ViewChangeHistory);
            }

            if (!auditHelper.IsEntityHistoryEnabled(typeof(ApiResources.ApiResource)))
            {
                context.TryDisablePermission(AbpIdentityServerPermissions.ApiResource.ViewChangeHistory);
            }
        }
    }
}
