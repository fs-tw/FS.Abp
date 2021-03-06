﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.3.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;
using FS.Abp.Application.Dtos;

namespace FS.CmsKitManagement.Vocabularies.Dtos
{
    public partial class MetaData
    {
        public VocabularyPrimaryKeyDto VocabularyPrimaryKeyDto => new VocabularyPrimaryKeyDto();
        public VocabularyDto VocabularyDto => new VocabularyDto();
        public VocabularyCreateDto VocabularyCreateDto => new VocabularyCreateDto();
        public VocabularyUpdateDto VocabularyUpdateDto => new VocabularyUpdateDto();
        public VocabularyGetListDto VocabularyGetListDto => new VocabularyGetListDto();
        public VocabularyWithDetailsDto VocabularyWithDetailsDto => new VocabularyWithDetailsDto();
    }

    public partial class VocabularyPrimaryKeyDto : EntityDto<Guid>
    {
    }

    public partial class VocabularyDto : Volo.Abp.Application.Dtos.ExtensibleAuditedEntityDto<Guid>
    {
        public virtual System.Guid VocabularyDefinitionId { get; set; }

        public virtual string Code { get; set; }

        public virtual System.Guid? ParentId { get; set; }

        public virtual int Level { get; set; }

        public virtual string DisplayName { get; set; }

        public virtual string No { get; set; }

    }

    public partial class VocabularyCreateDto : Volo.Abp.ObjectExtending.ExtensibleObject
    {
        public virtual System.Guid VocabularyDefinitionId { get; set; }

        public virtual string Code { get; set; }

        public virtual System.Guid? ParentId { get; set; }

        public virtual int Level { get; set; }

        public virtual string DisplayName { get; set; }

        public virtual string No { get; set; }

    }

    public partial class VocabularyUpdateDto : Volo.Abp.ObjectExtending.ExtensibleObject
    {
        public virtual System.Guid VocabularyDefinitionId { get; set; }

        public virtual string Code { get; set; }

        public virtual System.Guid? ParentId { get; set; }

        public virtual int Level { get; set; }

        public virtual string DisplayName { get; set; }

        public virtual string No { get; set; }

    }

    public partial class VocabularyGetListDto : SearchResultRequestDto
    {
    }

    public partial class VocabularyWithDetailsDto : VocabularyDto
    {
        public VocabularyDefinitionDto VocabularyDefinition { get; set; }

        public List<VocabularyDto> Children { get; set; }

        public VocabularyDto Parent { get; set; }

    }
}
