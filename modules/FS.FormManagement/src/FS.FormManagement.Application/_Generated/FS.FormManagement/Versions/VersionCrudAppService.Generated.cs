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
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace FS.FormManagement.Versions
{
    public partial class VersionCrudAppService :  // auto-generated
        FS.Abp.Application.Services.EntityWithKeyCrudAppService<FS.FormManagement.Versions.Version, FS.FormManagement.Versions.Dtos.VersionWithDetailsDto, FS.FormManagement.Versions.Dtos.VersionPrimaryKeyDto, Guid, FS.FormManagement.Versions.Dtos.VersionGetListDto, FS.FormManagement.Versions.Dtos.VersionCreateDto, FS.FormManagement.Versions.Dtos.VersionUpdateDto>,
        IVersionCrudAppService
    {
        private readonly IVersionRepository _repository;

        public VersionCrudAppService(IVersionRepository repository) : base(repository)
        {
            this._repository = repository;
        }
    }
}