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
using FS.Abp.Application.Dtos;

namespace FS.Cms.Posts.Dtos
{
    public partial class PostAttachmentFilesDto : Volo.Abp.Application.Dtos.FullAuditedEntityDto<Guid>
    {
        public string Content { get; set; }

        public System.Guid PostId { get; set; }

        public class PrimaryKey
        {
            public System.Guid Id { get; set; }
    
        }

    }
    public partial class PostAttachmentFilesWithDetailsDto : PostAttachmentFilesDto
    {
    }
    public partial class PostAttachmentFilesCreateInput
    {
        public string Content { get; set; }

        public System.Guid PostId { get; set; }

    }
    public partial class PostAttachmentFilesUpdateInput
    {
        public string Content { get; set; }

        public System.Guid PostId { get; set; }

    }
    public partial class PostAttachmentFilesGetListInput : SearchResultRequestDto
    {
    }
}
