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

namespace FS.CmsKitManagement.Blogs.Dtos
{
    public partial class PostRouteCreateDtoValidator : AbstractValidator<PostRouteCreateDto>
    {
        public PostRouteCreateDtoValidator()
        {
            RuleFor(p => p.PostId)
                .NotNull()
                ;
            RuleFor(p => p.RouteId)
                .NotNull()
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
    public partial class PostRouteUpdateDtoValidator : AbstractValidator<PostRouteUpdateDto>
    {
        public PostRouteUpdateDtoValidator()
        {
            RuleFor(p => p.PostId)
                .NotNull()
                ;
            RuleFor(p => p.RouteId)
                .NotNull()
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
}
