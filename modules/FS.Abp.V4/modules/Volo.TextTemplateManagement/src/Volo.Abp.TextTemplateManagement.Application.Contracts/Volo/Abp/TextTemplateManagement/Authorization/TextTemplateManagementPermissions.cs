using Volo.Abp.Reflection;

namespace Volo.Abp.TextTemplateManagement.Authorization
{
    public class TextTemplateManagementPermissions
    {
        public const string GroupName = "TextTemplateManagement";
        
        public static class TextTemplates
        {
            public const string Default = GroupName + ".TextTemplates";
            public const string EditContents = Default + ".EditContents";
        }

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(TextTemplateManagementPermissions));
        }
    }
}