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

namespace FS.Cms.Blogs.Dtos
{
    public partial class BlogAutoMapperProfile : Profile
    {
        public BlogAutoMapperProfile()
        {
            CreateMap<FS.Cms.Blogs.Blog, BlogDto>()
                .ReverseMap();

            CreateMap<FS.Cms.Blogs.Blog, BlogWithDetailsDto>();

            CreateMap<BlogCreateInput, FS.Cms.Blogs.Blog>();

            CreateMap<BlogUpdateInput, FS.Cms.Blogs.Blog>();

            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }

}
