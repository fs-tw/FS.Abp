using System;
using System.ComponentModel.DataAnnotations;

namespace Volo.Abp.Account
{
    public class ConfirmPhoneNumberInput
    {
        [Required]
        public string Token { get; set; }
    }
}