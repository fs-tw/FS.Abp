﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.4.3
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;
using FS.Abp.Application.Dtos;

namespace FS.CmsKitManagement.MultiLinguals.Dtos
{

    public partial class MultiLingualTranslationPrimaryKeyDto : EntityDto<Guid>
    {
    }

    public partial class MultiLingualTranslationDto : Volo.Abp.Application.Dtos.ExtensibleAuditedEntityDto<Guid>
    {
        public virtual string Culture { get; set; }

        public virtual List<Volo.Abp.NameValue> Properties { get; set; }

        public virtual System.Guid MultiLingualId { get; set; }

    }

    public partial class MultiLingualTranslationCreateDto : Volo.Abp.ObjectExtending.ExtensibleObject
    {
        public virtual string Culture { get; set; }

        public virtual List<Volo.Abp.NameValue> Properties { get; set; }

        public virtual System.Guid MultiLingualId { get; set; }

    }

    public partial class MultiLingualTranslationUpdateDto : Volo.Abp.ObjectExtending.ExtensibleObject
    {
        public virtual string Culture { get; set; }

        public virtual List<Volo.Abp.NameValue> Properties { get; set; }

        public virtual System.Guid MultiLingualId { get; set; }

    }

    public partial class MultiLingualTranslationGetListDto : SearchResultRequestDto
    {
    }

    public partial class MultiLingualTranslationWithDetailsDto : MultiLingualTranslationDto
    {
        public MultiLingualDto MultiLingual { get; set; }

    }
}
