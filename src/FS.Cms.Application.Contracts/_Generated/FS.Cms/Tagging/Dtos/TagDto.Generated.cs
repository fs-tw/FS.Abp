﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 1.102.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;
namespace FS.Cms.Tagging.Dtos
{
    public partial class TagDto : Volo.Abp.Application.Dtos.FullAuditedEntityDto<Guid>
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public string UsageCount { get; set; }

    }
    public partial class TagWithDetailsDto : TagDto
    {
    }
    public partial class TagCreateInput
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public string UsageCount { get; set; }

    }
    public partial class TagUpdateInput
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public string UsageCount { get; set; }

    }
    public partial class TagGetListInput : PagedAndSortedResultRequestDto
    {
    }
}
