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

namespace FS.Cms.Posts
{
    public partial class PostTagMapCrudAppService :  // auto-generated
        FS.Abp.Application.Services.EntityWithKeyCrudAppService<FS.Cms.Posts.PostTagMap, FS.Cms.Posts.Dtos.PostTagMapWithDetailsDto, FS.Cms.Posts.Dtos.PostTagMapPrimaryKeyDto, Guid, FS.Cms.Posts.Dtos.PostTagMapGetListDto, FS.Cms.Posts.Dtos.PostTagMapCreateDto, FS.Cms.Posts.Dtos.PostTagMapUpdateDto>,
        IPostTagMapCrudAppService
    {
        private readonly IPostTagMapRepository _repository;

        public PostTagMapCrudAppService(IPostTagMapRepository repository) : base(repository)
        {
            this._repository = repository;
        }
    }
}
