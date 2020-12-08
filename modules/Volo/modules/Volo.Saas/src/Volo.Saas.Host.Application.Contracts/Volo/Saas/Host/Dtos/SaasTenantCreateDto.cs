using System.ComponentModel.DataAnnotations;
using Volo.Abp.Auditing;

namespace Volo.Saas.Host.Dtos
{
    public class SaasTenantCreateDto : SaasTenantCreateOrUpdateDtoBase
    {
        [Required]
        [EmailAddress]
        [StringLength(256)]
        public string AdminEmailAddress { get; set; }

        [Required]
        [StringLength(128)]
        [DisableAuditing]
        public string AdminPassword { get; set; }
    }
}
