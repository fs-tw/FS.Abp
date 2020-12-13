using AutoMapper;
using Volo.Abp.AutoMapper;
using Volo.Abp.IdentityServer.ApiResource.Dtos;
using Volo.Abp.IdentityServer.ApiScope.Dtos;
using Volo.Abp.IdentityServer.Client.Dtos;
using Volo.Abp.IdentityServer.IdentityResource.Dtos;
using Volo.Abp.IdentityServer.Web.Pages.IdentityServer.ApiResources;
using Volo.Abp.IdentityServer.Web.Pages.IdentityServer.ApiScopes;
using Volo.Abp.IdentityServer.Web.Pages.IdentityServer.Clients;
using Volo.Abp.IdentityServer.Web.Pages.IdentityServer.IdentityResources;

namespace Volo.Abp.IdentityServer.Web
{
    public class AbpIdentityServerWebAutoMapperProfile : Profile
    {
        public AbpIdentityServerWebAutoMapperProfile()
        {
            CreateMap<IdentityResourceCreateModalView, CreateIdentityResourceDto>()
                .Ignore(x => x.UserClaims)
                .Ignore(x => x.Properties)
                .MapExtraProperties();

            CreateMap<IdentityResourceWithDetailsDto, IdentityResourceUpdateModalView>()
                .MapExtraProperties()
                .Ignore(x => x.UserClaims)
                .Ignore(x => x.Properties);


            CreateMap<IdentityResourceUpdateModalView, UpdateIdentityResourceDto>()
                .Ignore(x => x.UserClaims)
                .Ignore(x => x.Properties)
                .MapExtraProperties();

            CreateMap<ApiResourceCreateModalView, CreateApiResourceDto>()
                .Ignore(x => x.UserClaims)
                .MapExtraProperties();

            CreateMap<ApiResourceUpdateModalView, UpdateApiResourceDto>()
                .Ignore(x => x.UserClaims)
                .Ignore(x => x.Scopes)
                .Ignore(x => x.Properties)
                .MapExtraProperties();

            CreateMap<ApiResourceWithDetailsDto, ApiResourceUpdateModalView>()
                .MapExtraProperties()
                .Ignore(x => x.UserClaims)
                .Ignore(x => x.Scopes)
                .Ignore(x => x.Properties)
                .Ignore(x => x.Secrets);

            CreateMap<ApiScopeCreateModalView, CreateApiScopeDto>()
                .Ignore(x => x.UserClaims)
                .Ignore(x => x.Properties)
                .MapExtraProperties();

            CreateMap<ApiScopeWithDetailsDto, ApiScopeUpdateModalView>()
                .MapExtraProperties()
                .Ignore(x => x.UserClaims);

            CreateMap<ApiScopeUpdateModalView, UpdateApiScopeDto>()
                .Ignore(x => x.UserClaims)
                .Ignore(x => x.Properties)
                .MapExtraProperties();

            CreateMap<ClientWithDetailsDto, ClientUpdateModalView>()
                .MapExtraProperties()
                .Ignore(x => x.Claims)
                .Ignore(x => x.ClientSecrets)
                .Ignore(x => x.AllowedGrantTypes)
                .Ignore(x => x.IdentityProviderRestrictions)
                .Ignore(x => x.Properties)
                .Ignore(x => x.Scopes)
                .Ignore(x => x.PostLogoutRedirectUris)
                .Ignore(x => x.AllowedCorsOrigins)
                .Ignore(x => x.RedirectUris);

            CreateMap<ClientUpdateModalView, UpdateClientDto>()
                .MapExtraProperties()
                .Ignore(x => x.ClientSecrets);

            CreateMap<ClientCreateModalView, CreateClientDto>()
                .MapExtraProperties()
                .Ignore(x => x.Secrets)
                .Ignore(x => x.Scopes);
        }
    }
}
