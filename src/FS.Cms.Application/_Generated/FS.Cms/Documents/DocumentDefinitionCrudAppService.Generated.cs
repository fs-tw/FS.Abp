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
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace FS.Cms.Documents
{
    public partial class DocumentDefinitionCrudAppService : 
        FS.Abp.Application.Services.CrudAppService<FS.Cms.Documents.DocumentDefinition, FS.Cms.Documents.Dtos.DocumentDefinitionWithDetailsDto, String, FS.Cms.Documents.Dtos.DocumentDefinitionGetListInput, FS.Cms.Documents.Dtos.DocumentDefinitionCreateInput, FS.Cms.Documents.Dtos.DocumentDefinitionUpdateInput>,
        IDocumentDefinitionCrudAppService
    {
        private readonly IDocumentDefinitionRepository _repository;

        public DocumentDefinitionCrudAppService(IDocumentDefinitionRepository repository) : base(repository)
        {
            this._repository = repository;
        }



    }
}
