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
using Volo.Abp.IdentityServer.ClaimType;
using Volo.Abp.IdentityServer.Client;
using Volo.Abp.IdentityServer.Client.Dtos;
using Volo.Abp.IdentityServer.Clients;
using Volo.Abp.IdentityServer.IdentityResource;
using Volo.Abp.IdentityServer.IdentityResource.Dtos;
using Volo.Abp.ObjectExtending;
using Volo.Abp.Validation;

namespace Volo.Abp.IdentityServer.Web.Pages.IdentityServer.Clients
{
    public class EditModel : IdentityServerPageModel
    {
        protected IClientAppService ClientAppService { get; }
        protected IApiResourceAppService ApiResourceAppService { get; }
        protected IIdentityResourceAppService IdentityResourceAppService { get; }
        protected IIdentityServerClaimTypeAppService ClaimTypeAppService { get; }

        [BindProperty]
        public ClientUpdateModalView Client { get; set; }

        public string[] AllClaims { get; set; }

        public ClientClaimModalView SampleClaim { get; set; } = new ClientClaimModalView();

        public ClientPropertyModalView SampleProperty { get; set; } = new ClientPropertyModalView();

        public List<ApiResourceWithDetailsDto> AllApiResources { get; set; } = new List<ApiResourceWithDetailsDto>();

        public List<string> AppUrisMerged { get; set; } = new List<string>();

        public List<IdentityResourceWithDetailsDto> AllIdentityResources { get; set; } = new List<IdentityResourceWithDetailsDto>();

        public ClientSecretModalView SampleSecret { get; set; } = new ClientSecretModalView();

        public List<SelectListItem> SecretTypes { get; set; } = new List<SelectListItem>{
            new SelectListItem() { Text = "Shared Secret", Value = "SharedSecret", Selected = true },
            new SelectListItem() { Text = "X509 Thumbprint", Value = "X509Thumbprint" } };

        public string SampleIdentityProviderRestriction { get; set; }

        public string SampleApplicationUrl { get; set; }

        public string SampleCallbackUri { get; set; }

        public string SampleSignoutUri { get; set; }

        public string SampleCorsUri { get; set; }

        public EditModel(IClientAppService clientAppService, IApiResourceAppService apiResourceAppService,
            IIdentityResourceAppService identityResourceAppService, IIdentityServerClaimTypeAppService claimTypeAppService)
        {
            ClientAppService = clientAppService;
            ApiResourceAppService = apiResourceAppService;
            IdentityResourceAppService = identityResourceAppService;
            ClaimTypeAppService = claimTypeAppService;
        }

        public virtual async Task OnGetAsync(Guid id)
        {
            var client = await ClientAppService.GetAsync(id);

            Client = ObjectMapper.Map<ClientWithDetailsDto, ClientUpdateModalView>(client);
            Client.ClientSecrets = client.ClientSecrets.ToArray();
            Client.Properties = client.Properties.ToArray();
            Client.Claims = client.Claims.ToArray();
            Client.AllowedGrantTypes = client.AllowedGrantTypes.Select(g => g.GrantType).ToArray();
            Client.IdentityProviderRestrictions = client.IdentityProviderRestrictions.Select(g => g.Provider).ToArray();
            Client.Scopes = client.AllowedScopes.Select(s => s.Scope).ToArray();
            Client.AllowedCorsOrigins = client.AllowedCorsOrigins.Select(s => s.Origin).ToArray();
            Client.RedirectUris = client.RedirectUris.Select(s => s.RedirectUri).ToArray();
            Client.PostLogoutRedirectUris = client.PostLogoutRedirectUris.Select(s => s.PostLogoutRedirectUri).ToArray();
            Client.TrimUrls();

            foreach (var uri in Client.AllowedCorsOrigins)
            {
                if (!AppUrisMerged.Contains(uri))
                {
                    AppUrisMerged.Add(uri);
                }
            }

            foreach (var uri in Client.RedirectUris)
            {
                if (!AppUrisMerged.Contains(uri))
                {
                    AppUrisMerged.Add(uri);
                }
            }

            foreach (var uri in Client.PostLogoutRedirectUris)
            {
                if (!AppUrisMerged.Contains(uri))
                {
                    AppUrisMerged.Add(uri);
                }
            }


            AllIdentityResources = await IdentityResourceAppService.GetAllListAsync();
            AllApiResources = await ApiResourceAppService.GetAllListAsync();

            AllClaims = (await ClaimTypeAppService.GetListAsync()).Select(ct => ct.Name).ToArray();
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            Client.TrimUrls();
            var clientDto = ObjectMapper.Map<ClientUpdateModalView, UpdateClientDto>(Client);

            clientDto.Claims = Client.Claims?.Where(c => c != null && !string.IsNullOrWhiteSpace(c.Value)).ToArray() ?? new ClientClaimDto[0];
            clientDto.ClientSecrets = Client.ClientSecrets?.Where(c => c != null && !string.IsNullOrWhiteSpace(c.Value)).ToArray() ?? new ClientSecretDto[0];
            clientDto.Properties = Client.Properties?.Where(c => c != null && !string.IsNullOrWhiteSpace(c.Value)).ToArray() ?? new ClientPropertyDto[0];
            clientDto.AllowedGrantTypes = Client.AllowedGrantTypes?.Where(s => !string.IsNullOrWhiteSpace(s)).ToArray() ?? new string[0];
            clientDto.IdentityProviderRestrictions = Client.IdentityProviderRestrictions?.Where(s => !string.IsNullOrWhiteSpace(s)).ToArray() ?? new string[0];
            clientDto.Scopes = Client.Scopes?.Where(c => !string.IsNullOrWhiteSpace(c)).ToArray() ?? new string[0];
            clientDto.AllowedCorsOrigins = Client.AllowedCorsOrigins?.Where(c => !string.IsNullOrWhiteSpace(c)).ToArray() ?? new string[0];
            clientDto.RedirectUris = Client.RedirectUris?.Where(c => !string.IsNullOrWhiteSpace(c)).ToArray() ?? new string[0];
            clientDto.PostLogoutRedirectUris = Client.PostLogoutRedirectUris?.Where(c => !string.IsNullOrWhiteSpace(c)).ToArray() ?? new string[0];

            await ClientAppService.UpdateAsync(Client.Id, clientDto);

            return NoContent();
        }

        public class ClientClaimModalView
        {
            [HiddenInput]
            public Guid Id { get; set; }

            [HiddenInput]
            public Guid ClientId { get; set; }

            public string Type { get; set; }

            public string Value { get; set; }
        }

        public class ClientPropertyModalView
        {
            public string Key { get; set; }

            public string Value { get; set; }
        }

        public class ClientSecretModalView
        {
            [SelectItems(nameof(SecretTypes))]
            public string Type { get; set; }

            public string Value { get; set; }

            public string Description { get; set; }

            public DateTime? Expiration { get; set; }
        }
    }

    public class ClientUpdateModalView : ExtensibleObject
    {
        [HiddenInput]
        public Guid Id { get; set; }

        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.ClientNameMaxLength))]
        public string ClientName { get; set; }

        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.ClientUriMaxLength))]
        public string ClientUri { get; set; }

        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.LogoUriMaxLength))]
        public string LogoUri { get; set; }

        public bool RequireConsent { get; set; }

        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.PairWiseSubjectSaltMaxLength))]
        public string PairWiseSubjectSalt { get; set; }

        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.AllowedIdentityTokenSigningAlgorithms))]
        public string AllowedIdentityTokenSigningAlgorithms { get; set; }

        public bool EnableLocalLogin { get; set; }

        public bool AllowOfflineAccess { get; set; }

        public bool AllowRememberConsent { get; set; }

        public bool AlwaysSendClientClaims { get; set; }

        public bool Enabled { get; set; }

        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.FrontChannelLogoutUriMaxLength))]
        public string FrontChannelLogoutUri { get; set; }

        public bool FrontChannelLogoutSessionRequired { get; set; }

        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.BackChannelLogoutUriMaxLength))]
        public string BackChannelLogoutUri { get; set; }

        public bool BackChannelLogoutSessionRequired { get; set; }

        public bool IncludeJwtId { get; set; }

        public bool RequirePkce { get; set; }

        public bool RequireRequestObject { get; set; }

        public bool RequireClientSecret { get; set; }

        public int AccessTokenLifetime { get; set; }

        public int AccessTokenType { get; set; }

        public int ConsentLifetime { get; set; }

        [TextArea]
        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.DescriptionMaxLength))]
        public string Description { get; set; }

        public int? UserSsoLifetime { get; set; }

        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.UserCodeTypeMaxLength))]
        public string UserCodeType { get; set; }

        public int DeviceCodeLifetime { get; set; }

        public ClientClaimDto[] Claims { get; set; }

        public ClientSecretDto[] ClientSecrets { get; set; }

        public ClientPropertyDto[] Properties { get; set; } = new ClientPropertyDto[0];

        public string[] AllowedGrantTypes { get; set; } = new string[0];

        public string[] IdentityProviderRestrictions { get; set; } = new string[0];

        public string[] Scopes { get; set; } = new string[0];

        public string[] AllowedCorsOrigins { get; set; } = new string[0];

        public string[] RedirectUris { get; set; } = new string[0];

        public string[] PostLogoutRedirectUris { get; set; } = new string[0];

        public void TrimUrls()
        {
            LogoUri = LogoUri?.Trim();
            ClientUri = ClientUri?.Trim();

            if (RedirectUris != null)
            {
                for (var i = 0; i < RedirectUris.Length; i++)
                {
                    if (RedirectUris[i] != null)
                    {
                        RedirectUris[i] = RedirectUris[i]?.Trim();
                    }
                }
            }
        }
    }
}
