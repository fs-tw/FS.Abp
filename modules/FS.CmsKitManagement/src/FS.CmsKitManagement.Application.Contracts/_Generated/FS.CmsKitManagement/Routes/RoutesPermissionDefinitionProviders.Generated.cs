﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.3.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Volo.Abp.Localization;
using FS.CmsKitManagement.Localization;

namespace FS.CmsKitManagement.Routes
{
    public class RoutesPermissionDefinitionProvider : Volo.Abp.Authorization.Permissions.PermissionDefinitionProvider
    {
        public override void Define(Volo.Abp.Authorization.Permissions.IPermissionDefinitionContext context)
        {
            var _RoutesGroup = context.AddGroup(RoutesPermissionNames.ModuleName,L(RoutesPermissionNames.ModuleName));

            var Route = _RoutesGroup.AddPermission(RoutesPermissionNames.Route.Default,L(RoutesPermissionNames.Route.Default));
            Route.AddChild(RoutesPermissionNames.Route.Create , L("DisplayName:Route.Create"));
            Route.AddChild(RoutesPermissionNames.Route.Update , L("DisplayName:Route.Update"));
            Route.AddChild(RoutesPermissionNames.Route.Delete , L("DisplayName:Route.Delete"));

            var RouteDefinition = _RoutesGroup.AddPermission(RoutesPermissionNames.RouteDefinition.Default,L(RoutesPermissionNames.RouteDefinition.Default));
            RouteDefinition.AddChild(RoutesPermissionNames.RouteDefinition.Create , L("DisplayName:RouteDefinition.Create"));
            RouteDefinition.AddChild(RoutesPermissionNames.RouteDefinition.Update , L("DisplayName:RouteDefinition.Update"));
            RouteDefinition.AddChild(RoutesPermissionNames.RouteDefinition.Delete , L("DisplayName:RouteDefinition.Delete"));

        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<CmsKitManagementResource>(name);
        }
    }
}
