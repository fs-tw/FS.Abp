using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace FS.CmsKit.Pages
{
    public class PageTranslation
    {
        public string Title { get; set; }

        [DataType(DataType.Html)]
        public string Content { get; set; }

    }
}
