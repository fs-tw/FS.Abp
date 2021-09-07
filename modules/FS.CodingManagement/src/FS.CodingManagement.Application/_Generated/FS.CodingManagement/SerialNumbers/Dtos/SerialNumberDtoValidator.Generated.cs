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

namespace FS.CodingManagement.SerialNumbers.Dtos
{
    public partial class SerialNumberCreateDtoValidator : AbstractValidator<SerialNumberCreateDto>
    {
        public SerialNumberCreateDtoValidator()
        {
            RuleFor(p => p.ProviderName)
                .NotNull()
                ;
            RuleFor(p => p.ProviderKey)
                .NotNull()
                ;
            RuleFor(p => p.Value)
                .NotNull()
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
    public partial class SerialNumberUpdateDtoValidator : AbstractValidator<SerialNumberUpdateDto>
    {
        public SerialNumberUpdateDtoValidator()
        {
            RuleFor(p => p.ProviderName)
                .NotNull()
                ;
            RuleFor(p => p.ProviderKey)
                .NotNull()
                ;
            RuleFor(p => p.Value)
                .NotNull()
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
}
