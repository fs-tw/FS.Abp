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
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace FS.CmsKitManagement.Contents
{
    public partial class EntityContentCrudAppService :  // auto-generated
        Volo.Abp.Application.Services.CrudAppService<FS.CmsKitManagement.Contents.EntityContent, FS.CmsKitManagement.Contents.Dtos.EntityContentWithDetailsDto, Guid, FS.CmsKitManagement.Contents.Dtos.EntityContentGetListDto, FS.CmsKitManagement.Contents.Dtos.EntityContentCreateDto, FS.CmsKitManagement.Contents.Dtos.EntityContentUpdateDto>,
        IEntityContentCrudAppService
    {
        private readonly IEntityContentRepository _repository;

        public EntityContentCrudAppService(IEntityContentRepository repository) : base(repository)
        {
            this._repository = repository;
        }
    }
}
