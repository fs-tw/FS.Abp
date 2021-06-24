using FS.CmsKitManagement.Routes.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.CmsKit.Admin.MediaDescriptors;
using Volo.CmsKit.Public.Comments;

namespace FS.CmsKitManagement.Blogs.Dtos
{
    public class BlogPostDto : Volo.Abp.Application.Dtos.ExtensibleEntityDto<Guid>
    {
        public Guid BlogId { get; set; }

        public string BlogName { get; set; }

        public string BlogSlug { get; set; }

        public string Title { get; set; }

        public string Slug { get; set; }

        public string ShortDescription { get; set; }

        public string Content { get; set; }

        public Guid? CoverImageMediaId { get; set; }

        public DateTime CreationTime { get; set; }

        public DateTime? LastModificationTime { get; set; }

        public CmsUserDto Author { get; set; }

        public Guid AuthorId { get; set; }

        public List<RouteDto> Routes { get; set; }

        public List<MediaDescriptorDto> AttachmentMedias { get; set; }
    }
}
