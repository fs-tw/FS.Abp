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

namespace FS.Cms.Tags
{
    public partial class TagCrudAppService : 
        FS.Abp.Application.Services.CrudAppService<FS.Cms.Tags.Tag, FS.Cms.Tags.Dtos.TagWithDetailsDto, Guid, FS.Cms.Tags.Dtos.TagGetListDto, FS.Cms.Tags.Dtos.TagCreateDto, FS.Cms.Tags.Dtos.TagUpdateDto>,
        ITagCrudAppService
    {
        private readonly ITagRepository _repository;

        public TagCrudAppService(ITagRepository repository) : base(repository)
        {
            this._repository = repository;
        }
    }
}
