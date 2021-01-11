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
    public partial class CustomerAutoMapperProfile : Profile
    {
        public CustomerAutoMapperProfile()
        {
            CreateMap<FS.Customers.Customer, CustomerDto>()
            .Include<FS.Customers.Enterprise, FS.Customers.Dtos.EnterpriseDto>()
            .Include<FS.Customers.Person, FS.Customers.Dtos.PersonDto>()
            .ReverseMap();
        
            CreateMap<CustomerCreateDto, FS.Customers.Customer>()
            .Include<FS.Customers.Dtos.EnterpriseCreateDto, FS.Customers.Enterprise>()
            .Include<FS.Customers.Dtos.PersonCreateDto, FS.Customers.Person>();
        
            CreateMap<CustomerUpdateDto, FS.Customers.Customer>()
            .Include<FS.Customers.Dtos.EnterpriseUpdateDto, FS.Customers.Enterprise>()
            .Include<FS.Customers.Dtos.PersonUpdateDto, FS.Customers.Person>();
        
            CreateMap<FS.Customers.Customer, CustomerWithDetailsDto>()
            .Include<FS.Customers.Enterprise, FS.Customers.Dtos.EnterpriseWithDetailsDto>()
            .Include<FS.Customers.Person, FS.Customers.Dtos.PersonWithDetailsDto>();
        
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }

}