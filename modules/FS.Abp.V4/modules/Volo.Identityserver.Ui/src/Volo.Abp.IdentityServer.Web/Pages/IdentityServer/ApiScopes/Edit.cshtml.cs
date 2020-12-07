using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Volo.Abp.AspNetCore.Mvc.UI.Bootstrap.TagHelpers.Form;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;
using Volo.Abp.IdentityServer.ApiResource;
using Volo.Abp.IdentityServer.ApiResource.Dtos;
using Volo.Abp.IdentityServer.ApiResources;
using Volo.Abp.IdentityServer.ApiScope;
using Volo.Abp.IdentityServer.ApiScope.Dtos;
using Volo.Abp.IdentityServer.ApiScopes;
using Volo.Abp.IdentityServer.ClaimType;
using Volo.Abp.ObjectExtending;
using Volo.Abp.Validation;

namespace Volo.Abp.IdentityServer.Web.Pages.IdentityServer.ApiScopes
{
    public class EditModel : IdentityServerPageModel
    {
        protected IApiScopeAppService ApiScopeAppService { get; }
        protected IIdentityServerClaimTypeAppService ClaimTypeAppService { get; }

        [BindProperty]
        public ApiScopeUpdateModalView ApiScope { get; set; }

        public ApiScopePropertyModalView SampleProperty { get; set; } = new ApiScopePropertyModalView();

        public string[] AllClaims { get; set; }

        public EditModel(IApiScopeAppService apiScopeAppService, IIdentityServerClaimTypeAppService claimTypeAppService)
        {
            ApiScopeAppService = apiScopeAppService;
            ClaimTypeAppService = claimTypeAppService;
        }

        public virtual async Task OnGetAsync(Guid id)
        {
            var apiScope = await ApiScopeAppService.GetAsync(id);

            ApiScope = ObjectMapper.Map<ApiScopeWithDetailsDto, ApiScopeUpdateModalView>(apiScope);

            ApiScope.UserClaims = apiScope.UserClaims.Select(c => c.Type).ToArray();
            ApiScope.Properties = ApiScope.Properties.ToArray();

            AllClaims = (await ClaimTypeAppService.GetListAsync()).Select(ct => ct.Name).ToArray();
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            var apiScope = ObjectMapper.Map<ApiScopeUpdateModalView, UpdateApiScopeDto>(ApiScope);

            apiScope.UserClaims = ApiScope.UserClaims
                .Where(c => !string.IsNullOrWhiteSpace(c))
                .Select(c=> new ApiScopeClaimDto{ApiScopeId = ApiScope.Id, Type = c})
                .ToList();

            apiScope.Properties = ApiScope
                                      .Properties?
                                      .Where(c => c != null && (!string.IsNullOrWhiteSpace(c.Key) || !string.IsNullOrWhiteSpace(c.Value)))
                                      .ToList()
                ?? new List<ApiScopePropertyDto>();

            await ApiScopeAppService.UpdateAsync(ApiScope.Id, apiScope);

            return NoContent();
        }
    }

    public class ApiScopeUpdateModalView : ExtensibleObject
    {
        [HiddenInput]
        public Guid Id { get; set; }

        [DynamicStringLength(typeof(ApiScopeConsts), nameof(ApiScopeConsts.DisplayNameMaxLength))]
        public string DisplayName { get; set; }

        [DynamicStringLength(typeof(ApiScopeConsts), nameof(ApiScopeConsts.DescriptionMaxLength))]
        public string Description { get; set; }

        public bool Required { get; set; }

        public bool Enabled { get; set; }

        public bool Emphasize { get; set; }

        public bool ShowInDiscoveryDocument { get; set; }

        public string[] UserClaims { get; set; }

        public ApiScopePropertyDto[] Properties { get; set; } = Array.Empty<ApiScopePropertyDto>();
    }

    public class ApiScopePropertyModalView
    {
        public string Key { get; set; }

        public string Value { get; set; }
    }
}
