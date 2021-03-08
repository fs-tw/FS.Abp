using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.Core.Files
{
    public class FileChangedEvent
    {
        public string Name { get; set; }
        public string FileSizeStr { get; set; }
        public long FileSize { get; set; }        
        public Boolean IsDelete { get; set; }        
    }
}
