using Volo.Abp.Reflection;

namespace Volo.Abp.Account
{
    public static class AccountPermissions
    {
        public const string GroupName = "AbpAccount";

        public const string SettingManagement = GroupName + ".SettingManagement";

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(AccountPermissions));
        }
    }
}
