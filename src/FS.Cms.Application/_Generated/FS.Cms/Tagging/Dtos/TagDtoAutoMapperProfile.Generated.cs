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

namespace FS.Cms.Tagging.Dtos
{
    public partial class TagAutoMapperProfile : Profile
    {
        public TagAutoMapperProfile()
        {
            CreateMap<FS.Cms.Tagging.Tag, TagDto>()
            .ReverseMap();
        
            CreateMap<FS.Cms.Tagging.Tag, TagWithDetailsDto>();
        
            CreateMap<TagCreateInput, FS.Cms.Tagging.Tag>();
        
            CreateMap<TagUpdateInput, FS.Cms.Tagging.Tag>();
        
            CreateMap<TagUpdateInput, TagDto.PrimaryKey>();
        
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }

}
