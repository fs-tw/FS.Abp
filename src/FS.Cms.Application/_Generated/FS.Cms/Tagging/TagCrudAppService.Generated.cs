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

namespace FS.Cms.Tagging
{
    public partial class TagCrudAppService : 
        Volo.Abp.Application.Services.CrudAppService<FS.Cms.Tagging.Tag, FS.Cms.Tagging.Dtos.TagWithDetailsDto, FS.Cms.Tagging.Dtos.TagDto, Guid, FS.Cms.Tagging.Dtos.TagGetListInput, FS.Cms.Tagging.Dtos.TagCreateInput, FS.Cms.Tagging.Dtos.TagUpdateInput>,
        ITagCrudAppService
    {
        private readonly ITagRepository _repository;

        public TagCrudAppService(ITagRepository repository) : base(repository)
        {
            this._repository = repository;
        }
    }
}
