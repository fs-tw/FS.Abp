﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 1.102.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using System.Reflection;
using AutoMapper;
using Volo.Abp.AutoMapper;

namespace FS.Cms.Posts.Dtos
{
    public partial class PostAttachmentFilesAutoMapperProfile : Profile
    {
        public PostAttachmentFilesAutoMapperProfile()
        {
            CreateMap<FS.Cms.Posts.PostAttachmentFiles, PostAttachmentFilesDto>()
            .ReverseMap();
        
            CreateMap<FS.Cms.Posts.PostAttachmentFiles, PostAttachmentFilesWithDetailsDto>();
        
            CreateMap<PostAttachmentFilesCreateDto, FS.Cms.Posts.PostAttachmentFiles>();
        
            CreateMap<PostAttachmentFilesUpdateDto, FS.Cms.Posts.PostAttachmentFiles>();
        
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }

}
