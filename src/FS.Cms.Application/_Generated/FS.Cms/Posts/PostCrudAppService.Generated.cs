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
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace FS.Cms.Posts
{
    public partial class PostCrudAppService :  // auto-generated
        FS.Abp.Application.Services.EntityWithKeyCrudAppService<FS.Cms.Posts.Post, FS.Cms.Posts.Dtos.PostWithDetailsDto, FS.Cms.Posts.Dtos.PostPrimaryKeyDto, Guid, FS.Cms.Posts.Dtos.PostGetListDto, FS.Cms.Posts.Dtos.PostCreateDto, FS.Cms.Posts.Dtos.PostUpdateDto>,
        IPostCrudAppService
    {
        private readonly IPostRepository _repository;

        public PostCrudAppService(IPostRepository repository) : base(repository)
        {
            this._repository = repository;
        }
    }
}
