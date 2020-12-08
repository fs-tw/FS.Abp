using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Identity.Localization;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace Volo.Abp.Identity
{
    public class IdentityPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var identityGroup = context.AddGroup(IdentityPermissions.GroupName, L("Permission:IdentityManagement"));

            var rolesPermission = identityGroup.AddPermission(IdentityPermissions.Roles.Default, L("Permission:RoleManagement"));
            rolesPermission.AddChild(IdentityPermissions.Roles.Create, L("Permission:Create"));
            rolesPermission.AddChild(IdentityPermissions.Roles.Update, L("Permission:Edit"));
            rolesPermission.AddChild(IdentityPermissions.Roles.Delete, L("Permission:Delete"));
            rolesPermission.AddChild(IdentityPermissions.Roles.ManagePermissions, L("Permission:ChangePermissions"));
            rolesPermission.AddChild(IdentityPermissions.Roles.ViewChangeHistory, L("Permission:ViewChangeHistory"));

            var usersPermission = identityGroup.AddPermission(IdentityPermissions.Users.Default, L("Permission:UserManagement"));
            usersPermission.AddChild(IdentityPermissions.Users.Create, L("Permission:Create"));
            usersPermission.AddChild(IdentityPermissions.Users.Update, L("Permission:Edit"));
            usersPermission.AddChild(IdentityPermissions.Users.Delete, L("Permission:Delete"));
            usersPermission.AddChild(IdentityPermissions.Users.ManagePermissions, L("Permission:ChangePermissions"));
            usersPermission.AddChild(IdentityPermissions.Users.ViewChangeHistory, L("Permission:ViewChangeHistory"));

            var organizationUnitsPermission = identityGroup.AddPermission(IdentityPermissions.OrganizationUnits.Default, L("Permission:OrganizationUnitManagement"));
            organizationUnitsPermission.AddChild(IdentityPermissions.OrganizationUnits.ManageOU, L("Permission:ManageOU"));
            organizationUnitsPermission.AddChild(IdentityPermissions.OrganizationUnits.ManageRoles, L("Permission:ManageRoles"));
            organizationUnitsPermission.AddChild(IdentityPermissions.OrganizationUnits.ManageUsers, L("Permission:ManageUsers"));

            var claimTypesPermission = identityGroup.AddPermission(IdentityPermissions.ClaimTypes.Default, L("Permission:ClaimManagement"), multiTenancySide: MultiTenancySides.Host);
            claimTypesPermission.AddChild(IdentityPermissions.ClaimTypes.Create, L("Permission:Create"), multiTenancySide: MultiTenancySides.Host);
            claimTypesPermission.AddChild(IdentityPermissions.ClaimTypes.Update, L("Permission:Edit"), multiTenancySide: MultiTenancySides.Host);
            claimTypesPermission.AddChild(IdentityPermissions.ClaimTypes.Delete, L("Permission:Delete"), multiTenancySide: MultiTenancySides.Host);

            identityGroup.AddPermission(IdentityPermissions.SettingManagement, L("Permission:SettingManagement"));

            identityGroup
                .AddPermission(IdentityPermissions.UserLookup.Default, L("Permission:UserLookup"))
                .WithProviders(ClientPermissionValueProvider.ProviderName);

            var securityLogPermission = identityGroup.AddPermission(IdentityPermissions.SecurityLogs.Default, L("Permission:SecurityLogs"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<IdentityResource>(name);
        }
    }
}
