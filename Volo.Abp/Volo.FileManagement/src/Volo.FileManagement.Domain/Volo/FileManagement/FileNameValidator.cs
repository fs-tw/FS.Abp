using System.IO;
using System.Linq;
using JetBrains.Annotations;
using Volo.Abp;
using Volo.FileManagement.Directories;
using Volo.FileManagement.Files;

namespace Volo.FileManagement
{
    public static class FileNameValidator
    {
        public static bool IsValidName([NotNull] string name)
        {
            Check.NotNullOrWhiteSpace(name, nameof(name));
            
            // con is not valid folder/file name for Windows
            return !(Path.GetInvalidFileNameChars().Any(name.Contains) || name == "con");
        }

        public static string CheckFileName([NotNull] string name)
        {
            Check.NotNullOrWhiteSpace(name, nameof(name), FileDescriptorConsts.MaxNameLength);
            if (!IsValidName(name))
            {
                throw new InvalidFileNameException(name);
            }

            return name;
        }
        
        public static string CheckDirectoryName([NotNull] string name)
        {
            Check.NotNullOrWhiteSpace(name, nameof(name), DirectoryDescriptorConsts.MaxNameLength);
            
            if (!IsValidName(name))
            {
                throw new InvalidDirectoryNameException(name);
            }

            return name;
        }
    }
}