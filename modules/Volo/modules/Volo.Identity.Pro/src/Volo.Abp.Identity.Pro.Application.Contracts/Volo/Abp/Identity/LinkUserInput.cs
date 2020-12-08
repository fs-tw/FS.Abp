using System;
using System.ComponentModel.DataAnnotations;

namespace Volo.Abp.Identity
{
    public class LinkUserInput
    {
        public Guid UserId { get; set; }

        public Guid? TenantId { get; set; }

        [Required]
        public string Token { get; set; }
    }
}
