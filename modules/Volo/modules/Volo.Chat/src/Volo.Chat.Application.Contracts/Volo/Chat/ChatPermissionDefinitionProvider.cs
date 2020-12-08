using Volo.Chat.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Volo.Chat.Authorization
{
    public class ChatPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var group = context.AddGroup(ChatPermissions.GroupName, L("Permission:Chat"));
            group.AddPermission(ChatPermissions.Messaging, L("Permission:Messaging"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<ChatResource>(name);
        }
    }
}