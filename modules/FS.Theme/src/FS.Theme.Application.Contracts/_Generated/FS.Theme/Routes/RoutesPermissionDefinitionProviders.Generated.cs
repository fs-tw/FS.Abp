﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.1
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Volo.Abp.Localization;
using FS.Theme.Localization;

namespace FS.Theme.Routes
{
    public class RoutesPermissionDefinitionProvider : Volo.Abp.Authorization.Permissions.PermissionDefinitionProvider
    {
        public override void Define(Volo.Abp.Authorization.Permissions.IPermissionDefinitionContext context)
        {
            var RoutesGroup = context.AddGroup(RoutesPermissionNames.GroupName,L(RoutesPermissionNames.GroupName));

            var 基本設定 = RoutesGroup.AddPermission(RoutesPermissionNames.基本設定.Default,L(RoutesPermissionNames.基本設定.Default));
            基本設定.AddChild(RoutesPermissionNames.基本設定.Banners , L("DisplayName:基本設定Permissions.Banners"));
            基本設定.AddChild(RoutesPermissionNames.基本設定.Routes , L("DisplayName:基本設定Permissions.Routes"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<ThemeResource>(name);
        }
    }
}