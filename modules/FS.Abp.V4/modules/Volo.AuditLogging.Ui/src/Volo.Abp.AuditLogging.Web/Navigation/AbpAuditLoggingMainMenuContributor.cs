using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using Volo.Abp.AuditLogging.Localization;
using Volo.Abp.UI.Navigation;

namespace Volo.Abp.AuditLogging.Web.Navigation
{
    public class AbpAuditLoggingMainMenuContributor : IMenuContributor
    {
        public virtual async Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if (context.Menu.Name != StandardMenus.Main)
            {
                return;
            }

            var authorizationService = context.ServiceProvider
                .GetRequiredService<IAuthorizationService>();

            if (await context.IsGrantedAsync(AbpAuditLoggingPermissions.AuditLogs.Default))
            {
                var l = context.GetLocalizer<AuditLoggingResource>();
                context.Menu
                    .GetAdministration()
                    .AddItem(
                        new ApplicationMenuItem(
                            AbpAuditLoggingMainMenuNames.GroupName,
                            l["Menu:AuditLogging"],
                            "~/AuditLogs",
                            icon: "fa fa-file-text"
                        )
                    );
            }
        }
    }
}
