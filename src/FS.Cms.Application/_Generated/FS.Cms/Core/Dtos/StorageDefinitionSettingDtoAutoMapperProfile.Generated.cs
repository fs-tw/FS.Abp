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

namespace FS.Cms.Core.Dtos
{
    public partial class StorageDefinitionSettingAutoMapperProfile : Profile
    {
        public StorageDefinitionSettingAutoMapperProfile()
        {
            CreateMap<FS.Cms.Core.StorageDefinitionSetting, StorageDefinitionSettingDto>()
            .ReverseMap();
        
            CreateMap<FS.Cms.Core.StorageDefinitionSetting, StorageDefinitionSettingWithDetailsDto>();
        
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }

}
