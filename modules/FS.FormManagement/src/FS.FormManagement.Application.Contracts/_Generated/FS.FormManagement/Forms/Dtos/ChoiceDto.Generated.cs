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
        public ChoicePrimaryKeyDto ChoicePrimaryKeyDto => new ChoicePrimaryKeyDto();
        public ChoiceDto ChoiceDto => new ChoiceDto();
        public ChoiceCreateDto ChoiceCreateDto => new ChoiceCreateDto();
        public ChoiceUpdateDto ChoiceUpdateDto => new ChoiceUpdateDto();
        public ChoiceGetListDto ChoiceGetListDto => new ChoiceGetListDto();
        public ChoiceWithDetailsDto ChoiceWithDetailsDto => new ChoiceWithDetailsDto();
    }

    public partial class ChoicePrimaryKeyDto : EntityDto<Guid>
    {
    }

    public partial class ChoiceDto : Volo.Abp.Application.Dtos.ExtensibleAuditedEntityDto<Guid>
    {
        public virtual string No { get; set; }

        public virtual int Sequence { get; set; }

        public virtual System.Guid QuestionId { get; set; }

        public virtual bool IsCorrect { get; set; }

    }

    public partial class ChoiceCreateDto : Volo.Abp.ObjectExtending.ExtensibleObject
    {
        public virtual string No { get; set; }

        public virtual int Sequence { get; set; }

        public virtual System.Guid QuestionId { get; set; }

        public virtual bool IsCorrect { get; set; }

    }

    public partial class ChoiceUpdateDto : Volo.Abp.ObjectExtending.ExtensibleObject
    {
        public virtual string No { get; set; }

        public virtual int Sequence { get; set; }

        public virtual System.Guid QuestionId { get; set; }

        public virtual bool IsCorrect { get; set; }

    }

    public partial class ChoiceGetListDto : SearchResultRequestDto
    {
    }

    public partial class ChoiceWithDetailsDto : ChoiceDto
    {
    }
}
