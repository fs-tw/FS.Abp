using System;
using System.Collections.Generic;
using Npoi.Mapper.Attributes;
using System.Text;

namespace FS.CmsKitManagement.Data
{
    public class BlogInfo
    {
        [Column("Name")]
        public string BlogName { get; set; }

        [Column("Slug")]
        public string BlogSlug { get; set; }

    }
}
