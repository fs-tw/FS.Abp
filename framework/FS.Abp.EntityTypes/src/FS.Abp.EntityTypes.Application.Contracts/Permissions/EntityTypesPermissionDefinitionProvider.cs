using FS.Abp.EntityTypes.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.Abp.EntityTypes.Permissions
{
    public class EntityTypesPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(EntityTypesPermissions.GroupName, L("Permission:EntityTypes"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<EntityTypesResource>(name);
        }
    }
}