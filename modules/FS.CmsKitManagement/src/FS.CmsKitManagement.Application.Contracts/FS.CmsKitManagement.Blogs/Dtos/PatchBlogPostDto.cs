using System;
using System.Collections.Generic;
using System.Text;

namespace FS.CmsKitManagement.Blogs.Dtos
{
    public class PatchBlogPostDto
    {
        public BlogPostDto BlogPost { get; set; }

        public List<Guid> RouteIds { get; set; }
    }
}
