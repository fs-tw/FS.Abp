using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.IdentityServer.ClaimType;
using Volo.Abp.IdentityServer.IdentityResource;
using Volo.Abp.IdentityServer.IdentityResource.Dtos;
using Volo.Abp.IdentityServer.IdentityResources;
using Volo.Abp.ObjectExtending;
using Volo.Abp.Validation;

namespace Volo.Abp.IdentityServer.Web.Pages.IdentityServer.IdentityResources
{
    public class EditModel : IdentityServerPageModel
    {
        protected IIdentityResourceAppService IdentityResourceAppService { get; }
        protected IIdentityServerClaimTypeAppService ClaimTypeAppService { get; }

        [BindProperty]
        public IdentityResourceUpdateModalView IdentityResource { get; set; }

        public IdentityResourcePropertyModalView SampleProperty { get; set; } = new IdentityResourcePropertyModalView();

        public string[] AllClaims { get; set; }

        public EditModel(IIdentityResourceAppService identityResourceAppService, IIdentityServerClaimTypeAppService claimTypeAppService)
        {
            IdentityResourceAppService = identityResourceAppService;
            ClaimTypeAppService = claimTypeAppService;
        }

        public virtual async Task OnGetAsync(Guid id)
        {
            var identityResource = await IdentityResourceAppService.GetAsync(id);

            IdentityResource = ObjectMapper.Map<IdentityResourceWithDetailsDto, IdentityResourceUpdateModalView>(identityResource);

            IdentityResource.UserClaims = identityResource.UserClaims.Select(c => c.Type).ToArray();
            IdentityResource.Properties = identityResource.Properties.ToArray();

            var claimList = await ClaimTypeAppService.GetListAsync();
            AllClaims = claimList.Select(ct => ct.Name).ToArray();
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            var resource = ObjectMapper.Map<IdentityResourceUpdateModalView, UpdateIdentityResourceDto>(IdentityResource);

            resource.UserClaims = IdentityResource.UserClaims
                .Where(c => !string.IsNullOrWhiteSpace(c))
                .Select(c=> new IdentityResourceClaimDto{Type = c})
                .ToList();


            resource.Properties = IdentityResource
                                      .Properties?
                                      .Where(c => c != null && (!string.IsNullOrWhiteSpace(c.Key) || !string.IsNullOrWhiteSpace(c.Value)))
                                      .ToList()
                                  ?? new List<IdentityResourcePropertyDto>();

            await IdentityResourceAppService.UpdateAsync(IdentityResource.Id, resource);

            return NoContent();
        }
    }

    public class IdentityResourceUpdateModalView : ExtensibleObject
    {
        [HiddenInput]
        public Guid Id { get; set; }

        [Required]
        [DynamicStringLength(typeof(IdentityResourceConsts), nameof(IdentityResourceConsts.DescriptionMaxLength))]
        public string Name { get; set; }

        [DynamicStringLength(typeof(IdentityResourceConsts), nameof(IdentityResourceConsts.DisplayNameMaxLength))]
        public string DisplayName { get; set; }

        [DynamicStringLength(typeof(IdentityResourceConsts), nameof(IdentityResourceConsts.DescriptionMaxLength))]
        public string Description { get; set; }

        public bool Enabled { get; set; }

        public bool Required { get; set; }

        public bool Emphasize { get; set; }

        public bool ShowInDiscoveryDocument { get; set; }

        public string[] UserClaims { get; set; }

        public IdentityResourcePropertyDto[] Properties { get; set; } = Array.Empty<IdentityResourcePropertyDto>();
    }

    public class IdentityResourcePropertyModalView
    {
        public string Key { get; set; }

        public string Value { get; set; }
    }
}
