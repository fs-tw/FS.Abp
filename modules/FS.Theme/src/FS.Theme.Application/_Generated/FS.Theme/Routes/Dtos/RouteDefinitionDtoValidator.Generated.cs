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
using FluentValidation;

namespace FS.Theme.Routes.Dtos
{
    public partial class RouteDefinitionCreateDtoValidator : AbstractValidator<RouteDefinitionCreateDto>
    {
        public RouteDefinitionCreateDtoValidator()
        {
            RuleFor(p => p.No)
                .NotNull()
                ;
            RuleFor(p => p.DisplayName)
                .NotNull()
                ;
            RuleFor(p => p.Description)
                ;
            RuleFor(p => p.Disable)
                .NotNull()
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
    public partial class RouteDefinitionUpdateDtoValidator : AbstractValidator<RouteDefinitionUpdateDto>
    {
        public RouteDefinitionUpdateDtoValidator()
        {
            RuleFor(p => p.No)
                .NotNull()
                ;
            RuleFor(p => p.DisplayName)
                .NotNull()
                ;
            RuleFor(p => p.Description)
                ;
            RuleFor(p => p.Disable)
                .NotNull()
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
}
