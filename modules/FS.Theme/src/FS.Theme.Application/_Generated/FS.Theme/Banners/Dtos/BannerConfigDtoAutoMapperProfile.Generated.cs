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

namespace FS.Theme.Banners.Dtos
{
    public partial class BannerConfigAutoMapperProfile : Profile
    {
        public BannerConfigAutoMapperProfile()
        {
            CreateMap<FS.Theme.Banners.BannerConfig, BannerConfigDto>()
            .ReverseMap();
        
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }

}
