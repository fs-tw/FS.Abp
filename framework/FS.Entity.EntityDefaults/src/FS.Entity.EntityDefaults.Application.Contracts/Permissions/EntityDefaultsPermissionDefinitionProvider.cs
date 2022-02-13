using FS.Entity.EntityDefaults.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.Entity.EntityDefaults.Permissions
{
    public class EntityDefaultsPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(EntityDefaultsPermissions.GroupName, L("Permission:EntityDefaults"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<EntityDefaultsResource>(name);
        }
    }
}


