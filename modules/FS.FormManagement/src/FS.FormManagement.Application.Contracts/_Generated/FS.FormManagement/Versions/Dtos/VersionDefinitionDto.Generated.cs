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

namespace FS.FormManagement.Versions.Dtos
{
    public partial class MetaData
    {
        public VersionDefinitionPrimaryKeyDto VersionDefinitionPrimaryKeyDto => new VersionDefinitionPrimaryKeyDto();
        public VersionDefinitionDto VersionDefinitionDto => new VersionDefinitionDto();
        public VersionDefinitionCreateDto VersionDefinitionCreateDto => new VersionDefinitionCreateDto();
        public VersionDefinitionUpdateDto VersionDefinitionUpdateDto => new VersionDefinitionUpdateDto();
        public VersionDefinitionGetListDto VersionDefinitionGetListDto => new VersionDefinitionGetListDto();
        public VersionDefinitionWithDetailsDto VersionDefinitionWithDetailsDto => new VersionDefinitionWithDetailsDto();
    }

    public partial class VersionDefinitionPrimaryKeyDto : EntityDto<Guid>
    {
    }

    public partial class VersionDefinitionDto : Volo.Abp.Application.Dtos.AuditedEntityDto<Guid>
    {
        public virtual String EntityType { get; set; }

        public virtual String EntityKey { get; set; }

        public virtual string DisplayName { get; set; }

        public virtual System.Guid? CurrentVersionId { get; set; }

    }

    public partial class VersionDefinitionCreateDto
    {
        public virtual String EntityType { get; set; }

        public virtual String EntityKey { get; set; }

        public virtual string DisplayName { get; set; }

        public virtual System.Guid? CurrentVersionId { get; set; }

    }

    public partial class VersionDefinitionUpdateDto
    {
        public virtual String EntityType { get; set; }

        public virtual String EntityKey { get; set; }

        public virtual string DisplayName { get; set; }

        public virtual System.Guid? CurrentVersionId { get; set; }

    }

    public partial class VersionDefinitionGetListDto : SearchResultRequestDto
    {
    }

    public partial class VersionDefinitionWithDetailsDto : VersionDefinitionDto
    {
        public VersionDto CurrentVersion { get; set; }

        public List<VersionDto> Versions { get; set; }

    }
}
