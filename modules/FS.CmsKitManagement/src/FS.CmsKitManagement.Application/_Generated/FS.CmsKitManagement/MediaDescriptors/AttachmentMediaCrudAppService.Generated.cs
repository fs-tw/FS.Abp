﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.4.2
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

namespace FS.CmsKitManagement.MediaDescriptors
{
    public partial class AttachmentMediaCrudAppService :  // auto-generated
        FS.Abp.Application.Services.EntityWithKeyCrudAppService<FS.CmsKitManagement.MediaDescriptors.AttachmentMedia, FS.CmsKitManagement.MediaDescriptors.Dtos.AttachmentMediaWithDetailsDto, FS.CmsKitManagement.MediaDescriptors.Dtos.AttachmentMediaPrimaryKeyDto, Guid, FS.CmsKitManagement.MediaDescriptors.Dtos.AttachmentMediaGetListDto, FS.CmsKitManagement.MediaDescriptors.Dtos.AttachmentMediaCreateDto, FS.CmsKitManagement.MediaDescriptors.Dtos.AttachmentMediaUpdateDto>,
        IAttachmentMediaCrudAppService
    {
        private readonly IAttachmentMediaRepository _repository;

        public AttachmentMediaCrudAppService(IAttachmentMediaRepository repository) : base(repository)
        {
            this._repository = repository;
        }
    }
}
