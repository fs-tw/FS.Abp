﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.4.2
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using System.Reflection;
using FluentValidation;

namespace FS.CmsKitManagement.Routes.Dtos
{
    public partial class RouteCreateDtoValidator : AbstractValidator<RouteCreateDto>
    {
        public RouteCreateDtoValidator()
        {
            RuleFor(p => p.No)
                .NotNull()
                ;
            RuleFor(p => p.DisplayName)
                .NotNull()
                ;
            RuleFor(p => p.RouteDefinitionId)
                .NotNull()
                ;
            RuleFor(p => p.Code)
                .NotNull()
                ;
            RuleFor(p => p.ParentId)
                ;
            RuleFor(p => p.UrlType)
                .NotNull()
                ;
            RuleFor(p => p.Url)
                ;
            RuleFor(p => p.Level)
                ;
            RuleFor(p => p.IsHidden)
                .NotNull()
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
    public partial class RouteUpdateDtoValidator : AbstractValidator<RouteUpdateDto>
    {
        public RouteUpdateDtoValidator()
        {
            RuleFor(p => p.No)
                .NotNull()
                ;
            RuleFor(p => p.DisplayName)
                .NotNull()
                ;
            RuleFor(p => p.RouteDefinitionId)
                .NotNull()
                ;
            RuleFor(p => p.Code)
                .NotNull()
                ;
            RuleFor(p => p.ParentId)
                ;
            RuleFor(p => p.UrlType)
                .NotNull()
                ;
            RuleFor(p => p.Url)
                ;
            RuleFor(p => p.Level)
                ;
            RuleFor(p => p.IsHidden)
                .NotNull()
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
}
