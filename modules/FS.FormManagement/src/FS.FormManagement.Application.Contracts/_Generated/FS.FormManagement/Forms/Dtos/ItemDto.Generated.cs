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

namespace FS.FormManagement.Forms.Dtos
{
    public partial class MetaData
    {
        public ItemPrimaryKeyDto ItemPrimaryKeyDto => new ItemPrimaryKeyDto();
        public ItemDto ItemDto => new ItemDto();
        public ItemCreateDto ItemCreateDto => new ItemCreateDto();
        public ItemUpdateDto ItemUpdateDto => new ItemUpdateDto();
        public ItemGetListDto ItemGetListDto => new ItemGetListDto();
        public ItemWithDetailsDto ItemWithDetailsDto => new ItemWithDetailsDto();
    }

    public partial class ItemPrimaryKeyDto : EntityDto<Guid>
    {
    }

    public partial class ItemDto : Volo.Abp.Application.Dtos.AuditedEntityDto<Guid>
    {
        public virtual String No { get; set; }

        public virtual String Question { get; set; }

        public virtual Guid GroupId { get; set; }

        public virtual Int32 Sequence { get; set; }

    }

    public partial class ItemCreateDto
    {
        public virtual String No { get; set; }

        public virtual String Question { get; set; }

        public virtual Guid GroupId { get; set; }

        public virtual Int32 Sequence { get; set; }

    }

    public partial class ItemUpdateDto
    {
        public virtual String No { get; set; }

        public virtual String Question { get; set; }

        public virtual Guid GroupId { get; set; }

        public virtual Int32 Sequence { get; set; }

    }

    public partial class ItemGetListDto : SearchResultRequestDto
    {
    }

    public partial class ItemWithDetailsDto : ItemDto
    {
        public GroupDto Group { get; set; }

    }
}
