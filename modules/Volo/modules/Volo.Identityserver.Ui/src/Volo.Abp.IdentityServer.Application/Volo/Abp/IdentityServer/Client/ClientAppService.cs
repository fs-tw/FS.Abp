using IdentityServer4.Models;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Guids;
using Volo.Abp.IdentityServer.Client.Dtos;
using Volo.Abp.IdentityServer.Clients;
using Volo.Abp.ObjectExtending;

namespace Volo.Abp.IdentityServer.Client
{
    [Authorize(AbpIdentityServerPermissions.Client.Default)]
    public class ClientAppService : IdentityServerAppServiceBase, IClientAppService
    {
        protected IClientRepository ClientRepository { get; }

        public ClientAppService(IClientRepository clientRepository)
        {
            ClientRepository = clientRepository;
        }

        public virtual async Task<PagedResultDto<ClientWithDetailsDto>> GetListAsync(GetClientListInput input)
        {
            var clients = await ClientRepository.GetListAsync(input.Sorting, input.SkipCount, input.MaxResultCount, input.Filter);

            var totalCount = await ClientRepository.GetCountAsync();

            var dtos = ObjectMapper.Map<List<Clients.Client>, List<ClientWithDetailsDto>>(clients);

            return new PagedResultDto<ClientWithDetailsDto>(totalCount, dtos);
        }

        public virtual async Task<ClientWithDetailsDto> GetAsync(Guid id)
        {
            var client = await ClientRepository.GetAsync(id);
            return ObjectMapper.Map<Clients.Client, ClientWithDetailsDto>(client);
        }

        [Authorize(AbpIdentityServerPermissions.Client.Create)]
        public virtual async Task<ClientWithDetailsDto> CreateAsync(CreateClientDto input)
        {
            await CheckClientIdExistAsync(input.ClientId);

            var client = new Clients.Client(GuidGenerator.Create(), input.ClientId)
            {
                ClientName = input.ClientName,
                Description = input.Description,
                ClientUri = input.ClientUri,
                LogoUri = input.LogoUri,
                RequireConsent = input.RequireConsent
            };

            foreach (var secret in input.Secrets)
            {
                secret.Value = secret.Value.Sha256();
                client.AddSecret(secret.Value, secret.Expiration, secret.Type, secret.Description);
            }

            foreach (var scope in input.Scopes)
            {
                client.AddScope(scope);
            }

            input.MapExtraPropertiesTo(client);

            client = await ClientRepository.InsertAsync(client);

            return ObjectMapper.Map<Clients.Client, ClientWithDetailsDto>(client);
        }

        [Authorize(AbpIdentityServerPermissions.Client.Update)]
        public virtual async Task<ClientWithDetailsDto> UpdateAsync(Guid id, UpdateClientDto input)
        {
            var client = await ClientRepository.GetAsync(id);

            client.ClientName = input.ClientName;
            client.Description = input.Description;
            client.ClientUri = input.ClientUri;
            client.LogoUri = input.LogoUri;
            client.Enabled = input.Enabled;
            client.RequireConsent = input.RequireConsent;
            client.AccessTokenLifetime = input.AccessTokenLifetime;
            client.ConsentLifetime = input.ConsentLifetime;
            client.AccessTokenType = input.AccessTokenType;
            client.EnableLocalLogin = input.EnableLocalLogin;
            client.IncludeJwtId = input.IncludeJwtId;
            client.FrontChannelLogoutUri = input.FrontChannelLogoutUri;
            client.FrontChannelLogoutSessionRequired = input.FrontChannelLogoutSessionRequired;
            client.BackChannelLogoutUri = input.BackChannelLogoutUri;
            client.AllowedIdentityTokenSigningAlgorithms = input.AllowedIdentityTokenSigningAlgorithms;
            client.BackChannelLogoutSessionRequired = input.BackChannelLogoutSessionRequired;
            client.AllowOfflineAccess = input.AllowOfflineAccess;
            client.AlwaysSendClientClaims = input.AlwaysSendClientClaims;
            client.PairWiseSubjectSalt = input.PairWiseSubjectSalt;
            client.UserSsoLifetime = input.UserSsoLifetime;
            client.UserCodeType = input.UserCodeType;
            client.DeviceCodeLifetime = input.DeviceCodeLifetime;
            client.AllowRememberConsent = input.AllowRememberConsent;
            client.RequirePkce = input.RequirePkce;
            client.RequireRequestObject = input.RequireRequestObject;
            client.RequireClientSecret = input.RequireClientSecret;

            UpdateClientSecrets(input, client);
            UpdateClientClaims(input, client);
            UpdateClientProperties(input, client);
            UpdateClientRedirectUris(input, client);
            UpdateClientPostLogoutRedirectUris(input, client);
            UpdateClientCorsOrigins(input, client);
            UpdateClientGrantTypes(input, client);
            UpdateClientIdentityProviderRestrictions(input, client);
            UpdateClientScopes(input, client);

            input.MapExtraPropertiesTo(client);

            client = await ClientRepository.UpdateAsync(client);

            return ObjectMapper.Map<Clients.Client, ClientWithDetailsDto>(client);
        }

        [Authorize(AbpIdentityServerPermissions.Client.Delete)]
        public virtual async Task DeleteAsync(Guid id)
        {
            await ClientRepository.DeleteAsync(id);
        }

        protected virtual void UpdateClientSecrets(UpdateClientDto input, Clients.Client client)
        {
            foreach (var secretDto in input.ClientSecrets)
            {
                var existingSecret = client.FindSecret(secretDto.Value, secretDto.Type);
                if (existingSecret == null)
                {
                    secretDto.Value = secretDto.Value.Sha256();
                    client.AddSecret(
                        secretDto.Value,
                        secretDto.Expiration,
                        secretDto.Type,
                        secretDto.Description
                    );
                }
            }

            //Copied with ToList to avoid modification of the collection in the for loop
            foreach (var clientSecret in client.ClientSecrets.ToList())
            {
                var existingSecret = input
                    .ClientSecrets
                    .FirstOrDefault(s => clientSecret.Equals(client.Id, s.Value, s.Type));

                if (existingSecret == null)
                {
                    client.RemoveSecret(clientSecret.Value, clientSecret.Type);
                }
            }
        }

        protected virtual void UpdateClientProperties(UpdateClientDto input, Clients.Client client)
        {
            foreach (var property in input.Properties)
            {
                var existing = client.FindProperty(property.Key, property.Value);
                if (existing == null)
                {
                    client.AddProperty(
                        property.Key,
                        property.Value
                    );
                }
            }

            //Copied with ToList to avoid modification of the collection in the for loop
            foreach (var property in client.Properties.ToList())
            {
                var existing = input
                    .Properties
                    .FirstOrDefault(p => property.Equals(client.Id, p.Key, p.Value));

                if (existing == null)
                {
                    client.RemoveProperty(property.Key, property.Value);
                }
            }
        }

        protected virtual void UpdateClientClaims(UpdateClientDto input, Clients.Client client)
        {
            foreach (var claim in input.Claims)
            {
                var existing = client.FindClaim(claim.Value, claim.Type);
                if (existing == null)
                {
                    client.AddClaim(
                        claim.Value,
                        claim.Type
                    );
                }
            }

            //Copied with ToList to avoid modification of the collection in the for loop
            foreach (var claim in client.Claims.ToList())
            {
                var existing = input
                    .Claims
                    .FirstOrDefault(c => claim.Equals(client.Id, c.Value, c.Type));

                if (existing == null)
                {
                    client.RemoveClaim(claim.Value, claim.Type);
                }
            }
        }

        protected virtual void UpdateClientRedirectUris(UpdateClientDto input, Clients.Client client)
        {
            foreach (var redirectUri in input.RedirectUris)
            {
                var existing = client.FindRedirectUri(redirectUri);
                if (existing == null)
                {
                    client.AddRedirectUri(redirectUri);
                }
            }

            //Copied with ToList to avoid modification of the collection in the for loop
            foreach (var redirectUri in client.RedirectUris.ToList())
            {
                if (!input.RedirectUris.Any(uri => redirectUri.Equals(client.Id, uri)))
                {
                    client.RemoveRedirectUri(redirectUri.RedirectUri);
                }
            }
        }

        protected virtual void UpdateClientCorsOrigins(UpdateClientDto input, Clients.Client client)
        {
            foreach (var corsOrigin in input.AllowedCorsOrigins)
            {
                var existing = client.FindCorsOrigin(corsOrigin);
                if (existing == null)
                {
                    client.AddCorsOrigin(corsOrigin);
                }
            }

            //Copied with ToList to avoid modification of the collection in the for loop
            foreach (var corsOrigin in client.AllowedCorsOrigins.ToList())
            {
                if (!input.AllowedCorsOrigins.Any(uri => corsOrigin.Equals(client.Id, uri)))
                {
                    client.RemoveCorsOrigin(corsOrigin.Origin);
                }
            }
        }

        protected virtual void UpdateClientPostLogoutRedirectUris(UpdateClientDto input, Clients.Client client)
        {
            foreach (var postLogoutRedirectUri in input.PostLogoutRedirectUris)
            {
                var existing = client.FindPostLogoutRedirectUri(postLogoutRedirectUri);
                if (existing == null)
                {
                    client.AddPostLogoutRedirectUri(postLogoutRedirectUri);
                }
            }

            //Copied with ToList to avoid modification of the collection in the for loop
            foreach (var postLogoutRedirectUri in client.PostLogoutRedirectUris.ToList())
            {
                if (!input.PostLogoutRedirectUris.Any(uri => postLogoutRedirectUri.Equals(client.Id, uri)))
                {
                    client.RemovePostLogoutRedirectUri(postLogoutRedirectUri.PostLogoutRedirectUri);
                }
            }
        }

        protected virtual void UpdateClientIdentityProviderRestrictions(UpdateClientDto input, Clients.Client client)
        {
            foreach (var restriction in input.IdentityProviderRestrictions)
            {
                var existing = client.FindIdentityProviderRestriction(restriction);
                if (existing == null)
                {
                    client.AddIdentityProviderRestriction(restriction);
                }
            }

            //Copied with ToList to avoid modification of the collection in the for loop
            foreach (var idPRestriction in client.IdentityProviderRestrictions.ToList())
            {
                if (!input.IdentityProviderRestrictions.Any(p => idPRestriction.Equals(client.Id, p)))
                {
                    client.RemoveIdentityProviderRestriction(idPRestriction.Provider);
                }
            }
        }

        protected virtual void UpdateClientGrantTypes(UpdateClientDto input, Clients.Client client)
        {
            foreach (var grantType in input.AllowedGrantTypes)
            {
                var existing = client.FindGrantType(grantType);
                if (existing == null)
                {
                    client.AddGrantType(grantType);
                }
            }

            //Copied with ToList to avoid modification of the collection in the for loop
            foreach (var grantType in client.AllowedGrantTypes.ToList())
            {
                if (!input.AllowedGrantTypes.Any(g => grantType.Equals(client.Id, g)))
                {
                    client.RemoveGrantType(grantType.GrantType);
                }
            }
        }

        protected virtual void UpdateClientScopes(UpdateClientDto input, Clients.Client client)
        {
            foreach (var scope in input.Scopes)
            {
                var existing = client.FindScope(scope);
                if (existing == null)
                {
                    client.AddScope(scope);
                }
            }

            //Copied with ToList to avoid modification of the collection in the for loop
            foreach (var scope in client.AllowedScopes.ToList())
            {
                if (!input.Scopes.Any(s => scope.Equals(client.Id, s)))
                {
                    client.RemoveScope(scope.Scope);
                }
            }
        }

        protected virtual async Task CheckClientIdExistAsync(string clientId)
        {
            if (await ClientRepository.CheckClientIdExistAsync(clientId))
            {
                throw new BusinessException("Volo.IdentityServer:DuplicateClientId").WithData("ClientId", clientId);
            }
        }
    }
}
