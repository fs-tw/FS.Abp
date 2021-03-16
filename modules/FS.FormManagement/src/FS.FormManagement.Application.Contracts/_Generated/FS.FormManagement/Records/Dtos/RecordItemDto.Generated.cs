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

namespace FS.FormManagement.Records.Dtos
{
    public partial class MetaData
    {
        public RecordItemPrimaryKeyDto RecordItemPrimaryKeyDto => new RecordItemPrimaryKeyDto();
        public RecordItemDto RecordItemDto => new RecordItemDto();
        public RecordItemCreateDto RecordItemCreateDto => new RecordItemCreateDto();
        public RecordItemUpdateDto RecordItemUpdateDto => new RecordItemUpdateDto();
        public RecordItemGetListDto RecordItemGetListDto => new RecordItemGetListDto();
        public RecordItemWithDetailsDto RecordItemWithDetailsDto => new RecordItemWithDetailsDto();
    }

    public partial class RecordItemPrimaryKeyDto : EntityDto<Guid>
    {
    }

    public partial class RecordItemDto : Volo.Abp.Application.Dtos.AuditedEntityDto<Guid>
    {
        public virtual string Asnwer { get; set; }

        public virtual System.Guid RecordId { get; set; }

        public virtual string ItemId { get; set; }

    }

    public partial class RecordItemCreateDto
    {
        public virtual string Asnwer { get; set; }

        public virtual System.Guid RecordId { get; set; }

        public virtual string ItemId { get; set; }

    }

    public partial class RecordItemUpdateDto
    {
        public virtual string Asnwer { get; set; }

        public virtual System.Guid RecordId { get; set; }

        public virtual string ItemId { get; set; }

    }

    public partial class RecordItemGetListDto : SearchResultRequestDto
    {
    }

    public partial class RecordItemWithDetailsDto : RecordItemDto
    {
        public RecordDto Record { get; set; }

    }
}
