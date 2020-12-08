using System.ComponentModel.DataAnnotations;
using Volo.Abp.ObjectExtending;

namespace Volo.Saas.Host.Dtos
{
    public abstract class EditionCreateOrUpdateDtoBase : ExtensibleObject
    {
        [Required]
        [Display(Name = "EditionName")]
        public string DisplayName { get; set; }

        protected EditionCreateOrUpdateDtoBase()
            : base(false)
        {

        }
    }
}
