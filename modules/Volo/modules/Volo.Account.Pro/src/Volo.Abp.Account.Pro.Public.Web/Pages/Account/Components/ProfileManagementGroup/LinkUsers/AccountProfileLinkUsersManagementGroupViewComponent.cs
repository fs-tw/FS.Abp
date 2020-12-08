using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace Volo.Abp.Account.Public.Web.Pages.Account.Components.ProfileManagementGroup.LinkUsers
{
    public class AccountProfileLinkUsersManagementGroupViewComponent : AbpViewComponent
    {
        public Task<IViewComponentResult> InvokeAsync()
        {
            return Task.FromResult(View("~/Pages/Account/Components/ProfileManagementGroup/LinkUsers/Default.cshtml") as IViewComponentResult);
        }
    }
}
