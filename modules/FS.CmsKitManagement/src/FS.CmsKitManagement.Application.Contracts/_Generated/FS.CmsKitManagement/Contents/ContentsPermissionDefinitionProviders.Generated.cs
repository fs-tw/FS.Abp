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

namespace FS.CmsKitManagement.Contents
{
    public class ContentsPermissionDefinitionProvider : Volo.Abp.Authorization.Permissions.PermissionDefinitionProvider
    {
        public override void Define(Volo.Abp.Authorization.Permissions.IPermissionDefinitionContext context)
        {
            var _ContentsGroup = context.AddGroup(ContentsPermissionNames.ModuleName,L(ContentsPermissionNames.ModuleName));

            var ContentDefinition = _ContentsGroup.AddPermission(ContentsPermissionNames.ContentDefinition.Default,L(ContentsPermissionNames.ContentDefinition.Default));
            ContentDefinition.AddChild(ContentsPermissionNames.ContentDefinition.Create , L("DisplayName:ContentDefinition.Create"));
            ContentDefinition.AddChild(ContentsPermissionNames.ContentDefinition.Update , L("DisplayName:ContentDefinition.Update"));
            ContentDefinition.AddChild(ContentsPermissionNames.ContentDefinition.Delete , L("DisplayName:ContentDefinition.Delete"));

            var ContentType = _ContentsGroup.AddPermission(ContentsPermissionNames.ContentType.Default,L(ContentsPermissionNames.ContentType.Default));
            ContentType.AddChild(ContentsPermissionNames.ContentType.Create , L("DisplayName:ContentType.Create"));
            ContentType.AddChild(ContentsPermissionNames.ContentType.Update , L("DisplayName:ContentType.Update"));
            ContentType.AddChild(ContentsPermissionNames.ContentType.Delete , L("DisplayName:ContentType.Delete"));

            var Content = _ContentsGroup.AddPermission(ContentsPermissionNames.Content.Default,L(ContentsPermissionNames.Content.Default));
            Content.AddChild(ContentsPermissionNames.Content.Create , L("DisplayName:Content.Create"));
            Content.AddChild(ContentsPermissionNames.Content.Update , L("DisplayName:Content.Update"));
            Content.AddChild(ContentsPermissionNames.Content.Delete , L("DisplayName:Content.Delete"));

            var EntityContentDefinition = _ContentsGroup.AddPermission(ContentsPermissionNames.EntityContentDefinition.Default,L(ContentsPermissionNames.EntityContentDefinition.Default));
            EntityContentDefinition.AddChild(ContentsPermissionNames.EntityContentDefinition.Create , L("DisplayName:EntityContentDefinition.Create"));
            EntityContentDefinition.AddChild(ContentsPermissionNames.EntityContentDefinition.Update , L("DisplayName:EntityContentDefinition.Update"));
            EntityContentDefinition.AddChild(ContentsPermissionNames.EntityContentDefinition.Delete , L("DisplayName:EntityContentDefinition.Delete"));

        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<CmsKitManagementResource>(name);
        }
    }
}
