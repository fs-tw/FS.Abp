﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.4.3
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using System.Reflection;
using FluentValidation;

namespace FS.CmsKitManagement.Contents.Dtos
{
    public partial class ContentCreateDtoValidator : AbstractValidator<ContentCreateDto>
    {
        public ContentCreateDtoValidator()
        {
            RuleFor(p => p.EntityType)
                .Length(0, 64)
                .NotNull()
                ;
            RuleFor(p => p.EntityId)
                ;
            RuleFor(p => p.ContentTypeId)
                ;
            RuleFor(p => p.Value)
                .NotNull()
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
    public partial class ContentUpdateDtoValidator : AbstractValidator<ContentUpdateDto>
    {
        public ContentUpdateDtoValidator()
        {
            RuleFor(p => p.EntityType)
                .Length(0, 64)
                .NotNull()
                ;
            RuleFor(p => p.EntityId)
                ;
            RuleFor(p => p.ContentTypeId)
                ;
            RuleFor(p => p.Value)
                .NotNull()
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
}
