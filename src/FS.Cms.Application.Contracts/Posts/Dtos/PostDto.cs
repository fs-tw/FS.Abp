
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
   
}
