using System;
using System.Collections.Generic;
using System.Text;

namespace FS.CmsKitManagement.Blogs.Dtos
{
    public class BlogDto : Volo.Abp.Application.Dtos.ExtensibleEntityDto<Guid>
    {
        public string Name { get; set; }
        public virtual string Slug { get; protected set; }
    }
}
