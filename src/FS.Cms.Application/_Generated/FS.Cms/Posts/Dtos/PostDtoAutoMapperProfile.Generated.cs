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
    public partial class PostAutoMapperProfile : Profile
    {
        public PostAutoMapperProfile()
        {
            CreateMap<FS.Cms.Posts.Post, PostDto>().ReverseMap();
            CreateMap<FS.Cms.Posts.Post, PostWithDetailsDto>();
            CreateMap<PostCreateInput, FS.Cms.Posts.Post>();
            CreateMap<PostUpdateInput, FS.Cms.Posts.Post>();
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }

}
