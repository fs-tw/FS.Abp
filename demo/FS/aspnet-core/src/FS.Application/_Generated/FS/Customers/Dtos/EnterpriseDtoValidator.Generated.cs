﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using System.Reflection;
using FluentValidation;

namespace FS.Customers.Dtos
{
    public partial class EnterpriseCreateDtoValidator : AbstractValidator<EnterpriseCreateDto>
    {
        public EnterpriseCreateDtoValidator()
        {
            RuleFor(p => p.CompanyName)
                .NotNull()
                ;
            RuleFor(p => p.Industry)
                .NotNull()
                ;
            RuleFor(p => p.Product)
                .NotNull()
                ;
            RuleFor(p => p.Address)
                .NotNull()
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
    public partial class EnterpriseUpdateDtoValidator : AbstractValidator<EnterpriseUpdateDto>
    {
        public EnterpriseUpdateDtoValidator()
        {
            RuleFor(p => p.CompanyName)
                .NotNull()
                ;
            RuleFor(p => p.Industry)
                .NotNull()
                ;
            RuleFor(p => p.Product)
                .NotNull()
                ;
            RuleFor(p => p.Address)
                .NotNull()
                ;
            CustomizeConfiguration();
        }
        partial void CustomizeConfiguration();
    }
}
