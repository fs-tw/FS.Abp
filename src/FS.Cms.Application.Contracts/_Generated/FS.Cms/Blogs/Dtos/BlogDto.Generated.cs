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
namespace FS.Cms.Blogs.Dtos
{
    public partial class BlogDto : Volo.Abp.Application.Dtos.FullAuditedEntityDto<Guid>
    {
        public string Name { get; set; }

        public string ShortName { get; set; }

        public string Description { get; set; }

    }
    public partial class BlogWithDetailsDto : BlogDto
    {
    }
    public partial class BlogCreateInput
    {
        public string Name { get; set; }

        public string ShortName { get; set; }

        public string Description { get; set; }

    }
    public partial class BlogUpdateInput
    {
        public string Name { get; set; }

        public string ShortName { get; set; }

        public string Description { get; set; }

    }
    public partial class BlogGetListInput : PagedAndSortedResultRequestDto
    {
    }
}
