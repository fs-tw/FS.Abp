using Volo.Abp.Reflection;

namespace Volo.Abp.LanguageManagement
{
    public class LanguageManagementPermissions
    {
        public const string GroupName = "LanguageManagement";

        public class LanguageTexts
        {
            public const string Default = GroupName + ".LanguageTexts";
            public const string Edit = Default + ".Edit";
        }

        public class Languages
        {
            public const string Default = GroupName + ".Languages";
            public const string Edit = Default + ".Edit";
            public const string Create = Default + ".Create";
            public const string ChangeDefault = Default + ".ChangeDefault";
            public const string Delete = Default + ".Delete";
        }

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(LanguageManagementPermissions));
        }
    }
}