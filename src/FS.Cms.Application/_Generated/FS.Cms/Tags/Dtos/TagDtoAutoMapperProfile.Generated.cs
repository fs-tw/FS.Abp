﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using System.Reflection;
using AutoMapper;
using Volo.Abp.AutoMapper;

namespace FS.Cms.Tags.Dtos
{
    public partial class TagAutoMapperProfile : Profile
    {
        public TagAutoMapperProfile()
        {
            CreateMap<FS.Cms.Tags.Tag, TagDto>()
            .ReverseMap();
        
            CreateMap<FS.Cms.Tags.Tag, TagWithDetailsDto>();
        
            CreateMap<TagCreateDto, FS.Cms.Tags.Tag>();
        
            CreateMap<TagUpdateDto, FS.Cms.Tags.Tag>();
        
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }

}
