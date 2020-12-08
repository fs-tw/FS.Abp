using AutoMapper;
using Volo.Abp.AutoMapper;
using Volo.Abp.Identity;
using Volo.Abp.IdentityServer.ApiResource.Dtos;
using Volo.Abp.IdentityServer.ApiResources;
using Volo.Abp.IdentityServer.ApiScope.Dtos;
using Volo.Abp.IdentityServer.ClaimType.Dtos;
using Volo.Abp.IdentityServer.Client.Dtos;
using Volo.Abp.IdentityServer.Clients;
using Volo.Abp.IdentityServer.IdentityResource.Dtos;

namespace Volo.Abp.IdentityServer
{
    public class AbpIdentityServerApplicationAutoMapperProfile : Profile
    {
        public AbpIdentityServerApplicationAutoMapperProfile()
        {
            CreateMap<ApiScopes.ApiScope, ApiScopeWithDetailsDto>().MapExtraProperties();
            CreateMap<ApiScopes.ApiScopeClaim, ApiScopeClaimDto>();
            CreateMap<ApiScopes.ApiScopeProperty, ApiScopePropertyDto>();

            CreateMap<IdentityResources.IdentityResource, IdentityResourceWithDetailsDto>().MapExtraProperties();
            CreateMap<IdentityResources.IdentityResourceClaim, IdentityResourceClaimDto>();
            CreateMap<IdentityResources.IdentityResourceProperty, IdentityResourcePropertyDto>();
            CreateMap<IdentityClaimType, IdentityClaimTypeDto>().MapExtraProperties();

            CreateMap<ApiResources.ApiResource, ApiResourceWithDetailsDto>().MapExtraProperties();
            CreateMap<ApiResourceScope, ApiResourceScopeDto>();
            CreateMap<ApiResourceSecret, ApiResourceSecretDto>();
            CreateMap<ApiResourceClaim, ApiResourceClaimDto>();
            CreateMap<ApiResourceProperty, ApiResourcePropertyDto>();

            CreateMap<Clients.Client, ClientWithDetailsDto>().MapExtraProperties();
            CreateMap<ClientSecret, ClientSecretDto>();
            CreateMap<ClientScope, ClientScopeDto>();
            CreateMap<ClientClaim, ClientClaimDto>();
            CreateMap<ClientProperty, ClientPropertyDto>();
            CreateMap<ClientRedirectUri, ClientRedirectUriDto>();
            CreateMap<ClientPostLogoutRedirectUri, ClientPostLogoutRedirectUriDto>();
            CreateMap<ClientIdPRestriction, ClientIdentityProviderRestrictionDto>();
            CreateMap<ClientGrantType, ClientGrantTypeDto>();
            CreateMap<ClientCorsOrigin, ClientCorsOriginDto>();

        }
    }
}
