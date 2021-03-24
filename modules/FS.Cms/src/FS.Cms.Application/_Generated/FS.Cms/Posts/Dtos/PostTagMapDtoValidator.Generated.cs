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

namespace FS.Cms.Posts.Dtos
{
    public partial class PostTagMapCreateDtoValidator : AbstractValidator<PostTagMapCreateDto>
    {
        public PostTagMapCreateDtoValidator()
        {
            RuleFor(p => p.PostId)
                .NotNull()
                ;
            RuleFor(p => p.TagId)
                .NotNull()
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
    public partial class PostTagMapUpdateDtoValidator : AbstractValidator<PostTagMapUpdateDto>
    {
        public PostTagMapUpdateDtoValidator()
        {
            RuleFor(p => p.PostId)
                .NotNull()
                ;
            RuleFor(p => p.TagId)
                .NotNull()
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
}
