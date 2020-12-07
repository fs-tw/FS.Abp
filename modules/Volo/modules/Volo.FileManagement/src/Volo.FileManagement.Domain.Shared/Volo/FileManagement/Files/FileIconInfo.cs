using JetBrains.Annotations;
using Volo.Abp;

namespace Volo.FileManagement.Files
{
    public enum FileIconType
    {
        FontAwesome,
        Url
    }
    
    public class FileIconInfo
    {
        public string Icon { get; set; }

        public FileIconType Type { get; set; }

        public FileIconInfo([NotNull]string icon, FileIconType type)
        {
            Icon = Check.NotNullOrWhiteSpace(icon, nameof(icon));
            Type = type;
        }
    }
}