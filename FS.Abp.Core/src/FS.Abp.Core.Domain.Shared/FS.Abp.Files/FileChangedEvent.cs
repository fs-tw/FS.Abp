using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.Core.Files
{
    public class FileChangedEvent
    {
        public string Name { get; set; }
        public Boolean IsDelete { get; set; }
    }
}
