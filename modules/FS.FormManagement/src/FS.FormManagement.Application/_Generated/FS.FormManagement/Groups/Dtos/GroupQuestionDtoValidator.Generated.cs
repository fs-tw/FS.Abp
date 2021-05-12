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

namespace FS.FormManagement.Groups.Dtos
{
    public partial class GroupQuestionCreateDtoValidator : AbstractValidator<GroupQuestionCreateDto>
    {
        public GroupQuestionCreateDtoValidator()
        {
            RuleFor(p => p.GroupId)
                .NotNull()
                ;
            RuleFor(p => p.QuestionId)
                .NotNull()
                ;
            RuleFor(p => p.Sequence)
                .NotNull()
                ;
            RuleFor(p => p.Discriminator)
                .NotNull()
                ;
            RuleFor(p => p.FormId)
                .NotNull()
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
    public partial class GroupQuestionUpdateDtoValidator : AbstractValidator<GroupQuestionUpdateDto>
    {
        public GroupQuestionUpdateDtoValidator()
        {
            RuleFor(p => p.GroupId)
                .NotNull()
                ;
            RuleFor(p => p.QuestionId)
                .NotNull()
                ;
            RuleFor(p => p.Sequence)
                .NotNull()
                ;
            RuleFor(p => p.Discriminator)
                .NotNull()
                ;
            RuleFor(p => p.FormId)
                .NotNull()
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
}
