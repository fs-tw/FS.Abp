using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;
using Volo.Abp.IdentityServer.ApiResource;
using Volo.Abp.IdentityServer.ApiResource.Dtos;
using Volo.Abp.IdentityServer.ApiResources;
using Volo.Abp.IdentityServer.ClaimType;
using Volo.Abp.ObjectExtending;
using Volo.Abp.Validation;

namespace Volo.Abp.IdentityServer.Web.Pages.IdentityServer.ApiResources
{
    public class CreateModel : IdentityServerPageModel
    {
        protected IApiResourceAppService ApiResourceAppService { get; }
        protected IIdentityServerClaimTypeAppService ClaimTypeAppService { get; }

        [BindProperty]
        public ApiResourceCreateModalView ApiResource { get; set; }

        public string[] AllClaims { get; set; }

        public CreateModel(IApiResourceAppService apiResourceAppService, IIdentityServerClaimTypeAppService claimTypeAppService)
        {
            ApiResourceAppService = apiResourceAppService;
            ClaimTypeAppService = claimTypeAppService;
        }

        public virtual async Task OnGetAsync()
        {
            ApiResource = new ApiResourceCreateModalView();
            AllClaims = (await ClaimTypeAppService.GetListAsync()).Select(ct => ct.Name).ToArray();
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            var resource = ObjectMapper.Map<ApiResourceCreateModalView, CreateApiResourceDto>(ApiResource);

            resource.UserClaims = ApiResource.UserClaims
                .Where(c => !string.IsNullOrWhiteSpace(c))
                .Select(c=> new ApiResourceClaimDto{Type = c})
                .ToList();

            await ApiResourceAppService.CreateAsync(resource);

            return NoContent();
        }
    }

    public class ApiResourceCreateModalView : ExtensibleObject
    {
        [Required]
        [DynamicStringLength(typeof(ApiResourceConsts), nameof(ApiResourceConsts.NameMaxLength))]
        public string Name { get; set; }

        [DynamicStringLength(typeof(ApiResourceConsts), nameof(ApiResourceConsts.DisplayNameMaxLength))]
        public string DisplayName { get; set; }

        [DynamicStringLength(typeof(ApiResourceConsts), nameof(ApiResourceConsts.DescriptionMaxLength))]
        public string Description { get; set; }

        [DynamicStringLength(typeof(ApiResourceConsts), nameof(ApiResourceConsts.AllowedAccessTokenSigningAlgorithmsMaxLength))]
        public string AllowedAccessTokenSigningAlgorithms { get; set; }

        public string[] UserClaims { get; set; }

        public bool ShowInDiscoveryDocument { get; set; }
    }
}
