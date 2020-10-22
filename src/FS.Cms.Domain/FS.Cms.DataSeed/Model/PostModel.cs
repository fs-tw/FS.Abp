using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Cms.DataSeed.Model
{
    public class PostModel
    {
        public string BlogCode { get; set; }
        public string Title { get; set; }
        public List<string> Images { get; set; }
        public bool IsExpiryDate { get; set; } //false為只有後台看的到 

    }
}
