using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.Npoi.Mapper.Attributes
{
    [AttributeUsage(AttributeTargets.Class ,AllowMultiple =false)]
    public class MapToVirtualFileAttribute : Attribute
    {
        public string FilePath { get; set; }
        public string SheetName { get; set; }
    }
}
