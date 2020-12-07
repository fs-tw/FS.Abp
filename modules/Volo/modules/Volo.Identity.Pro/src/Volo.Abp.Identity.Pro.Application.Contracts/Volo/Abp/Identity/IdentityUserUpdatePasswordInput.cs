using System.ComponentModel.DataAnnotations;
using Volo.Abp.Auditing;

namespace Volo.Abp.Identity
{
    public class IdentityUserUpdatePasswordInput
    {
        [Required]
        [DisableAuditing]
        public string NewPassword { get; set; }
    }
}
