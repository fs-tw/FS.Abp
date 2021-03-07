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

namespace FS.Theme.Banners
{
    public class BannersPermissionDefinitionProvider : Volo.Abp.Authorization.Permissions.PermissionDefinitionProvider
    {
        public override void Define(Volo.Abp.Authorization.Permissions.IPermissionDefinitionContext context)
        {
            var BannersGroup = context.AddGroup(BannersPermissionNames.GroupName,L(BannersPermissionNames.GroupName));

            var Banner = BannersGroup.AddPermission(BannersPermissionNames.Banner.Default,L(BannersPermissionNames.Banner.Default));
            Banner.AddChild(BannersPermissionNames.Banner.Create , L("DisplayName:BannerPermissions.Create"));
            Banner.AddChild(BannersPermissionNames.Banner.Delete , L("DisplayName:BannerPermissions.Delete"));
            Banner.AddChild(BannersPermissionNames.Banner.Update , L("DisplayName:BannerPermissions.Update"));

            var BannerDefinition = BannersGroup.AddPermission(BannersPermissionNames.BannerDefinition.Default,L(BannersPermissionNames.BannerDefinition.Default));
            BannerDefinition.AddChild(BannersPermissionNames.BannerDefinition.Create , L("DisplayName:BannerDefinitionPermissions.Create"));
            BannerDefinition.AddChild(BannersPermissionNames.BannerDefinition.Delete , L("DisplayName:BannerDefinitionPermissions.Delete"));
            BannerDefinition.AddChild(BannersPermissionNames.BannerDefinition.Update , L("DisplayName:BannerDefinitionPermissions.Update"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<ThemeResource>(name);
        }
    }
}