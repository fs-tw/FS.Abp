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

namespace FS.Theme.Banners.Dtos
{
    public partial class BannerAutoMapperProfile : Profile
    {
        public BannerAutoMapperProfile()
        {
            CreateMap<FS.Theme.Banners.Banner, BannerDto>()
            .ReverseMap();
        
            CreateMap<FS.Theme.Banners.Banner, BannerWithDetailsDto>();
        
            CreateMap<BannerCreateDto, FS.Theme.Banners.Banner>();
        
            CreateMap<BannerUpdateDto, FS.Theme.Banners.Banner>();
        
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }

}
