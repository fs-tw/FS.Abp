using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AuditLogging.Localization;
using Volo.Abp.UI.Navigation;

namespace Volo.Abp.AuditLogging.Blazor.Menus
{
    public class AbpAuditLoggingMenuContributor : IMenuContributor
    {
        public async Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if (context.Menu.Name == StandardMenus.Main)
            {
                await ConfigureMainMenu(context);
            }
        }

        protected virtual async Task ConfigureMainMenu(MenuConfigurationContext context)
        {
            var authorizationService = context.ServiceProvider
                .GetRequiredService<IAuthorizationService>();

            if (await context.IsGrantedAsync(AbpAuditLoggingPermissions.AuditLogs.Default))
            {
                var l = context.GetLocalizer<AuditLoggingResource>();
                context.Menu
                    .GetAdministration()
                    .AddItem(
                        new ApplicationMenuItem(
                            AbpAuditLoggingMenus.GroupName,
                            l["Menu:AuditLogging"],
                            "/audit-logs",
                            icon: "fa fa-file-alt"
                        )
                    );
            }
        }
    }
}