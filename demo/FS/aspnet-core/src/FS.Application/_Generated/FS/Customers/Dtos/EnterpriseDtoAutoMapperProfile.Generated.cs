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

namespace FS.Customers.Dtos
{
    public partial class EnterpriseAutoMapperProfile : Profile
    {
        public EnterpriseAutoMapperProfile()
        {
            CreateMap<FS.Customers.Enterprise, EnterpriseDto>()
            .ReverseMap();
        
            CreateMap<EnterpriseCreateDto, FS.Customers.Enterprise>();
        
            CreateMap<EnterpriseUpdateDto, FS.Customers.Enterprise>();
        
            CreateMap<FS.Customers.Enterprise, EnterpriseWithDetailsDto>();
        
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }

}