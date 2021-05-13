using Npoi.Mapper.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace FS.CmsKitManagement.Data
{
    public class BlogPostInfo
    {
        [Column("Title")]
        public string PostTitle { get; set; }

        [Column("Content")]
        public string PostContent { get; set; }

        [Column("BlogName")]
        public string PostBlog { get; set; }
    }
}
