﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 1.102.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using System.Reflection;
using FluentValidation;

namespace FS.Cms.Posts.Dtos
{
    public partial class PostAttachmentFilesCreateInputValidator : AbstractValidator<PostAttachmentFilesCreateInput>
    {
        public PostAttachmentFilesCreateInputValidator()
        {
            RuleFor(p => p.Content)
                .NotNull()
                ;
            RuleFor(p => p.PostId)
                .NotNull()
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
    public partial class PostAttachmentFilesUpdateInputValidator : AbstractValidator<PostAttachmentFilesUpdateInput>
    {
        public PostAttachmentFilesUpdateInputValidator()
        {
            RuleFor(p => p.Content)
                .NotNull()
                ;
            RuleFor(p => p.PostId)
                .NotNull()
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
}
