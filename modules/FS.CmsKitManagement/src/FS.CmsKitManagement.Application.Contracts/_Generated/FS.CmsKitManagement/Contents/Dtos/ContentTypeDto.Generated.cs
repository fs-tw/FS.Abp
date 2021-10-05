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

namespace FS.CmsKitManagement.Contents.Dtos
{

    public partial class ContentTypePrimaryKeyDto : EntityDto<Guid>
    {
    }

    public partial class ContentTypeDto : Volo.Abp.Application.Dtos.ExtensibleAuditedEntityDto<Guid>
    {
        public virtual System.Guid ContentDefinitionId { get; set; }

        public virtual int Sequence { get; set; }

        public virtual string DisplayName { get; set; }

        public virtual string Type { get; set; }

    }

    public partial class ContentTypeCreateDto : Volo.Abp.ObjectExtending.ExtensibleObject
    {
        public virtual System.Guid ContentDefinitionId { get; set; }

        public virtual int Sequence { get; set; }

        public virtual string DisplayName { get; set; }

        public virtual string Type { get; set; }

    }

    public partial class ContentTypeUpdateDto : Volo.Abp.ObjectExtending.ExtensibleObject
    {
        public virtual System.Guid ContentDefinitionId { get; set; }

        public virtual int Sequence { get; set; }

        public virtual string DisplayName { get; set; }

        public virtual string Type { get; set; }

    }

    public partial class ContentTypeGetListDto : SearchResultRequestDto
    {
    }

    public partial class ContentTypeWithDetailsDto : ContentTypeDto
    {
        public ContentDefinitionDto ContentDefinition { get; set; }

    }
}
