using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.ObjectExtending;

namespace Volo.Abp.Identity.Web.Pages.Identity.ClaimTypes
{
    public class CreateModalModel : IdentityPageModel
    {
        [BindProperty]
        public ClaimTypeInfoModel ClaimType { get; set; }

        protected IIdentityClaimTypeAppService IdentityClaimTypeAppService { get; }

        public CreateModalModel(IIdentityClaimTypeAppService identityClaimTypeAppService)
        {
            IdentityClaimTypeAppService = identityClaimTypeAppService;
        }

        public virtual Task<IActionResult> OnGetAsync()
        {
            ClaimType = new ClaimTypeInfoModel();
            return Task.FromResult<IActionResult>(Page());
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            ValidateModel();

            var input = ObjectMapper.Map<ClaimTypeInfoModel, CreateClaimTypeDto>(ClaimType);
            await IdentityClaimTypeAppService.CreateAsync(input);

            return NoContent();
        }

        public class ClaimTypeInfoModel : ExtensibleObject
        {
            [Required]
            public string Name { get; set; }

            public string Description { get; set; }

            public string Regex { get; set; }

            public string RegexDescription { get; set; }

            public bool Required { get; set; }

            public IdentityClaimValueType ValueType { get; set; }
        }
    }
}