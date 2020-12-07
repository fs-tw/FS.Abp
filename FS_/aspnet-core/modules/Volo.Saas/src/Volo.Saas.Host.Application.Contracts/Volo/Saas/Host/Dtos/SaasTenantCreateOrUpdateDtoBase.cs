using System;
using System.ComponentModel.DataAnnotations;
using Volo.Abp.ObjectExtending;

namespace Volo.Saas.Host.Dtos
{
    public abstract class SaasTenantCreateOrUpdateDtoBase : ExtensibleObject
    {
        [Required]
        [StringLength(TenantConsts.MaxNameLength)]
        [Display(Name = "TenantName")]
        public string Name { get; set; }

        public Guid? EditionId { get; set; }

        protected SaasTenantCreateOrUpdateDtoBase()
            : base(false)
        {

        }
    }
}
