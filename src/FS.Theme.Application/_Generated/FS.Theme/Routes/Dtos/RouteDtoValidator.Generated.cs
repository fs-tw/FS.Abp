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
using FluentValidation;

namespace FS.Theme.Routes.Dtos
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
            RuleFor(p => p.Description)
                ;
            RuleFor(p => p.Code)
                ;
            RuleFor(p => p.Level)
                ;
            RuleFor(p => p.ParentId)
                ;
            RuleFor(p => p.Enable)
                .NotNull()
                ;
            RuleFor(p => p.RouteConfig)
                ;
            RuleFor(p => p.RouteDefinitionId)
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
            RuleFor(p => p.Description)
                ;
            RuleFor(p => p.Code)
                ;
            RuleFor(p => p.Level)
                ;
            RuleFor(p => p.ParentId)
                ;
            RuleFor(p => p.Enable)
                .NotNull()
                ;
            RuleFor(p => p.RouteConfig)
                ;
            RuleFor(p => p.RouteDefinitionId)
                .NotNull()
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
}
