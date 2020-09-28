using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Cms.Definitions
{
    public class BlogDto
    {
        public Guid CodesId { get; set; }
        public string DisplayName { get; set; }
        public int Sequence { get; set; }
        public string Url { get; set; }
        public string ListStyle { get; set; }
    }
    public class BlogCreateInput
    {
        public string DisplayName { get; set; }
        public int Sequence { get; set; }
        public string Url { get; set; }
        public string ListStyle { get; set; }
    }
    public class BlogUpdateInput
    {
        public string DisplayName { get; set; }
        public int Sequence { get; set; }
        public string Url { get; set; }
        public string ListStyle { get; set; }
    }
}
