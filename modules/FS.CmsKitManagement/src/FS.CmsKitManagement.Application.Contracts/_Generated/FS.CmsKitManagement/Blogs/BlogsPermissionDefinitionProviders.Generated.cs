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

namespace FS.CmsKitManagement.Blogs
{
    public class BlogsPermissionDefinitionProvider : Volo.Abp.Authorization.Permissions.PermissionDefinitionProvider
    {
        public override void Define(Volo.Abp.Authorization.Permissions.IPermissionDefinitionContext context)
        {
            var _BlogsGroup = context.AddGroup(BlogsPermissionNames.ModuleName,L(BlogsPermissionNames.ModuleName));

            var PostRoute = _BlogsGroup.AddPermission(BlogsPermissionNames.PostRoute.Default,L(BlogsPermissionNames.PostRoute.Default));
            PostRoute.AddChild(BlogsPermissionNames.PostRoute.Create , L("DisplayName:PostRoute.Create"));
            PostRoute.AddChild(BlogsPermissionNames.PostRoute.Update , L("DisplayName:PostRoute.Update"));
            PostRoute.AddChild(BlogsPermissionNames.PostRoute.Delete , L("DisplayName:PostRoute.Delete"));

        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<CmsKitManagementResource>(name);
        }
    }
}
