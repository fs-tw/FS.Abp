﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.1
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using System.Reflection;
using AutoMapper;
using Volo.Abp.AutoMapper;

namespace FS.Cms.Documents.Dtos
{
    public partial class DocumentAutoMapperProfile : Profile
    {
        public DocumentAutoMapperProfile()
        {
            CreateMap<FS.Cms.Documents.Document, DocumentDto>()
            .ReverseMap();
        
            CreateMap<DocumentCreateDto, FS.Cms.Documents.Document>();
        
            CreateMap<DocumentUpdateDto, FS.Cms.Documents.Document>();
        
            CreateMap<FS.Cms.Documents.Document, DocumentWithDetailsDto>();
        
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }

}
