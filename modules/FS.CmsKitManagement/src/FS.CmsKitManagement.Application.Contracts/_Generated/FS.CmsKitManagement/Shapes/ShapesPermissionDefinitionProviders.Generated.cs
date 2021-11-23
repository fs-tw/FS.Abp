﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.4.3
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Volo.Abp.Localization;
using FS.CmsKitManagement.Localization;

namespace FS.CmsKitManagement.Shapes
{
    public class ShapesPermissionDefinitionProvider : Volo.Abp.Authorization.Permissions.PermissionDefinitionProvider
    {
        public override void Define(Volo.Abp.Authorization.Permissions.IPermissionDefinitionContext context)
        {
            var _ShapesGroup = context.AddGroup(ShapesPermissionNames.ModuleName,L(ShapesPermissionNames.ModuleName));

            var Shape = _ShapesGroup.AddPermission(ShapesPermissionNames.Shape.Default,L(ShapesPermissionNames.Shape.Default));
            Shape.AddChild(ShapesPermissionNames.Shape.Create , L("DisplayName:Shape.Create"));
            Shape.AddChild(ShapesPermissionNames.Shape.Update , L("DisplayName:Shape.Update"));
            Shape.AddChild(ShapesPermissionNames.Shape.Delete , L("DisplayName:Shape.Delete"));

        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<CmsKitManagementResource>(name);
        }
    }
}