using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;
using FS.Abp.Application.Dtos;
using AutoFilterer.Types;

namespace FS.CmsKitManagement.EntityBlogs.Dtos
{
    public partial class EntityBlogGetListDto : SearchResultRequestDto
    {
        public string EntityType { get; set; }
        public string EntityId { get; set; }
    }

}
