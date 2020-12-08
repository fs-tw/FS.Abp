using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;
using Volo.Saas.Localization;

namespace Volo.Saas.Host
{
    public class SaasHostPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var saasGroup = context.AddGroup(SaasHostPermissions.GroupName, L("Permission:Saas"), multiTenancySide: MultiTenancySides.Host);

            var tenantsPermission = saasGroup.AddPermission(SaasHostPermissions.Tenants.Default, L("Permission:TenantManagement"), multiTenancySide: MultiTenancySides.Host);
            tenantsPermission.AddChild(SaasHostPermissions.Tenants.Create, L("Permission:Create"), multiTenancySide: MultiTenancySides.Host);
            tenantsPermission.AddChild(SaasHostPermissions.Tenants.Update, L("Permission:Edit"), multiTenancySide: MultiTenancySides.Host);
            tenantsPermission.AddChild(SaasHostPermissions.Tenants.Delete, L("Permission:Delete"), multiTenancySide: MultiTenancySides.Host);
            tenantsPermission.AddChild(SaasHostPermissions.Tenants.ManageFeatures, L("Permission:ManageFeatures"), multiTenancySide: MultiTenancySides.Host);
            tenantsPermission.AddChild(SaasHostPermissions.Tenants.ManageConnectionStrings, L("Permission:ManageConnectionStrings"), multiTenancySide: MultiTenancySides.Host);
            tenantsPermission.AddChild(SaasHostPermissions.Tenants.ViewChangeHistory, L("Permission:ViewChangeHistory"), multiTenancySide: MultiTenancySides.Host);

            var editionsPermission = saasGroup.AddPermission(SaasHostPermissions.Editions.Default, L("Permission:EditionManagement"), multiTenancySide: MultiTenancySides.Host);
            editionsPermission.AddChild(SaasHostPermissions.Editions.Create, L("Permission:Create"), multiTenancySide: MultiTenancySides.Host);
            editionsPermission.AddChild(SaasHostPermissions.Editions.Update, L("Permission:Edit"), multiTenancySide: MultiTenancySides.Host);
            editionsPermission.AddChild(SaasHostPermissions.Editions.Delete, L("Permission:Delete"), multiTenancySide: MultiTenancySides.Host);
            editionsPermission.AddChild(SaasHostPermissions.Editions.ManageFeatures, L("Permission:ManageFeatures"), multiTenancySide: MultiTenancySides.Host);
            editionsPermission.AddChild(SaasHostPermissions.Editions.ViewChangeHistory, L("Permission:ViewChangeHistory"), multiTenancySide: MultiTenancySides.Host);
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<SaasResource>(name);
        }
    }
}