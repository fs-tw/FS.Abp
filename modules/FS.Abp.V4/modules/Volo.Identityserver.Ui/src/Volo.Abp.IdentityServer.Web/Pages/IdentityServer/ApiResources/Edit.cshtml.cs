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
using Volo.Abp.IdentityServer.ClaimType;
using Volo.Abp.ObjectExtending;
using Volo.Abp.Validation;

namespace Volo.Abp.IdentityServer.Web.Pages.IdentityServer.ApiResources
{
    public class EditModel : IdentityServerPageModel
    {
        protected IApiResourceAppService ApiResourceAppService { get; }
        protected IIdentityServerClaimTypeAppService ClaimTypeAppService { get; }
        public IApiScopeAppService ApiScopeAppService { get; }

        [BindProperty]
        public ApiResourceUpdateModalView ApiResource { get; set; }

        public string[] AllClaims { get; set; }

        public ApiResourceSecretModalView SampleSecret { get; set; } = new ApiResourceSecretModalView();

        public ApiResourcePropertyModalView SampleProperty { get; set; } = new ApiResourcePropertyModalView();

        public List<SelectListItem> ScopeNameList { get; set; } = new List<SelectListItem>();

        public List<SelectListItem> SecretTypes { get; set; } = new List<SelectListItem>{
            new SelectListItem() { Text = "Shared Secret", Value = "SharedSecret", Selected = true },
            new SelectListItem() { Text = "X509 Thumbprint", Value = "X509Thumbprint" } };

        public EditModel(IApiResourceAppService apiResourceAppService, IIdentityServerClaimTypeAppService claimTypeAppService, IApiScopeAppService apiScopeAppService)
        {
            ApiResourceAppService = apiResourceAppService;
            ClaimTypeAppService = claimTypeAppService;
            ApiScopeAppService = apiScopeAppService;
        }

        public virtual async Task OnGetAsync(Guid id)
        {
            var apiResource = await ApiResourceAppService.GetAsync(id);

            ApiResource = ObjectMapper.Map<ApiResourceWithDetailsDto, ApiResourceUpdateModalView>(apiResource);

            ApiResource.UserClaims = apiResource.UserClaims.Select(c => c.Type).ToArray();
            ApiResource.Secrets = apiResource.Secrets.ToArray();
            ApiResource.Properties = apiResource.Properties.ToArray();

            AllClaims = (await ClaimTypeAppService.GetListAsync()).Select(ct => ct.Name).ToArray();

            ScopeNameList = (await ApiScopeAppService.GetAllListAsync())
                .Select(s=> new SelectListItem(s.DisplayName, s.Name, apiResource.Scopes.Any(apiScope=> apiScope.Scope == s.Name) ))
                .ToList();
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            var resource = ObjectMapper.Map<ApiResourceUpdateModalView, UpdateApiResourceDto>(ApiResource);

            resource.UserClaims = ApiResource.UserClaims
                .Where(c => !string.IsNullOrWhiteSpace(c))
                .Select(c=> new ApiResourceClaimDto{ApiResourceId = ApiResource.Id, Type = c})
                .ToList();

            resource.Secrets = resource.Secrets?.Where(c => c != null && !string.IsNullOrWhiteSpace(c.Value)).ToList()
                               ?? new List<ApiResourceSecretDto>();

            resource.Properties = ApiResource
                                      .Properties?
                                      .Where(c => c != null && (!string.IsNullOrWhiteSpace(c.Key) || !string.IsNullOrWhiteSpace(c.Value)))
                                      .ToList()
                                  ?? new List<ApiResourcePropertyDto>();

            resource.Scopes = ApiResource.Scopes?.Select(s=> new ApiResourceScopeDto{ApiResourceId = ApiResource.Id, Scope = s}).ToList()
                              ?? new List<ApiResourceScopeDto>();

            await ApiResourceAppService.UpdateAsync(ApiResource.Id, resource);

            return NoContent();
        }

        public class ApiResourceSecretModalView
        {
            [SelectItems(nameof(SecretTypes))]
            public string Type { get; set; }

            public string Value { get; set; }

            public string Description { get; set; }

            public DateTime? Expiration { get; set; }
        }
    }

    public class ApiResourceUpdateModalView : ExtensibleObject
    {
        [HiddenInput]
        public Guid Id { get; set; }

        [DynamicStringLength(typeof(ApiResourceConsts), nameof(ApiResourceConsts.DescriptionMaxLength))]
        [ReadOnlyInput]
        public string Name { get; set; }

        [DynamicStringLength(typeof(ApiResourceConsts), nameof(ApiResourceConsts.DisplayNameMaxLength))]
        public string DisplayName { get; set; }

        [DynamicStringLength(typeof(ApiResourceConsts), nameof(ApiResourceConsts.DescriptionMaxLength))]
        public string Description { get; set; }

        [DynamicStringLength(typeof(ApiResourceConsts), nameof(ApiResourceConsts.AllowedAccessTokenSigningAlgorithmsMaxLength))]
        public string AllowedAccessTokenSigningAlgorithms { get; set; }

        public bool Enabled { get; set; }

        public bool ShowInDiscoveryDocument { get; set; }

        public ApiResourceSecretDto[] Secrets { get; set; }

        public string[] UserClaims { get; set; }

        public List<string> Scopes { get; set; }

        public ApiResourcePropertyDto[] Properties { get; set; } = Array.Empty<ApiResourcePropertyDto>();
    }


    public class ApiResourcePropertyModalView
    {
        public string Key { get; set; }

        public string Value { get; set; }
    }
}
