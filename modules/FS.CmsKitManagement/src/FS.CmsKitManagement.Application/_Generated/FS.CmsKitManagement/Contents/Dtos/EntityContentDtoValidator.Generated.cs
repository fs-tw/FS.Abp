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
    public partial class EntityContentCreateDtoValidator : AbstractValidator<EntityContentCreateDto>
    {
        public EntityContentCreateDtoValidator()
        {
            RuleFor(p => p.EntityType)
                .Length(0, 64)
                .NotNull()
                ;
            RuleFor(p => p.EntityId)
                .NotNull()
                ;
            RuleFor(p => p.EntityContentDefinitionId)
                .NotNull()
                ;
            RuleFor(p => p.Sequence)
                .NotNull()
                ;
            RuleFor(p => p.Properties)
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
    public partial class EntityContentUpdateDtoValidator : AbstractValidator<EntityContentUpdateDto>
    {
        public EntityContentUpdateDtoValidator()
        {
            RuleFor(p => p.EntityType)
                .Length(0, 64)
                .NotNull()
                ;
            RuleFor(p => p.EntityId)
                .NotNull()
                ;
            RuleFor(p => p.EntityContentDefinitionId)
                .NotNull()
                ;
            RuleFor(p => p.Sequence)
                .NotNull()
                ;
            RuleFor(p => p.Properties)
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
}
