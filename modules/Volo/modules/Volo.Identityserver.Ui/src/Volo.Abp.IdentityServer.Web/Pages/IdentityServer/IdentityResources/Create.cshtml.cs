using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;
using Volo.Abp.IdentityServer.ClaimType;
using Volo.Abp.IdentityServer.IdentityResource;
using Volo.Abp.IdentityServer.IdentityResource.Dtos;
using Volo.Abp.IdentityServer.IdentityResources;
using Volo.Abp.ObjectExtending;
using Volo.Abp.Validation;

namespace Volo.Abp.IdentityServer.Web.Pages.IdentityServer.IdentityResources
{
    public class CreateModel : IdentityServerPageModel
    {
        protected IIdentityResourceAppService IdentityResourceAppService { get; }
        protected IIdentityServerClaimTypeAppService ClaimTypeAppService { get; }

        [BindProperty]
        public IdentityResourceCreateModalView IdentityResource { get; set; }

        public string[] AllClaims { get; set; }

        public CreateModel(IIdentityResourceAppService identityResourceAppService, IIdentityServerClaimTypeAppService claimTypeAppService)
        {
            IdentityResourceAppService = identityResourceAppService;
            ClaimTypeAppService = claimTypeAppService;
        }

        public virtual async Task OnGetAsync()
        {
            IdentityResource = new IdentityResourceCreateModalView();
            AllClaims = (await ClaimTypeAppService.GetListAsync()).Select(ct => ct.Name).ToArray();
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            var resource = ObjectMapper.Map<IdentityResourceCreateModalView, CreateIdentityResourceDto>(IdentityResource);

            resource.UserClaims = IdentityResource.UserClaims
                .Where(c => !string.IsNullOrWhiteSpace(c))
                .Select(c=> new IdentityResourceClaimDto{Type = c})
                .ToList();

            resource.Properties = new List<IdentityResourcePropertyDto>();

            await IdentityResourceAppService.CreateAsync(resource);

            return NoContent();
        }
    }

    public class IdentityResourceCreateModalView : ExtensibleObject
    {
        [Required]
        [DynamicStringLength(typeof(IdentityResourceConsts), nameof(IdentityResourceConsts.DescriptionMaxLength))]
        public string Name { get; set; }

        [DynamicStringLength(typeof(IdentityResourceConsts), nameof(IdentityResourceConsts.DisplayNameMaxLength))]
        public string DisplayName { get; set; }

        [DynamicStringLength(typeof(IdentityResourceConsts), nameof(IdentityResourceConsts.DescriptionMaxLength))]
        public string Description { get; set; }

        public bool Enabled { get; set; } = true;

        public bool Required { get; set; }

        public bool Emphasize { get; set; }

        public bool ShowInDiscoveryDocument { get; set; } = true;

        public string[] UserClaims { get; set; }
    }
}
