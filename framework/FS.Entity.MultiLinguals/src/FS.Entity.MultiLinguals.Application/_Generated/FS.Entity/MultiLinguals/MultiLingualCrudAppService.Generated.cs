﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.4.4
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

namespace FS.Entity.MultiLinguals
{
    public partial class MultiLingualCrudAppService :  // auto-generated
        Volo.Abp.Application.Services.CrudAppService<FS.Entity.MultiLinguals.MultiLingual, FS.Entity.MultiLinguals.Dtos.MultiLingualWithDetailsDto, Guid, FS.Entity.MultiLinguals.Dtos.MultiLingualGetListDto, FS.Entity.MultiLinguals.Dtos.MultiLingualCreateDto, FS.Entity.MultiLinguals.Dtos.MultiLingualUpdateDto>,
        IMultiLingualCrudAppService
    {
        private readonly IMultiLingualRepository _repository;

        public MultiLingualCrudAppService(IMultiLingualRepository repository) : base(repository)
        {
            this._repository = repository;
        }
    }
}