using System;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;
using Volo.Abp.ObjectExtending;

namespace Volo.Abp.Identity.Web.Pages.Identity.ClaimTypes
{
    public class EditModalModel : IdentityPageModel
    {
        [BindProperty]
        public ClaimTypeInfoModel ClaimType { get; set; }

        protected IIdentityClaimTypeAppService IdentityClaimTypeAppService { get; }

        public EditModalModel(IIdentityClaimTypeAppService identityClaimTypeAppService)
        {
            IdentityClaimTypeAppService = identityClaimTypeAppService;
        }

        public virtual async Task OnGetAsync(Guid id)
        {
            ClaimType = ObjectMapper.Map<ClaimTypeDto, ClaimTypeInfoModel>(
                await IdentityClaimTypeAppService.GetAsync(id)
            );
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            ValidateModel();

            var input = ObjectMapper.Map<ClaimTypeInfoModel, UpdateClaimTypeDto>(ClaimType);
            await IdentityClaimTypeAppService.UpdateAsync(ClaimType.Id, input);

            return NoContent();
        }

        public class ClaimTypeInfoModel : ExtensibleObject
        {
            [HiddenInput]
            public Guid Id { get; set; }

            [Required]
            public string Name { get; set; }

            public bool Required { get; set; }

            public string Regex { get; set; }

            public string RegexDescription { get; set; }

            public string Description { get; set; }

            public IdentityClaimValueType ValueType { get; set; }
        }
    }
}