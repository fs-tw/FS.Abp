using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Cms.Posts.Dtos
{
    public class GetPostByBlogIdInput : Volo.Abp.Application.Dtos.PagedAndSortedResultRequestDto
    {
        public Guid? BlogId { get; set; }

        public string Keyword { get; set; }
    }
}
