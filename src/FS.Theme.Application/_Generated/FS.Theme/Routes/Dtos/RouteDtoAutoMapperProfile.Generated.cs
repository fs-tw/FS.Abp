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

namespace FS.Theme.Routes.Dtos
{
    public partial class RouteAutoMapperProfile : Profile
    {
        public RouteAutoMapperProfile()
        {
            CreateMap<FS.Theme.Routes.Route, RouteDto>()
            .ReverseMap();
        
            CreateMap<RouteCreateDto, FS.Theme.Routes.Route>();
        
            CreateMap<RouteUpdateDto, FS.Theme.Routes.Route>();
        
            CreateMap<FS.Theme.Routes.Route, RouteWithDetailsDto>();
        
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }

}
