using Volo.Abp.Reflection;

namespace Volo.Chat.Authorization
{
    public class ChatPermissions
    {
        public const string GroupName = "Chat";

        public const string Messaging = GroupName + ".Messaging";

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(ChatPermissions));
        }
    }
}