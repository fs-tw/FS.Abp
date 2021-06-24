using System;
using System.Collections.Generic;
using System.Text;

namespace FS.CmsKitManagement.Blogs.Dtos
{
    public class PetchBlogPostDto
    {
        public BlogPostDto BlogPost { get; set; }

        public List<Guid> RouteIds { get; set; }
    }
}
