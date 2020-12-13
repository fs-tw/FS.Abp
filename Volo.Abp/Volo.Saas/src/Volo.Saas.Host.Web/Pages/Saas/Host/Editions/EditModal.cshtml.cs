using Microsoft.AspNetCore.Mvc;
using System;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Volo.Abp.ObjectExtending;
using Volo.Saas.Host.Dtos;

namespace Volo.Saas.Host.Pages.Saas.Host.Editions
{
    public class EditModalModel : SaasHostPageModel
    {
        [BindProperty]
        public EditionInfoModel Edition { get; set; }

        protected IEditionAppService EditionAppService { get; }

        public EditModalModel(IEditionAppService editionAppService)
        {
            EditionAppService = editionAppService;
        }

        public virtual async Task OnGetAsync(Guid id)
        {
            Edition = ObjectMapper.Map<EditionDto, EditionInfoModel>(
                await EditionAppService.GetAsync(id)
            );
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            ValidateModel();

            var input = ObjectMapper.Map<EditionInfoModel, EditionUpdateDto>(Edition);
            await EditionAppService.UpdateAsync(Edition.Id, input);

            return NoContent();
        }

        public class EditionInfoModel : ExtensibleObject
        {
            [HiddenInput]
            public Guid Id { get; set; }

            [Required]
            [StringLength(EditionConsts.MaxDisplayNameLength)]
            public string DisplayName { get; set; }
        }
    }
}