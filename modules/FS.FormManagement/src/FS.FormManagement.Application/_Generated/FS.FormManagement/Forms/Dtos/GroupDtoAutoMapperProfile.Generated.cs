﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.2
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using System.Reflection;
using AutoMapper;
using Volo.Abp.AutoMapper;

namespace FS.FormManagement.Forms.Dtos
{
    public partial class GroupAutoMapperProfile : Profile
    {
        public GroupAutoMapperProfile()
        {
            CreateMap<FS.FormManagement.Forms.Group, GroupDto>()
            .ReverseMap();
        
            CreateMap<GroupCreateDto, FS.FormManagement.Forms.Group>();
        
            CreateMap<GroupUpdateDto, FS.FormManagement.Forms.Group>();
        
            CreateMap<FS.FormManagement.Forms.Group, GroupWithDetailsDto>();
        
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }

}