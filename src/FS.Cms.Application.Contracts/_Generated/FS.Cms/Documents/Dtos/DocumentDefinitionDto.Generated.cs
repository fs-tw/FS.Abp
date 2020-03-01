﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 1.102.0.0
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
    public partial class DocumentDefinitionDto : Volo.Abp.Application.Dtos.FullAuditedEntityDto<String>
    {
        public List<FS.Cms.Core.Dtos.ImageFieldDto> Images { get; set; }

        public string Title { get; set; }

        public string Url { get; set; }

        public class PrimaryKey
        {
            public string Id { get; set; }
    
        }

    }
    public partial class DocumentDefinitionWithDetailsDto : DocumentDefinitionDto
    {
        public List<DocumentDto> Documents { get; set; }

    }
    public partial class DocumentDefinitionCreateInput
    {
        public List<FS.Cms.Core.Dtos.ImageFieldDto> Images { get; set; }

        public string Title { get; set; }

        public string Url { get; set; }

    }
    public partial class DocumentDefinitionUpdateInput
    {
        public List<FS.Cms.Core.Dtos.ImageFieldDto> Images { get; set; }

        public string Title { get; set; }

        public string Url { get; set; }

    }
    public partial class DocumentDefinitionGetListInput : SearchResultRequestDto
    {
    }
}
