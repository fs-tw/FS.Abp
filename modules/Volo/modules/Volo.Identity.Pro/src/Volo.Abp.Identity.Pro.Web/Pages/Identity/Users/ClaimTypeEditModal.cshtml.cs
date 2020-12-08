using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.Bootstrap.TagHelpers.Form;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace Volo.Abp.Identity.Web.Pages.Identity.Users
{
    public class ClaimTypeEditModalModel : IdentityPageModel
    {
        [BindProperty]
        public Guid UserId { get; set; }

        public IdentityUserDto User { get; set; }

        [BindProperty]
        public ClaimsViewModel[] Claims { get; set; }

        protected IIdentityUserAppService IdentityUserAppService { get; }
        protected IIdentityClaimTypeAppService IdentityClaimTypeAppService { get; }

        public ClaimTypeEditModalModel(IIdentityUserAppService identityUserAppService,
            IIdentityClaimTypeAppService identityClaimTypeAppService)
        {
            IdentityUserAppService = identityUserAppService;
            IdentityClaimTypeAppService = identityClaimTypeAppService;
        }

        public virtual async Task OnGetAsync(Guid id)
        {
            UserId = id;
            User = await IdentityUserAppService.GetAsync(UserId);

            Claims = ObjectMapper.Map<List<ClaimTypeDto>, ClaimsViewModel[]>(await IdentityUserAppService.GetAllClaimTypesAsync());
            var ownedClaims = await IdentityUserAppService.GetClaimsAsync(UserId);


            foreach (var claim in Claims)
            {
                var ownedClaimsFiltered = ownedClaims.Where(c => c.ClaimType == claim.Name).ToList();

                if (!ownedClaimsFiltered.Any())
                {
                    claim.Value.Add("");
                    continue;
                }

                foreach (var ownedClaim in ownedClaimsFiltered)
                {
                    if (ownedClaim != null)
                    {
                        claim.Value.Add(ownedClaim.ClaimValue);
                    }
                }
            }
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            var ownedClaims = new List<IdentityUserClaimDto>();

            foreach (var claim in Claims)
            {
                foreach (var value in claim.Value)
                {
                    if (!value.IsNullOrWhiteSpace())
                    {
                        ownedClaims.Add(
                            new IdentityUserClaimDto()
                            {
                                UserId = UserId,
                                ClaimType = claim.Name,
                                ClaimValue = value
                            });
                    }
                }
            }

            await IdentityUserAppService.UpdateClaimsAsync(UserId, ownedClaims);

            return NoContent();
        }

        public class ClaimsViewModel
        {
            [Required]
            public string Name { get; set; }

            public bool Required { get; set; }

            public string Regex { get; set; }

            public string RegexDescription { get; set; }

            public IdentityClaimValueType ValueType { get; set; }

            public List<string> Value { get; set; } = new List<string>();
        }
    }
}
