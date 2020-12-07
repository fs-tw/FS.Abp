using System.Threading.Tasks;
using Volo.Abp.BlazoriseUI;
using Volo.Abp.Identity.Localization;

namespace Volo.Abp.Identity.Pro.Blazor.Pages.Identity
{
    public partial class ClaimTypeManagement
    {
        public ClaimTypeManagement()
        {
            ObjectMapperContext = typeof(AbpIdentityProBlazorModule);
            LocalizationResource = typeof(IdentityResource);

            CreatePolicyName = IdentityPermissions.ClaimTypes.Create;
            UpdatePolicyName = IdentityPermissions.ClaimTypes.Update;
            DeletePolicyName = IdentityPermissions.ClaimTypes.Delete;
        }
     
        protected override ValueTask SetBreadcrumbItemsAsync()
        {
            BreadcrumbItems.Add(new BreadcrumbItem(L["Menu:IdentityManagement"]));
            BreadcrumbItems.Add(new BreadcrumbItem(L["ClaimTypes"]));
            return ValueTask.CompletedTask;
        }

        protected override string GetDeleteConfirmationMessage(ClaimTypeDto entity)
        {
            return string.Format(L["ClaimTypeDeletionConfirmationMessage"], entity.Name);
        }
    }
}
