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

namespace FS.Theme.Banners.Dtos
{
    public partial class BannerDefinitionAutoMapperProfile : Profile
    {
        public BannerDefinitionAutoMapperProfile()
        {
            CreateMap<FS.Theme.Banners.BannerDefinition, BannerDefinitionDto>()
            .ReverseMap();
        
            CreateMap<BannerDefinitionCreateDto, FS.Theme.Banners.BannerDefinition>();
        
            CreateMap<BannerDefinitionUpdateDto, FS.Theme.Banners.BannerDefinition>();
        
            CreateMap<FS.Theme.Banners.BannerDefinition, BannerDefinitionWithDetailsDto>();
        
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }

}
