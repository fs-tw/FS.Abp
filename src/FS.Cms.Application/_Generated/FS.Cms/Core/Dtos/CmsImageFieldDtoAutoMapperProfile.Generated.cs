﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 2.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using System.Reflection;
using AutoMapper;
using Volo.Abp.AutoMapper;

namespace FS.Cms.Core.Dtos
{
    public partial class CmsImageFieldAutoMapperProfile : Profile
    {
        public CmsImageFieldAutoMapperProfile()
        {
            CreateMap<FS.Cms.Core.CmsImageField, CmsImageFieldDto>()
            .ReverseMap();
        
            CreateMap<FS.Cms.Core.CmsImageField, CmsImageFieldWithDetailsDto>();
        
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }

}
