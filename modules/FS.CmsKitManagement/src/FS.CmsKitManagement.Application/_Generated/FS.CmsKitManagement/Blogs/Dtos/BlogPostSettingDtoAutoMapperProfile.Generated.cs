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

namespace FS.CmsKitManagement.Blogs.Dtos
{
    public partial class BlogPostSettingAutoMapperProfile : Profile
    {
        public BlogPostSettingAutoMapperProfile()
        {
            CreateMap<FS.CmsKitManagement.Blogs.BlogPostSetting, BlogPostSettingDto>()
            .ReverseMap();
        
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }

}