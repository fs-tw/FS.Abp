﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using the template for generating CrudApplication.
// 1.102.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using Volo.Abp.Application.Services;

namespace FS.Cms.Documents
{
    public partial class DocumentTreeAppService : 
        FS.Abp.Trees.TreeAppService<FS.Cms.Documents.Document, FS.Cms.Documents.Dtos.DocumentWithDetailsDto, FS.Cms.Documents.Dtos.DocumentDto, FS.Cms.Documents.Dtos.DocumentGetListInput, FS.Cms.Documents.Dtos.DocumentCreateInput, FS.Cms.Documents.Dtos.DocumentUpdateInput, FS.Cms.Documents.Dtos.DocumentMoveInput>,
        IDocumentTreeAppService
    {
        private readonly IDocumentTreeRepository _repository;

        public DocumentTreeAppService(IDocumentTreeRepository repository) : base(repository)
        {
            this._repository = repository;
        }
    }
}
