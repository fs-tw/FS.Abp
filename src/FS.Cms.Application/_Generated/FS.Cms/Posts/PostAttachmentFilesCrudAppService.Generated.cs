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

namespace FS.Cms.Posts
{
    public partial class PostAttachmentFilesCrudAppService : 
        FS.Abp.Application.Services.CrudAppService<FS.Cms.Posts.PostAttachmentFiles, FS.Cms.Posts.Dtos.PostAttachmentFilesWithDetailsDto, Guid, FS.Cms.Posts.Dtos.PostAttachmentFilesGetListInput, FS.Cms.Posts.Dtos.PostAttachmentFilesCreateInput, FS.Cms.Posts.Dtos.PostAttachmentFilesUpdateInput>,
        IPostAttachmentFilesCrudAppService
    {
        private readonly IPostAttachmentFilesRepository _repository;

        public PostAttachmentFilesCrudAppService(IPostAttachmentFilesRepository repository) : base(repository)
        {
            this._repository = repository;
        }



    }
}
