﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 2.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;
using FS.Abp.Application.Dtos;

namespace FS.Cms.Posts.Dtos
{
    public partial class PostTagMapPrimaryKeyDto : EntityDto<Guid>
    {
    }
    public partial class PostTagMapDto : Volo.Abp.Application.Dtos.FullAuditedEntityDto<Guid>
    {
        public System.Guid PostId { get; set; }

        public System.Guid TagCodeId { get; set; }

    }
    public partial class PostTagMapWithDetailsDto : PostTagMapDto
    {
        public PostDto Post { get; set; }

    }
    public partial class PostTagMapCreateDto
    {
        public System.Guid PostId { get; set; }

        public System.Guid TagCodeId { get; set; }

    }
    public partial class PostTagMapUpdateDto
    {
        public System.Guid PostId { get; set; }

        public System.Guid TagCodeId { get; set; }

    }
    public partial class PostTagMapGetListDto : SearchResultRequestDto
    {
    }
}
