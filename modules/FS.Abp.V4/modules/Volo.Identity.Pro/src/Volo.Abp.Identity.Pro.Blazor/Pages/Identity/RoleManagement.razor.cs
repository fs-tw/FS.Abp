using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.BlazoriseUI;
using Volo.Abp.Identity.Localization;
using Volo.Abp.PermissionManagement.Blazor.Components;

namespace Volo.Abp.Identity.Pro.Blazor.Pages.Identity
{
    public partial class RoleManagement
        
    {
        protected const string PermissionProviderName = "R";
        
        protected string ManagePermissionsPolicyName;

        protected PermissionManagementModal PermissionManagementModal;

        protected bool HasManagePermissionsPermission { get; set; }

        private string _filter = null;

        protected string Filter
        {
            get => string.IsNullOrWhiteSpace(_filter) ? "" : _filter;
            set => _filter = string.IsNullOrWhiteSpace(value) ? "" : value.Trim();
        }

        public RoleManagement()
        {
            ObjectMapperContext = typeof(AbpIdentityProBlazorModule);
            LocalizationResource = typeof(IdentityResource);
            
            CreatePolicyName = IdentityPermissions.Roles.Create;
            UpdatePolicyName = IdentityPermissions.Roles.Update;
            DeletePolicyName = IdentityPermissions.Roles.Delete;
            ManagePermissionsPolicyName = IdentityPermissions.Roles.ManagePermissions;
        }

        protected override async Task SetPermissionsAsync()
        {
            await base.SetPermissionsAsync();

            HasManagePermissionsPermission = await AuthorizationService.IsGrantedAsync(ManagePermissionsPolicyName);
        }

        protected override ValueTask SetBreadcrumbItemsAsync()
        {
            BreadcrumbItems.Add(new BreadcrumbItem(L["Menu:IdentityManagement"]));
            BreadcrumbItems.Add(new BreadcrumbItem(L["Roles"]));
            return ValueTask.CompletedTask;
        }

        protected override string GetDeleteConfirmationMessage(IdentityRoleDto entity)
        {
            return string.Format(L["RoleDeletionConfirmationMessage"], entity.Name);
        }
    }
}
