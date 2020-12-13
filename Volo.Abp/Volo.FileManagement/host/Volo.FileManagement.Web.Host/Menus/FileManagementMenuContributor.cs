using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Volo.Abp.Account.Localization;
using Volo.Abp.UI.Navigation;
using Volo.FileManagement.Localization;

namespace Volo.FileManagement.Menus
{
    public class FileManagementWebHostMenuContributor : IMenuContributor
    {
        private readonly IConfiguration _configuration;

        public FileManagementWebHostMenuContributor(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if (context.Menu.Name == StandardMenus.User)
            {
                await ConfigureUserMenuAsync(context);
            }
        }

        private Task ConfigureUserMenuAsync(MenuConfigurationContext context)
        {
            var l = context.GetLocalizer<FileManagementResource>();
            var accountStringLocalizer = context.GetLocalizer<AccountResource>();

            var identityServerUrl = _configuration["AuthServer:Authority"] ?? "";

            context.Menu.AddItem(new ApplicationMenuItem("Account.Manage", accountStringLocalizer["ManageYourProfile"],  $"{identityServerUrl.EnsureEndsWith('/')}Account/Manage", icon: "fa fa-cog", order: 1000, null, "_blank"));
            context.Menu.AddItem(new ApplicationMenuItem("Account.Logout", l["Logout"], url: "~/Account/Logout", icon: "fa fa-power-off", order: int.MaxValue - 1000));

            return Task.CompletedTask;
        }
    }
}
