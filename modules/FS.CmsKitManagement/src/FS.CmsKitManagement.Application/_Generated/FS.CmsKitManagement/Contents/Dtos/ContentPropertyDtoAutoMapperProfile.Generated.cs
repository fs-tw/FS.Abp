﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.4.3
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using System.Reflection;
using AutoMapper;
using Volo.Abp.AutoMapper;

namespace FS.CmsKitManagement.Contents.Dtos
{
    public partial class ContentPropertyAutoMapperProfile : Profile
    {
        public ContentPropertyAutoMapperProfile()
        {
            CreateMap<FS.CmsKitManagement.Contents.ContentProperty, ContentPropertyDto>()
            .ReverseMap();
        
            CreateMap<ContentPropertyCreateDto, FS.CmsKitManagement.Contents.ContentProperty>();
        
            CreateMap<ContentPropertyUpdateDto, FS.CmsKitManagement.Contents.ContentProperty>();
        
            CreateMap<FS.CmsKitManagement.Contents.ContentProperty, ContentPropertyWithDetailsDto>();
        
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }

}