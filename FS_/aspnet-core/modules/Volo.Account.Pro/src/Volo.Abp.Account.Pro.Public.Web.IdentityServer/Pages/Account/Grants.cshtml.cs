using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IdentityServer4.Services;
using IdentityServer4.Stores;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.Account.Public.Web.Pages.Account;

namespace Volo.Abp.Account.Web.Pages.Account
{
    public class GrantsModel : AccountPageModel
    {
        public List<GrantViewModel> Grants { get; set; }

        protected IIdentityServerInteractionService Interaction { get; }
        protected IClientStore Clients { get; }
        protected IResourceStore Resources { get; }

        public GrantsModel(IIdentityServerInteractionService interaction,
            IClientStore clients,
            IResourceStore resources)
        {
            Interaction = interaction;
            Clients = clients;
            Resources = resources;
        }

        public virtual async Task OnGetAsync()
        {
            Grants = new List<GrantViewModel>();

            foreach (var grant in await Interaction.GetAllUserGrantsAsync())
            {
                var client = await Clients.FindClientByIdAsync(grant.ClientId);
                if (client != null)
                {
                    var resources = await Resources.FindResourcesByScopeAsync(grant.Scopes);

                    var item = new GrantViewModel
                    {
                        ClientId = client.ClientId,
                        ClientName = client.ClientName ?? client.ClientId,
                        ClientLogoUrl = client.LogoUri,
                        ClientUrl = client.ClientUri,
                        Created = grant.CreationTime,
                        Expires = grant.Expiration,
                        IdentityGrantNames = resources.IdentityResources.Select(x => x.DisplayName ?? x.Name).ToArray(),
                        ApiGrantNames = resources.ApiResources.Select(x => x.DisplayName ?? x.Name).ToArray()
                    };

                    Grants.Add(item);
                }
            }
        }

        public virtual async Task<IActionResult> OnPostRevokeAsync(string clientId)
        {
            await Interaction.RevokeUserConsentAsync(clientId);
            return Redirect("~/"); //TODO: ..?
        }

        public class GrantViewModel
        {
            public string ClientId { get; set; }
            public string ClientName { get; set; }
            public string ClientUrl { get; set; }
            public string ClientLogoUrl { get; set; }
            public DateTime Created { get; set; }
            public DateTime? Expires { get; set; }
            public IEnumerable<string> IdentityGrantNames { get; set; }
            public IEnumerable<string> ApiGrantNames { get; set; }
        }
    }
}
