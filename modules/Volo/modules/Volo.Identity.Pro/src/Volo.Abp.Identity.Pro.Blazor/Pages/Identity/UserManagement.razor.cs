using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.BlazoriseUI;
using Volo.Abp.Identity.Localization;
using Volo.Abp.PermissionManagement.Blazor.Components;

namespace Volo.Abp.Identity.Pro.Blazor.Pages.Identity
{
    public partial class UserManagement
    {
        protected const string PermissionProviderName = "U";

        protected const string DefaultSelectedTab = "UserInformations";

        protected PermissionManagementModal PermissionManagementModal;

        protected IReadOnlyList<IdentityRoleDto> Roles;

        protected AssignedRoleViewModel[] NewUserRoles;

        protected AssignedRoleViewModel[] EditUserRoles;

        protected string CreateModalSelectedTab = DefaultSelectedTab;

        protected string EditModalSelectedTab = DefaultSelectedTab;

        protected string ManagePermissionsPolicyName;

        private string _filter = null;

        protected string Filter
        {
            get => string.IsNullOrWhiteSpace(_filter) ? "" : _filter;
            set => _filter = string.IsNullOrWhiteSpace(value) ? "" : value.Trim();
        }

        protected bool HasManagePermissionsPermission { get; set; }

        public UserManagement()
        {
            ObjectMapperContext = typeof(AbpIdentityProBlazorModule);
            LocalizationResource = typeof(IdentityResource);

            CreatePolicyName = IdentityPermissions.Users.Create;
            UpdatePolicyName = IdentityPermissions.Users.Update;
            DeletePolicyName = IdentityPermissions.Users.Delete;
            ManagePermissionsPolicyName = IdentityPermissions.Users.ManagePermissions;
        }

        protected override async Task OnInitializedAsync()
        {
            await base.OnInitializedAsync();

            Roles = (await AppService.GetAssignableRolesAsync()).Items;
        }

        protected override async Task SetPermissionsAsync()
        {
            await base.SetPermissionsAsync();

            HasManagePermissionsPermission = await AuthorizationService.IsGrantedAsync(IdentityPermissions.Users.ManagePermissions);
        }

        protected override Task OpenCreateModalAsync()
        {
            CreateModalSelectedTab = DefaultSelectedTab;

            NewUserRoles = Roles.Select(x => new AssignedRoleViewModel
            {
                Name = x.Name,
                IsAssigned = x.IsDefault
            }).ToArray();

            return base.OpenCreateModalAsync();
        }

        protected override Task CreateEntityAsync()
        {
            NewEntity.RoleNames = NewUserRoles.Where(x => x.IsAssigned).Select(x => x.Name).ToArray();

            return base.CreateEntityAsync();
        }

        protected override async Task OpenEditModalAsync(IdentityUserDto entity)
        {
            EditModalSelectedTab = DefaultSelectedTab;

            var userRoleNames = (await AppService.GetRolesAsync(entity.Id)).Items.Select(r => r.Name).ToList();

            EditUserRoles = Roles.Select(x => new AssignedRoleViewModel
            {
                Name = x.Name,
                IsAssigned = userRoleNames.Contains(x.Name)
            }).ToArray();

            await base.OpenEditModalAsync(entity);
        }

        protected override Task UpdateEntityAsync()
        {
            EditingEntity.RoleNames = EditUserRoles.Where(x => x.IsAssigned).Select(x => x.Name).ToArray();

            return base.UpdateEntityAsync();
        }

        protected override ValueTask SetBreadcrumbItemsAsync()
        {
            BreadcrumbItems.Add(new BreadcrumbItem(L["Menu:IdentityManagement"]));
            BreadcrumbItems.Add(new BreadcrumbItem(L["Users"]));
            return ValueTask.CompletedTask;
        }

        protected override string GetDeleteConfirmationMessage(IdentityUserDto entity)
        {
            return string.Format(L["UserDeletionConfirmationMessage"], entity.UserName);
        }
    }

    public class AssignedRoleViewModel
    {
        public string Name { get; set; }

        public bool IsAssigned { get; set; }
    }
}
