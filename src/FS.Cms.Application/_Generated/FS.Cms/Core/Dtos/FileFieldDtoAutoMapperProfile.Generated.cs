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

namespace FS.Cms.Core.Dtos
{
    public partial class FileFieldAutoMapperProfile : Profile
    {
        public FileFieldAutoMapperProfile()
        {
            CreateMap<FS.Cms.Core.FileField, FileFieldDto>()
            .ReverseMap();
        
            CreateMap<FS.Cms.Core.FileField, FileFieldWithDetailsDto>();
        
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }

}
