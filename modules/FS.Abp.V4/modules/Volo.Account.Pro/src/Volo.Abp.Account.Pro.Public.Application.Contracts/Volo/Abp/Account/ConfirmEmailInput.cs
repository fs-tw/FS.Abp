using System;
using System.ComponentModel.DataAnnotations;

namespace Volo.Abp.Account
{
    public class ConfirmEmailInput
    {
        [Required]
        public Guid UserId { get; set; }

        [Required]
        public string Token { get; set; }
    }
}
