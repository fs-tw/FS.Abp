﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.2
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using System.Reflection;
using FluentValidation;

namespace FS.FormManagement.Forms.Dtos
{
    public partial class ItemCreateDtoValidator : AbstractValidator<ItemCreateDto>
    {
        public ItemCreateDtoValidator()
        {
            RuleFor(p => p.No)
                .NotNull()
                ;
            RuleFor(p => p.Question)
                .NotNull()
                ;
            RuleFor(p => p.GroupId)
                .NotNull()
                ;
            RuleFor(p => p.Sequence)
                .NotNull()
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
    public partial class ItemUpdateDtoValidator : AbstractValidator<ItemUpdateDto>
    {
        public ItemUpdateDtoValidator()
        {
            RuleFor(p => p.No)
                .NotNull()
                ;
            RuleFor(p => p.Question)
                .NotNull()
                ;
            RuleFor(p => p.GroupId)
                .NotNull()
                ;
            RuleFor(p => p.Sequence)
                .NotNull()
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
}
