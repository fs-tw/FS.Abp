using System.IO;
using System.Text;

namespace Volo.FileManagement.Blazor.Pages.FileManagement
{
    public class FileManagementUploadFileModel
    {
        public const int MaxDisplayFileNameLength = 15;

        public string ContentType { get; set; }

        public string Name { get; set; }

        public MemoryStream Stream { get; set; }

        public string Url { get; set; } = "_content/Volo.FileManagement.Blazor/filemanagement/imgs/file.png";

        public bool IsImages()
        {
            return ContentType.StartsWith("image/");
        }

        public string DisplayFileName()
        {
            if (Name.Length <= MaxDisplayFileNameLength)
            {
                return Name;
            }

            var extension = Path.GetExtension(Name);

            var tempName = Name.Substring(0, MaxDisplayFileNameLength - extension.Length);
            return tempName.Replace(tempName.Substring(tempName.Length - 4, 3), "...") + extension;
        }
    }
}
