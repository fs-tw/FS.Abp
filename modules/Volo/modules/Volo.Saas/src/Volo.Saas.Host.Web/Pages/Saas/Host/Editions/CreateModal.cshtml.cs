using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Volo.Abp.ObjectExtending;
using Volo.Saas.Host.Dtos;

namespace Volo.Saas.Host.Pages.Saas.Host.Editions
{
    public class CreateModalModel : SaasHostPageModel
    {
        [BindProperty]
        public EditionInfoModel Edition { get; set; }

        protected IEditionAppService EditionAppService { get; }

        public CreateModalModel(IEditionAppService editionAppService)
        {
            EditionAppService = editionAppService;
        }

        public virtual Task<IActionResult> OnGetAsync()
        {
            Edition = new EditionInfoModel();

            return Task.FromResult<IActionResult>(Page());
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            ValidateModel();

            var input = ObjectMapper.Map<EditionInfoModel, EditionCreateDto>(Edition);
            await EditionAppService.CreateAsync(input);

            return NoContent();
        }

        public class EditionInfoModel : ExtensibleObject
        {
            [Required]
            [StringLength(EditionConsts.MaxDisplayNameLength)]
            public string DisplayName { get; set; }
        }
    }
}
