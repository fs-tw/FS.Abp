using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Volo.Abp.AspNetCore.Mvc.UI.Bootstrap.TagHelpers.Form;
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
    public class CreateModel : IdentityServerPageModel
    {
        protected IClientAppService ClientAppService { get; }
        protected IIdentityResourceAppService IdentityResourceAppService { get; }
        protected IApiResourceAppService ApiResourceAppService { get; }
        protected IIdentityServerClaimTypeAppService ClaimTypeAppService { get; }

        [BindProperty]
        public ClientCreateModalView Client { get; set; }

        public ClientSecretModalView SampleSecret { get; set; }

        public List<SelectListItem> SecretTypes { get; set; } = new List<SelectListItem>{
            new SelectListItem() { Text = "Shared Secret", Value = "SharedSecret", Selected = true },
            new SelectListItem() { Text = "X509 Thumbprint", Value = "X509Thumbprint" } };

        public string[] AllClaims { get; set; }

        public List<IdentityResourceWithDetailsDto> AllIdentityResources { get; set; } = new List<IdentityResourceWithDetailsDto>();

        public List<ApiResourceWithDetailsDto> AllApiResources { get; set; } = new List<ApiResourceWithDetailsDto>();

        public CreateModel(IClientAppService clientAppService, IIdentityResourceAppService identityResourceAppService,
            IApiResourceAppService apiResourceAppService, IIdentityServerClaimTypeAppService claimTypeAppService)
        {
            ClientAppService = clientAppService;
            IdentityResourceAppService = identityResourceAppService;
            ApiResourceAppService = apiResourceAppService;
            ClaimTypeAppService = claimTypeAppService;
        }

        public virtual async Task OnGetAsync()
        {
            Client = new ClientCreateModalView();
            SampleSecret = new ClientSecretModalView();

            AllIdentityResources = await IdentityResourceAppService.GetAllListAsync();
            AllApiResources = await ApiResourceAppService.GetAllListAsync();

            AllClaims = (await ClaimTypeAppService.GetListAsync()).Select(ct => ct.Name).ToArray();
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            Client.TrimUrls();
            var resource = ObjectMapper.Map<ClientCreateModalView, CreateClientDto>(Client);

            resource.Secrets = Client.Secrets?.Where(c => c != null && !string.IsNullOrWhiteSpace(c.Value)).ToArray() ?? new ClientSecretDto[0];
            resource.Scopes = Client.Scopes?.Where(c => !string.IsNullOrWhiteSpace(c)).ToArray() ?? new string[0];

            await ClientAppService.CreateAsync(resource);

            return NoContent();
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

    public class ClientCreateModalView : ExtensibleObject //TODO: Move inside the CreateModel
    {
        [Required]
        public string ClientId { get; set; }

        [Required]
        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.ClientNameMaxLength))]
        public string ClientName { get; set; }

        [TextArea]
        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.DescriptionMaxLength))]
        public string Description { get; set; }

        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.ClientUriMaxLength))]
        public string ClientUri { get; set; }

        [DynamicStringLength(typeof(ClientConsts), nameof(ClientConsts.LogoUriMaxLength))]
        public string LogoUri { get; set; }

        public bool RequireConsent { get; set; }

        public string CallbackUrl { get; set; }

        public ClientSecretDto[] Secrets { get; set; }

        public string[] Scopes { get; set; } = new string[0];

        public string LogoutUrl { get; set; }

        public void TrimUrls()
        {
            ClientUri = ClientUri?.Trim();
            LogoUri = LogoUri?.Trim();
            CallbackUrl = CallbackUrl?.Trim();
            LogoutUrl = LogoutUrl?.Trim();
        }
    }
}
