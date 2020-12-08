using Volo.Abp.Authorization.Permissions;
using Volo.Abp.IdentityServer.Localization;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace Volo.Abp.IdentityServer
{
    public class AbpIdentityServerPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var identityServerGroup = context.AddGroup(AbpIdentityServerPermissions.GroupName, L("Permission:IdentityServer"));

            var apiScope = identityServerGroup.AddPermission(AbpIdentityServerPermissions.ApiScope.Default, L("Permission:ApiScope"), MultiTenancySides.Host);
            apiScope.AddChild(AbpIdentityServerPermissions.ApiScope.Update, L("Permission:Edit"), MultiTenancySides.Host);
            apiScope.AddChild(AbpIdentityServerPermissions.ApiScope.Delete, L("Permission:Delete"), MultiTenancySides.Host);
            apiScope.AddChild(AbpIdentityServerPermissions.ApiScope.Create, L("Permission:Create"), MultiTenancySides.Host);
            apiScope.AddChild(AbpIdentityServerPermissions.ApiScope.ViewChangeHistory, L("Permission:ViewChangeHistory"), MultiTenancySides.Host);

            var identityResource = identityServerGroup.AddPermission(AbpIdentityServerPermissions.IdentityResource.Default, L("Permission:IdentityResources"), MultiTenancySides.Host);
            identityResource.AddChild(AbpIdentityServerPermissions.IdentityResource.Update, L("Permission:Edit"), MultiTenancySides.Host);
            identityResource.AddChild(AbpIdentityServerPermissions.IdentityResource.Delete, L("Permission:Delete"), MultiTenancySides.Host);
            identityResource.AddChild(AbpIdentityServerPermissions.IdentityResource.Create, L("Permission:Create"), MultiTenancySides.Host);
            identityResource.AddChild(AbpIdentityServerPermissions.IdentityResource.ViewChangeHistory, L("Permission:ViewChangeHistory"), MultiTenancySides.Host);

            var apiResource = identityServerGroup.AddPermission(AbpIdentityServerPermissions.ApiResource.Default, L("Permission:ApiResources"), MultiTenancySides.Host);
            apiResource.AddChild(AbpIdentityServerPermissions.ApiResource.Update, L("Permission:Edit"), MultiTenancySides.Host);
            apiResource.AddChild(AbpIdentityServerPermissions.ApiResource.Delete, L("Permission:Delete"), MultiTenancySides.Host);
            apiResource.AddChild(AbpIdentityServerPermissions.ApiResource.Create, L("Permission:Create"), MultiTenancySides.Host);
            apiResource.AddChild(AbpIdentityServerPermissions.ApiResource.ViewChangeHistory, L("Permission:ViewChangeHistory"), MultiTenancySides.Host);

            var client = identityServerGroup.AddPermission(AbpIdentityServerPermissions.Client.Default, L("Permission:Clients"), MultiTenancySides.Host);
            client.AddChild(AbpIdentityServerPermissions.Client.Update, L("Permission:Edit"), MultiTenancySides.Host);
            client.AddChild(AbpIdentityServerPermissions.Client.Delete, L("Permission:Delete"), MultiTenancySides.Host);
            client.AddChild(AbpIdentityServerPermissions.Client.Create, L("Permission:Create"), MultiTenancySides.Host);
            client.AddChild(AbpIdentityServerPermissions.Client.ManagePermissions, L("Permission:ManagePermissions"), MultiTenancySides.Host);
            client.AddChild(AbpIdentityServerPermissions.Client.ViewChangeHistory, L("Permission:ViewChangeHistory"), MultiTenancySides.Host);
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<AbpIdentityServerResource>(name);
        }
    }
}
