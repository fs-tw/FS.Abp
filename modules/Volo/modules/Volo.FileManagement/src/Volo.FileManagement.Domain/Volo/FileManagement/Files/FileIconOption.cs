using System.Collections.Generic;
using System.Linq;

namespace Volo.FileManagement.Files
{
    public class FileIconOption
    {
        public FileIconInfo DefaultIconInfo { get; protected set; }
        
        public Dictionary<string, FileIconInfo> FileIconInfos { get; protected set; } = new Dictionary<string, FileIconInfo>();
        
        public FileIconOption()
        {
            SetDefaultIcon();
            SetArchiveIcons();
            SetAudioIcons();
            SetExcelIcons();
            SetImageIcons();
            SetVideoIcons();
            SetPdfIcons();
            SetPowerPointIcons();
            SetWordIcons();
            SetCodeIcons();
        }

        public virtual FileIconInfo GetFileIconInfo(string fileName)
        {
            var fileNameParts = fileName.Split('.');

            if (fileNameParts.Length == 1)
            {
                return DefaultIconInfo;
            }

            var extension = fileNameParts.Last().ToLower();
            if (FileIconInfos.ContainsKey(extension))
            {
                return FileIconInfos[extension];
            }
            
            return DefaultIconInfo;
        }

        public virtual FileIconOption SetFileIcon(string extension, FileIconInfo iconInfo)
        {
            extension = extension.ToLower();
            if (FileIconInfos.ContainsKey(extension))
            {
                FileIconInfos[extension] = iconInfo;
            }
            else
            {
                FileIconInfos.Add(extension, iconInfo);
            }

            return this;
        }
        
        public virtual FileIconOption SetFileIcon(IEnumerable<string> extensions, FileIconInfo iconInfo)
        {
            foreach (var extension in extensions)
            {
                SetFileIcon(extension, iconInfo);
            }

            return this;
        }
        
        public virtual FileIconOption SetDefaultIcon(FileIconInfo iconInfo = null)
        {
            iconInfo ??= new FileIconInfo("far fa-file", FileIconType.FontAwesome);
            DefaultIconInfo = iconInfo;

            return this;
        }
        
        public virtual FileIconOption SetArchiveIcons(FileIconInfo iconInfo = null)
        {
            var extensions = new List<string>
            {
                "zip",
                "rar",
                "gz",
                "bz2",
                "7z"
            };

            iconInfo ??= new FileIconInfo("far fa-file-archive", FileIconType.FontAwesome);

            SetFileIcon(extensions, iconInfo);

            return this;
        }
        
        public virtual FileIconOption SetAudioIcons(FileIconInfo iconInfo = null)
        {
            var extensions = new List<string>
            {
                "pcm",
                "wav",
                "aiff",
                "mp3",
                "aac",
                "ogg",
                "wma",
                "flac",
                "alac",
            };

            iconInfo ??= new FileIconInfo("far fa-file-audio", FileIconType.FontAwesome); 
            
            SetFileIcon(extensions, iconInfo);
            
            return this;
        }
        
        public virtual FileIconOption SetExcelIcons(FileIconInfo iconInfo = null)
        {
            var extensions = new List<string>
            {
                "xlsx",
                "xlsm",
                "xlsb",
                "xltx",
                "xltm",
                "xls",
                "xlt",
                "xlw",
                "xlr",
            };

            iconInfo ??= new FileIconInfo("far fa-file-excel", FileIconType.FontAwesome); 
            
            SetFileIcon(extensions, iconInfo);
            
            return this;
        }
        
        public virtual FileIconOption SetImageIcons(FileIconInfo iconInfo = null)
        {
            var extensions = new List<string>
            {
                "tif",
                "tiff",
                "bmp",
                "jpg",
                "jpeg",
                "gif",
                "png",
                "eps",
                "webp",
            };

            iconInfo ??= new FileIconInfo("far fa-file-image", FileIconType.FontAwesome); 
            
            SetFileIcon(extensions, iconInfo);
            
            return this;
        }
        
        public virtual FileIconOption SetVideoIcons(FileIconInfo iconInfo = null)
        {
            var extensions = new List<string>
            {
                "avchd",
                "avi",
                "flv",
                "mkv",
                "mov",
                "mp4",
                "webm",
                "wmv"
            };

            iconInfo ??= new FileIconInfo("far fa-file-video", FileIconType.FontAwesome); 
            
            SetFileIcon(extensions, iconInfo);
            
            return this;
        }
        
        public virtual FileIconOption SetPdfIcons(FileIconInfo iconInfo = null)
        {
            var extensions = new List<string>
            {
                "pdf"
            };

            iconInfo ??= new FileIconInfo("far fa-file-pdf", FileIconType.FontAwesome); 
            
            SetFileIcon(extensions, iconInfo);
            
            return this;
        }
        
        public virtual FileIconOption SetPowerPointIcons(FileIconInfo iconInfo = null)
        {
            var extensions = new List<string>
            {
                "pptx",
                "pptm",
                "ppt",
                "xps",
                "potx",
                "potm",
                "pot",
                "ppsx",
                "ppsm",
                "pps"
            };

            iconInfo ??= new FileIconInfo("far fa-file-powerpoint", FileIconType.FontAwesome); 
            
            SetFileIcon(extensions, iconInfo);
            
            return this;
        }
        
        public virtual FileIconOption SetWordIcons(FileIconInfo iconInfo = null)
        {
            var extensions = new List<string>
            {
                "doc",
                "docm",
                "docx",
                "dot",
                "dotm",
                "dotx"
            };

            iconInfo ??= new FileIconInfo("far fa-file-word", FileIconType.FontAwesome); 
            
            SetFileIcon(extensions, iconInfo);
            
            return this;
        }
        
        public virtual FileIconOption SetCodeIcons(FileIconInfo iconInfo = null)
        {
            var extensions = new List<string>
            {
                "css",
                "js",
                "ts",
                "cshtml",
                "cs",
                "php",
                "html",
                "json",
                "xml",
                "rb",
                "py",
                "java",
                "c",
                "cpp",
                "h",
                "vb",
                "csproj"
            };

            iconInfo ??= new FileIconInfo("far fa-file-code", FileIconType.FontAwesome); 
            
            SetFileIcon(extensions, iconInfo);
            
            return this;
        }
    }
}