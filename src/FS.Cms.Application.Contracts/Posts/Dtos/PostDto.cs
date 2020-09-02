
using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;
using FS.Abp.Application.Dtos;
using System.Linq;

namespace FS.Cms.Posts.Dtos
{
  
    public partial class PostWithDetailsDto : PostDto
    {
        public FS.Cms.Core.Dtos.CmsImageFieldDto CoverImage => Images.Where(x => x.IsCover == true).FirstOrDefault();        
    }


    public class PostWithDetailsNoContentDto
    {
        public System.Guid BlogCodeId { get; set; }

        public string Title { get; set; }

        public string Subtitle { get; set; }

        public string Url { get; set; }      

        public bool Published { get; set; }

        public System.DateTime? Published_By { get; set; }

        public System.DateTime Published_At { get; set; }

        public DisplayMode DisplayMode { get; set; }

        public List<FS.Cms.Core.Dtos.CmsImageFieldDto> Images { get; set; }

        public System.Guid Id { get; set; }
        public FS.Cms.Core.Dtos.CmsImageFieldDto CoverImage => Images.Where(x => x.IsCover == true).FirstOrDefault();
    }


}
