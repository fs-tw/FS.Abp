using Volo.Abp.Reflection;

namespace FS.Abp.Emailing
{
    public static class EmailingPermissions
    {
        public const string GroupName = "AbpEmailing";

        public const string SettingManagement = GroupName + ".SettingManagement";

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(EmailingPermissions));
        }
    }
}
