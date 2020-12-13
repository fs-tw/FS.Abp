using System.ComponentModel.DataAnnotations;
using Volo.Abp.Auditing;
using Volo.Abp.Validation;

namespace Volo.Abp.Identity
{
    public class IdentityUserCreateDto : IdentityUserCreateOrUpdateDtoBase
    {
        [Required]
        [DynamicStringLength(typeof(IdentityUserConsts), nameof(IdentityUserConsts.MaxPasswordLength))]
        [DisableAuditing]
        public string Password { get; set; }
    }
}