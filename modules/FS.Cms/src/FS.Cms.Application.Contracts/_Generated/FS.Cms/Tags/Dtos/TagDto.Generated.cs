﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.2
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;
using FS.Abp.Application.Dtos;

namespace FS.Cms.Tags.Dtos
{
    public partial class MetaData
    {
        public TagPrimaryKeyDto TagPrimaryKeyDto => new TagPrimaryKeyDto();
        public TagDto TagDto => new TagDto();
        public TagCreateDto TagCreateDto => new TagCreateDto();
        public TagUpdateDto TagUpdateDto => new TagUpdateDto();
        public TagGetListDto TagGetListDto => new TagGetListDto();
        public TagWithDetailsDto TagWithDetailsDto => new TagWithDetailsDto();
    }

    public partial class TagPrimaryKeyDto : EntityDto<Guid>
    {
    }

    public partial class TagDto : Volo.Abp.Application.Dtos.ExtensibleAuditedEntityDto<Guid>
    {
        public virtual string No { get; set; }

        public virtual string DisplayName { get; set; }

        public virtual string Description { get; set; }

        public virtual string Code { get; set; }

        public virtual int Level { get; set; }

        public virtual System.Guid? ParentId { get; set; }

        public virtual bool Disable { get; set; }

    }

    public partial class TagCreateDto : Volo.Abp.ObjectExtending.ExtensibleObject
    {
        public virtual string No { get; set; }

        public virtual string DisplayName { get; set; }

        public virtual string Description { get; set; }

        public virtual string Code { get; set; }

        public virtual int Level { get; set; }

        public virtual System.Guid? ParentId { get; set; }

        public virtual bool Disable { get; set; }

    }

    public partial class TagUpdateDto : Volo.Abp.ObjectExtending.ExtensibleObject
    {
        public virtual string No { get; set; }

        public virtual string DisplayName { get; set; }

        public virtual string Description { get; set; }

        public virtual string Code { get; set; }

        public virtual int Level { get; set; }

        public virtual System.Guid? ParentId { get; set; }

        public virtual bool Disable { get; set; }

    }

    public partial class TagGetListDto : SearchResultRequestDto
    {
    }

    public partial class TagWithDetailsDto : TagDto
    {
        public List<TagDto> Children { get; set; }

        public TagDto Parent { get; set; }

    }
}