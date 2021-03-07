﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.1
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
    public partial class MetaData
    {
        public PostPrimaryKeyDto PostPrimaryKeyDto => new PostPrimaryKeyDto();
        public PostDto PostDto => new PostDto();
        public PostCreateDto PostCreateDto => new PostCreateDto();
        public PostUpdateDto PostUpdateDto => new PostUpdateDto();
        public PostGetListDto PostGetListDto => new PostGetListDto();
        public PostWithDetailsDto PostWithDetailsDto => new PostWithDetailsDto();
    }

    public partial class PostPrimaryKeyDto : EntityDto<Guid>
    {
    }

    public partial class PostDto : Volo.Abp.Application.Dtos.FullAuditedEntityDto<Guid>
    {
        public virtual System.Guid BlogId { get; set; }

        public virtual string Title { get; set; }

        public virtual string Subtitle { get; set; }

        public virtual string Url { get; set; }

        public virtual string Content { get; set; }

        public virtual bool Disable { get; set; }

        public virtual System.DateTime StartTime { get; set; }

        public virtual System.DateTime? EndTime { get; set; }

        public virtual FS.Cms.Posts.DisplayMode DisplayMode { get; set; }

        public virtual int Sequence { get; set; }

        public virtual List<string> AttachmentFileUrls { get; set; }

        public virtual List<FS.Cms.Posts.Dtos.PostImageDto> PostImages { get; set; }

    }

    public partial class PostCreateDto
    {
        public virtual System.Guid BlogId { get; set; }

        public virtual string Title { get; set; }

        public virtual string Subtitle { get; set; }

        public virtual string Url { get; set; }

        public virtual string Content { get; set; }

        public virtual bool Disable { get; set; }

        public virtual System.DateTime StartTime { get; set; }

        public virtual System.DateTime? EndTime { get; set; }

        public virtual FS.Cms.Posts.DisplayMode DisplayMode { get; set; }

        public virtual int Sequence { get; set; }

        public virtual List<string> AttachmentFileUrls { get; set; }

        public virtual List<FS.Cms.Posts.Dtos.PostImageDto> PostImages { get; set; }

    }

    public partial class PostUpdateDto
    {
        public virtual System.Guid BlogId { get; set; }

        public virtual string Title { get; set; }

        public virtual string Subtitle { get; set; }

        public virtual string Url { get; set; }

        public virtual string Content { get; set; }

        public virtual bool Disable { get; set; }

        public virtual System.DateTime StartTime { get; set; }

        public virtual System.DateTime? EndTime { get; set; }

        public virtual FS.Cms.Posts.DisplayMode DisplayMode { get; set; }

        public virtual int Sequence { get; set; }

        public virtual List<string> AttachmentFileUrls { get; set; }

        public virtual List<FS.Cms.Posts.Dtos.PostImageDto> PostImages { get; set; }

    }

    public partial class PostGetListDto : SearchResultRequestDto
    {
    }

    public partial class PostWithDetailsDto : PostDto
    {
        public List<PostTagMapDto> PostTags { get; set; }

    }
}