﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 2.0.1
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
    public partial class DocumentPrimaryKeyDto : EntityDto<Guid>
    {
    }
    public partial class DocumentDto : Volo.Abp.Application.Dtos.FullAuditedEntityDto<Guid>
    {
        public string Content { get; set; }

        public List<FS.Cms.Core.Dtos.CmsFileFieldDto> Files { get; set; }

        public string DocumentDefinitionId { get; set; }

        public string Code { get; set; }

        public System.Guid? ParentId { get; set; }

        public string DisplayName { get; set; }

        public int Level { get; set; }

    }
    public partial class DocumentWithDetailsDto : DocumentDto
    {
        public DocumentDefinitionDto DocumentDefinition { get; set; }

        public List<DocumentDto> Children { get; set; }

        public DocumentDto Parent { get; set; }

    }
    public partial class DocumentCreateDto
    {
        public string Content { get; set; }

        public List<FS.Cms.Core.Dtos.CmsFileFieldDto> Files { get; set; }

        public string DocumentDefinitionId { get; set; }

        public string Code { get; set; }

        public System.Guid? ParentId { get; set; }

        public string DisplayName { get; set; }

        public int Level { get; set; }

    }
    public partial class DocumentUpdateDto
    {
        public string Content { get; set; }

        public List<FS.Cms.Core.Dtos.CmsFileFieldDto> Files { get; set; }

        public string DocumentDefinitionId { get; set; }

        public string Code { get; set; }

        public System.Guid? ParentId { get; set; }

        public string DisplayName { get; set; }

        public int Level { get; set; }

    }
    public partial class DocumentGetListDto : SearchResultRequestDto
    {
    }
}
