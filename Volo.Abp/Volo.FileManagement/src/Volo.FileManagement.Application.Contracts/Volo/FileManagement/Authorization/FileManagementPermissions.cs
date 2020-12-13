using Volo.Abp.Reflection;

namespace Volo.FileManagement.Authorization
{
    public static class FileManagementPermissions
    {
        public const string GroupName = "FileManagement";

        public static class DirectoryDescriptor
        {
            public const string Default = GroupName + ".DirectoryDescriptor";

            public const string Create = Default + ".Create";
            public const string Update = Default + ".Update";
            public const string Delete = Default + ".Delete";
        }
        
        public static class FileDescriptor
        {
            public const string Default = GroupName + ".FileDescriptor";
            
            public const string Create = Default + ".Create";
            public const string Update = Default + ".Update";
            public const string Delete = Default + ".Delete";
        }
        
        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(FileManagementPermissions));
        }
    }
}