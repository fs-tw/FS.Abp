using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Application.Dtos;
using Volo.Abp.IdentityServer.ApiResource.Dtos;
using Volo.Abp.IdentityServer.ApiScope.Dtos;
using Volo.Abp.IdentityServer.ApiScopes;
using Volo.Abp.ObjectExtending;

namespace Volo.Abp.IdentityServer.ApiScope
{
    [Authorize(AbpIdentityServerPermissions.ApiScope.Default)]
    public class ApiScopeAppService : IdentityServerAppServiceBase, IApiScopeAppService
    {
        protected IApiScopeRepository ApiScopeRepository { get; }

        public ApiScopeAppService(IApiScopeRepository apiScopeRepository)
        {
            ApiScopeRepository = apiScopeRepository;
        }

        public async Task<PagedResultDto<ApiScopeWithDetailsDto>> GetListAsync(GetApiScopeListInput input)
        {
            var scopes = await ApiScopeRepository.GetListAsync(input.Sorting, input.SkipCount, input.MaxResultCount,input.Filter);

            var totalCount = await ApiScopeRepository.GetCountAsync();

            var dtos = ObjectMapper.Map<List<ApiScopes.ApiScope>, List<ApiScopeWithDetailsDto>>(scopes);

            return new PagedResultDto<ApiScopeWithDetailsDto>(totalCount, dtos);
        }

        public async Task<List<ApiScopeWithDetailsDto>> GetAllListAsync()
        {
            var scopes = await ApiScopeRepository.GetListAsync();

            return ObjectMapper.Map<List<ApiScopes.ApiScope>, List<ApiScopeWithDetailsDto>>(scopes);
        }

        public async Task<ApiScopeWithDetailsDto> GetAsync(Guid id)
        {
            var scope = await ApiScopeRepository.GetAsync(id);
            return ObjectMapper.Map<ApiScopes.ApiScope, ApiScopeWithDetailsDto>(scope);
        }

        [Authorize(AbpIdentityServerPermissions.ApiScope.Create)]
        public async Task<ApiScopeWithDetailsDto> CreateAsync(CreateApiScopeDto input)
        {
            if (await ApiScopeRepository.CheckNameExistAsync(input.Name))
            {
                throw new BusinessException("Volo.IdentityServer:DuplicateApiScopeName").WithData("Name", input.Name);
            }

            var newScope = new ApiScopes.ApiScope(GuidGenerator.Create(), input.Name, input.DisplayName,
                input.Description, input.Required, input.Emphasize, input.ShowInDiscoveryDocument, input.Enabled);

            foreach (var claim in input.UserClaims)
            {
                newScope.AddUserClaim(claim.Type);
            }

            foreach (var property in input.Properties)
            {
                newScope.AddProperty(property.Key, property.Value);
            }

            input.MapExtraPropertiesTo(newScope);

            newScope = await ApiScopeRepository.InsertAsync(newScope);

            return ObjectMapper.Map<ApiScopes.ApiScope, ApiScopeWithDetailsDto>(newScope);
        }

        [Authorize(AbpIdentityServerPermissions.ApiScope.Update)]
        public async Task<ApiScopeWithDetailsDto> UpdateAsync(Guid id, UpdateApiScopeDto input)
        {
            var apiScope = await ApiScopeRepository.GetAsync(id);

            apiScope.DisplayName = input.DisplayName;
            apiScope.Description = input.Description;
            apiScope.Required = input.Required;
            apiScope.Emphasize = input.Emphasize;
            apiScope.ShowInDiscoveryDocument = input.ShowInDiscoveryDocument;
            apiScope.Enabled = input.Enabled;

            UpdateApiScopeClaims(input, apiScope);
            UpdateApiScopeProperties(input, apiScope);

            input.MapExtraPropertiesTo(apiScope);

            apiScope = await ApiScopeRepository.UpdateAsync(apiScope);

            return ObjectMapper.Map<ApiScopes.ApiScope, ApiScopeWithDetailsDto>(apiScope);
        }

        [Authorize(AbpIdentityServerPermissions.ApiScope.Delete)]
        public async Task DeleteAsync(Guid id)
        {
            await ApiScopeRepository.DeleteAsync(id);
        }

        protected virtual void UpdateApiScopeClaims(UpdateApiScopeDto input, ApiScopes.ApiScope apiScope)
        {
            foreach (var claimType in input.UserClaims)
            {
                var existing = apiScope.FindClaim(claimType.Type);
                if (existing == null)
                {
                    apiScope.AddUserClaim(claimType.Type);
                }
            }

            //Copied with ToList to avoid modification of the collection in the for loop
            foreach (var claim in apiScope.UserClaims.ToList())
            {
                var existing = input
                    .UserClaims
                    .FirstOrDefault(c => claim.Equals(apiScope.Id, c.Type));

                if (existing == null)
                {
                    apiScope.RemoveClaim(claim.Type);
                }
            }
        }

        protected virtual void UpdateApiScopeProperties(UpdateApiScopeDto input, ApiScopes.ApiScope apiScope)
        {
            foreach (var property in input.Properties)
            {
                var existing = apiScope.FindProperty(property.Key);
                if (existing == null)
                {
                    apiScope.AddProperty(property.Key, property.Value);
                }
            }

            //Copied with ToList to avoid modification of the collection in the for loop
            foreach (var property in apiScope.Properties.ToList())
            {
                var existing = input
                    .Properties
                    .FirstOrDefault(c => property.Equals(apiScope.Id, c.Key, c.Value));

                if (existing == null)
                {
                    apiScope.RemoveProperty(property.Key);
                }
            }
        }
    }
}
