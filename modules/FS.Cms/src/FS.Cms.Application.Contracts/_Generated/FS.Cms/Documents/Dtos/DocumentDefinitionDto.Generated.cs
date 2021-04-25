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

namespace FS.Cms.Documents.Dtos
{
    public partial class MetaData
    {
        public DocumentDefinitionPrimaryKeyDto DocumentDefinitionPrimaryKeyDto => new DocumentDefinitionPrimaryKeyDto();
        public DocumentDefinitionDto DocumentDefinitionDto => new DocumentDefinitionDto();
        public DocumentDefinitionCreateDto DocumentDefinitionCreateDto => new DocumentDefinitionCreateDto();
        public DocumentDefinitionUpdateDto DocumentDefinitionUpdateDto => new DocumentDefinitionUpdateDto();
        public DocumentDefinitionGetListDto DocumentDefinitionGetListDto => new DocumentDefinitionGetListDto();
        public DocumentDefinitionWithDetailsDto DocumentDefinitionWithDetailsDto => new DocumentDefinitionWithDetailsDto();
    }

    public partial class DocumentDefinitionPrimaryKeyDto : EntityDto<String>
    {
    }

    public partial class DocumentDefinitionDto : Volo.Abp.Application.Dtos.ExtensibleAuditedEntityDto<String>
    {
        public virtual string Title { get; set; }

        public virtual string Url { get; set; }

    }

    public partial class DocumentDefinitionCreateDto : Volo.Abp.ObjectExtending.ExtensibleObject
    {
        public virtual string Title { get; set; }

        public virtual string Url { get; set; }

    }

    public partial class DocumentDefinitionUpdateDto : Volo.Abp.ObjectExtending.ExtensibleObject
    {
        public virtual string Title { get; set; }

        public virtual string Url { get; set; }

    }

    public partial class DocumentDefinitionGetListDto : SearchResultRequestDto
    {
    }

    public partial class DocumentDefinitionWithDetailsDto : DocumentDefinitionDto
    {
        public List<DocumentDto> Documents { get; set; }

    }
}
