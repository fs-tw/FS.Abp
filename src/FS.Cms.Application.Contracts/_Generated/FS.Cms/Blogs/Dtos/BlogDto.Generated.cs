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

namespace FS.Cms.Blogs.Dtos
{
    public partial class MetaData
    {
        public BlogPrimaryKeyDto BlogPrimaryKeyDto => new BlogPrimaryKeyDto();
        public BlogDto BlogDto => new BlogDto();
        public BlogCreateDto BlogCreateDto => new BlogCreateDto();
        public BlogUpdateDto BlogUpdateDto => new BlogUpdateDto();
        public BlogGetListDto BlogGetListDto => new BlogGetListDto();
        public BlogWithDetailsDto BlogWithDetailsDto => new BlogWithDetailsDto();
    }

    public partial class BlogPrimaryKeyDto : EntityDto<Guid>
    {
    }

    public partial class BlogDto : Volo.Abp.Application.Dtos.AuditedEntityDto<Guid>
    {
        public virtual string No { get; set; }

        public virtual string DisplayName { get; set; }

        public virtual string Description { get; set; }

        public virtual string Code { get; set; }

        public virtual int Level { get; set; }

        public virtual System.Guid? ParentId { get; set; }

        public virtual bool Enable { get; set; }

        public virtual FS.Cms.Blogs.Dtos.BlogConfigDto BlogConfig { get; set; }

    }

    public partial class BlogCreateDto
    {
        public virtual string No { get; set; }

        public virtual string DisplayName { get; set; }

        public virtual string Description { get; set; }

        public virtual string Code { get; set; }

        public virtual int Level { get; set; }

        public virtual System.Guid? ParentId { get; set; }

        public virtual bool Enable { get; set; }

        public virtual FS.Cms.Blogs.Dtos.BlogConfigDto BlogConfig { get; set; }

    }

    public partial class BlogUpdateDto
    {
        public virtual string No { get; set; }

        public virtual string DisplayName { get; set; }

        public virtual string Description { get; set; }

        public virtual string Code { get; set; }

        public virtual int Level { get; set; }

        public virtual System.Guid? ParentId { get; set; }

        public virtual bool Enable { get; set; }

        public virtual FS.Cms.Blogs.Dtos.BlogConfigDto BlogConfig { get; set; }

    }

    public partial class BlogGetListDto : SearchResultRequestDto
    {
    }

    public partial class BlogWithDetailsDto : BlogDto
    {
        public List<BlogDto> Children { get; set; }

        public BlogDto Parent { get; set; }

    }
}
