using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;
using FS.Abp.Application.Dtos;

namespace FS.CmsKitManagement.Contents.Dtos
{
    public partial class ContentDefinitionGetListDto : SearchResultRequestDto
    {
        public string EntityType { get; set; }
    }

}
