﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 2.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using System.Reflection;
using FluentValidation;

namespace FS.Cms.Documents.Dtos
{
    public partial class DocumentCreateDtoValidator : AbstractValidator<DocumentCreateDto>
    {
        public DocumentCreateDtoValidator()
        {
            RuleFor(p => p.Content)
                .NotNull()
                ;
            RuleFor(p => p.Files)
                ;
            RuleFor(p => p.DocumentDefinitionId)
                .NotNull()
                ;
            RuleFor(p => p.Code)
                .NotNull()
                ;
            RuleFor(p => p.ParentId)
                ;
            RuleFor(p => p.DisplayName)
                .NotNull()
                ;
            RuleFor(p => p.Level)
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
    public partial class DocumentUpdateDtoValidator : AbstractValidator<DocumentUpdateDto>
    {
        public DocumentUpdateDtoValidator()
        {
            RuleFor(p => p.Content)
                .NotNull()
                ;
            RuleFor(p => p.Files)
                ;
            RuleFor(p => p.DocumentDefinitionId)
                .NotNull()
                ;
            RuleFor(p => p.Code)
                .NotNull()
                ;
            RuleFor(p => p.ParentId)
                ;
            RuleFor(p => p.DisplayName)
                .NotNull()
                ;
            RuleFor(p => p.Level)
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
}
