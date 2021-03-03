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

namespace FS.Theme.Banners.Dtos
{
    public partial class BannerCreateDtoValidator : AbstractValidator<BannerCreateDto>
    {
        public BannerCreateDtoValidator()
        {
            RuleFor(p => p.No)
                .NotNull()
                ;
            RuleFor(p => p.DisplayName)
                .NotNull()
                ;
            RuleFor(p => p.Description)
                ;
            RuleFor(p => p.Enable)
                .NotNull()
                ;
            RuleFor(p => p.BannerConfig)
                ;
            RuleFor(p => p.BannerDefinitionId)
                .NotNull()
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
    public partial class BannerUpdateDtoValidator : AbstractValidator<BannerUpdateDto>
    {
        public BannerUpdateDtoValidator()
        {
            RuleFor(p => p.No)
                .NotNull()
                ;
            RuleFor(p => p.DisplayName)
                .NotNull()
                ;
            RuleFor(p => p.Description)
                ;
            RuleFor(p => p.Enable)
                .NotNull()
                ;
            RuleFor(p => p.BannerConfig)
                ;
            RuleFor(p => p.BannerDefinitionId)
                .NotNull()
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
}