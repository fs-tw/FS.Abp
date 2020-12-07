using System.ComponentModel.DataAnnotations;
using Volo.Abp.Identity;
using Volo.Abp.Validation;

namespace Volo.Abp.Account
{
    public class SendEmailConfirmationTokenDto
    {
        [Required]
        public string AppName { get; set; }

        [Required]
        [EmailAddress]
        [DynamicStringLength(typeof(IdentityUserConsts), nameof(IdentityUserConsts.MaxEmailLength))]
        public string Email { get; set; }

        public string ReturnUrl { get; set; }

        public string ReturnUrlHash { get; set; }
    }
}
