﻿using FS.Abp.EntityFeatures.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.Abp.EntityFeatures.Permissions
{
    public class EntityFeaturesPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(EntityFeaturesPermissions.GroupName, L("Permission:EntityFeatures"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<EntityFeaturesResource>(name);
        }
    }
}