﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 5.1.3
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using System.Reflection;
using AutoMapper;
using Volo.Abp.AutoMapper;

namespace FS.Coding.SerialNumbers.Dtos
{
    public partial class SerialNumberAutoMapperProfile : Profile
    {
        public SerialNumberAutoMapperProfile()
        {
            CreateMap<FS.Coding.SerialNumbers.SerialNumber, SerialNumberDto>()
            .ReverseMap();
        
            CreateMap<SerialNumberCreateDto, FS.Coding.SerialNumbers.SerialNumber>();
        
            CreateMap<SerialNumberUpdateDto, FS.Coding.SerialNumbers.SerialNumber>();
        
            CreateMap<FS.Coding.SerialNumbers.SerialNumber, SerialNumberWithDetailsDto>();
        
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }

}
