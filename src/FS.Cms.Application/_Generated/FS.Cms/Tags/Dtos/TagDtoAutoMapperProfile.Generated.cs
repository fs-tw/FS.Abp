﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.1
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
        
            CreateMap<TagCreateDto, FS.Cms.Tags.Tag>();
        
            CreateMap<TagUpdateDto, FS.Cms.Tags.Tag>();
        
            CreateMap<FS.Cms.Tags.Tag, TagWithDetailsDto>();
        
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }

}
