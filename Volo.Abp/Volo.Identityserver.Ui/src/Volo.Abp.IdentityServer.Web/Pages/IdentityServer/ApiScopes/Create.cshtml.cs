using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;
using Volo.Abp.IdentityServer.ApiResource;
using Volo.Abp.IdentityServer.ApiResource.Dtos;
using Volo.Abp.IdentityServer.ApiResources;
using Volo.Abp.IdentityServer.ApiScope;
using Volo.Abp.IdentityServer.ApiScope.Dtos;
using Volo.Abp.IdentityServer.ApiScopes;
using Volo.Abp.IdentityServer.ClaimType;
using Volo.Abp.IdentityServer.IdentityResources;
using Volo.Abp.ObjectExtending;
using Volo.Abp.Validation;

namespace Volo.Abp.IdentityServer.Web.Pages.IdentityServer.ApiScopes
{
    public class CreateModel : IdentityServerPageModel
    {
        public IApiScopeAppService ApiScopeAppService { get; }
        public IIdentityServerClaimTypeAppService ClaimTypeAppService { get; }

        [BindProperty]
        public ApiScopeCreateModalView ApiScope { get; set; }

        public string[] AllClaims { get; set; }

        public CreateModel(IApiScopeAppService apiScopeAppService, IIdentityServerClaimTypeAppService claimTypeAppService)
        {
            ApiScopeAppService = apiScopeAppService;
            ClaimTypeAppService = claimTypeAppService;
        }

        public virtual async Task OnGetAsync()
        {
            ApiScope = new ApiScopeCreateModalView();
            AllClaims = (await ClaimTypeAppService.GetListAsync()).Select(ct => ct.Name).ToArray();
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            var apiScope = ObjectMapper.Map<ApiScopeCreateModalView, CreateApiScopeDto>(ApiScope);

            apiScope.UserClaims = ApiScope.UserClaims
                .Where(c => !string.IsNullOrWhiteSpace(c))
                .Select(c=> new ApiScopeClaimDto{Type = c})
                .ToList();

            apiScope.Properties = new List<ApiScopePropertyDto>();

            await ApiScopeAppService.CreateAsync(apiScope);

            return NoContent();
        }
    }

    public class ApiScopeCreateModalView : ExtensibleObject
    {
        [Required]
        [DynamicStringLength(typeof(ApiScopeConsts), nameof(ApiScopeConsts.NameMaxLength))]
        public string Name { get; set; }

        [DynamicStringLength(typeof(ApiScopeConsts), nameof(ApiScopeConsts.DisplayNameMaxLength))]
        public string DisplayName { get; set; }

        [DynamicStringLength(typeof(ApiScopeConsts), nameof(ApiScopeConsts.DescriptionMaxLength))]
        public string Description { get; set; }

        public bool Required { get; set; }

        public bool Enabled { get; set; }

        public bool Emphasize { get; set; }

        public bool ShowInDiscoveryDocument { get; set; }

        public string[] UserClaims { get; set; }
    }
}
