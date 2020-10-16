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
    public partial class PostDto : Volo.Abp.Application.Dtos.FullAuditedEntityDto<Guid>
    {
        public System.Guid BlogCodeId { get; set; }

        public string Title { get; set; }

        public string Subtitle { get; set; }

        public string Url { get; set; }

        public string Content { get; set; }

        public bool Published { get; set; }

        public System.DateTime? Published_By { get; set; }

        public System.DateTime Published_At { get; set; }

        public FS.Cms.Posts.DisplayMode DisplayMode { get; set; }

        public int Sequence { get; set; }

        public List<string> AttachmentFileUrls { get; set; }

        public List<FS.Cms.Posts.Dtos.PostImageDto> PostImages { get; set; }

    }
    public partial class PostWithDetailsDto : PostDto
    {
    }
    public partial class PostCreateDto
    {
        public System.Guid BlogCodeId { get; set; }

        public string Title { get; set; }

        public string Subtitle { get; set; }

        public string Url { get; set; }

        public string Content { get; set; }

        public bool Published { get; set; }

        public System.DateTime? Published_By { get; set; }

        public System.DateTime Published_At { get; set; }

        public FS.Cms.Posts.DisplayMode DisplayMode { get; set; }

        public int Sequence { get; set; }

        public List<string> AttachmentFileUrls { get; set; }

        public List<FS.Cms.Posts.Dtos.PostImageDto> PostImages { get; set; }

    }
    public partial class PostUpdateDto
    {
        public System.Guid BlogCodeId { get; set; }

        public string Title { get; set; }

        public string Subtitle { get; set; }

        public string Url { get; set; }

        public string Content { get; set; }

        public bool Published { get; set; }

        public System.DateTime? Published_By { get; set; }

        public System.DateTime Published_At { get; set; }

        public FS.Cms.Posts.DisplayMode DisplayMode { get; set; }

        public int Sequence { get; set; }

        public List<string> AttachmentFileUrls { get; set; }

        public List<FS.Cms.Posts.Dtos.PostImageDto> PostImages { get; set; }

    }
    public partial class PostGetListDto : SearchResultRequestDto
    {
    }
}
