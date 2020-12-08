using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IdentityServer4.Models;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Application.Dtos;
using Volo.Abp.IdentityServer.ApiResource.Dtos;
using Volo.Abp.IdentityServer.ApiResources;
using Volo.Abp.ObjectExtending;

namespace Volo.Abp.IdentityServer.ApiResource
{
    [Authorize(AbpIdentityServerPermissions.ApiResource.Default)]
    public class ApiResourceAppService : IdentityServerAppServiceBase, IApiResourceAppService
    {
        protected IApiResourceRepository ApiResourceRepository { get; }

        public ApiResourceAppService(IApiResourceRepository apiResourceRepository)
        {
            ApiResourceRepository = apiResourceRepository;
        }

        public virtual async Task<PagedResultDto<ApiResourceWithDetailsDto>> GetListAsync(GetApiResourceListInput input)
        {
            var resources = await ApiResourceRepository.GetListAsync(input.Sorting, input.SkipCount, input.MaxResultCount,input.Filter);

            var totalCount = await ApiResourceRepository.GetCountAsync();

            var dtos = ObjectMapper.Map<List<ApiResources.ApiResource>, List<ApiResourceWithDetailsDto>>(resources);

            return new PagedResultDto<ApiResourceWithDetailsDto>(totalCount, dtos);
        }

        public virtual async Task<List<ApiResourceWithDetailsDto>> GetAllListAsync()
        {
            var resources = await ApiResourceRepository.GetListAsync();

            return ObjectMapper.Map<List<ApiResources.ApiResource>, List<ApiResourceWithDetailsDto>>(resources);
        }

        public virtual async Task<ApiResourceWithDetailsDto> GetAsync(Guid id)
        {
            var resource = await ApiResourceRepository.GetAsync(id);
            return ObjectMapper.Map<ApiResources.ApiResource, ApiResourceWithDetailsDto>(resource);
        }

        [Authorize(AbpIdentityServerPermissions.ApiResource.Create)]
        public virtual async Task<ApiResourceWithDetailsDto> CreateAsync(CreateApiResourceDto input)
        {
            if (await ApiResourceRepository.CheckNameExistAsync(input.Name))
            {
                throw new BusinessException("Volo.IdentityServer:DuplicateApiResourceName").WithData("Name", input.Name);
            }

            var newResource = new ApiResources.ApiResource(GuidGenerator.Create(), input.Name, input.DisplayName, input.Description)
            {
                AllowedAccessTokenSigningAlgorithms = input.AllowedAccessTokenSigningAlgorithms,
                ShowInDiscoveryDocument = input.ShowInDiscoveryDocument
            };

            foreach (var claim in input.UserClaims)
            {
                newResource.AddUserClaim(claim.Type);
            }

            input.MapExtraPropertiesTo(newResource);

            newResource = await ApiResourceRepository.InsertAsync(newResource);

            return ObjectMapper.Map<ApiResources.ApiResource, ApiResourceWithDetailsDto>(newResource);
        }

        [Authorize(AbpIdentityServerPermissions.ApiResource.Update)]
        public virtual async Task<ApiResourceWithDetailsDto> UpdateAsync(Guid id, UpdateApiResourceDto input)
        {
            var apiResource = await ApiResourceRepository.GetAsync(id);

            apiResource.DisplayName = input.DisplayName;
            apiResource.Description = input.Description;
            apiResource.AllowedAccessTokenSigningAlgorithms = input.AllowedAccessTokenSigningAlgorithms;
            apiResource.Enabled = input.Enabled;

            UpdateApiResourceScope(input, apiResource);
            UpdateApiResourceSecrets(input, apiResource);
            UpdateApiResourceClaims(input, apiResource);
            UpdateApiResourceProperties(input, apiResource);

            input.MapExtraPropertiesTo(apiResource);

            apiResource = await ApiResourceRepository.UpdateAsync(apiResource);

            return ObjectMapper.Map<ApiResources.ApiResource, ApiResourceWithDetailsDto>(apiResource);
        }

        [Authorize(AbpIdentityServerPermissions.ApiResource.Delete)]
        public virtual async Task DeleteAsync(Guid id)
        {
            await ApiResourceRepository.DeleteAsync(id);
        }

        protected virtual void UpdateApiResourceScope(UpdateApiResourceDto input, ApiResources.ApiResource apiResource)
        {
            foreach (var scope in input.Scopes)
            {
                var existing = apiResource.FindScope(scope.Scope);
                if (existing == null)
                {
                    apiResource.AddScope(scope.Scope);
                }
            }

            //TODO Handle Update state

            //Copied with ToList to avoid modification of the collection in the for loop
            foreach (var scope in apiResource.Scopes.ToList())
            {
                if (!input.Scopes.Any(c => scope.Equals(apiResource.Id, c.Scope)))
                {
                    apiResource.RemoveScope(scope.Scope);
                }
            }
        }

        protected virtual void UpdateApiResourceSecrets(UpdateApiResourceDto input, ApiResources.ApiResource apiResource)
        {
            foreach (var secretDto in input.Secrets)
            {
                var existingSecret = apiResource.FindSecret(secretDto.Value, secretDto.Type);
                if (existingSecret == null)
                {
                    secretDto.Value = secretDto.Value.Sha256();
                    apiResource.AddSecret(
                        secretDto.Value,
                        secretDto.Expiration,
                        secretDto.Type,
                        secretDto.Description
                    );
                }
            }

            //Copied with ToList to avoid modification of the collection in the for loop
            foreach (var clientSecret in apiResource.Secrets.ToList())
            {
                var existingSecret = input
                    .Secrets
                    .FirstOrDefault(s => clientSecret.Equals(apiResource.Id, s.Value, s.Type));

                if (existingSecret == null)
                {
                    apiResource.RemoveSecret(clientSecret.Value, clientSecret.Type);
                }
            }
        }

        protected virtual void UpdateApiResourceClaims(UpdateApiResourceDto input, ApiResources.ApiResource apiResource)
        {
            foreach (var claimType in input.UserClaims)
            {
                var existing = apiResource.FindClaim(claimType.Type);
                if (existing == null)
                {
                    apiResource.AddUserClaim(claimType.Type);
                }
            }

            //Copied with ToList to avoid modification of the collection in the for loop
            foreach (var claim in apiResource.UserClaims.ToList())
            {
                var existing = input
                    .UserClaims
                    .FirstOrDefault(c => claim.Equals(apiResource.Id, c.Type));

                if (existing == null)
                {
                    apiResource.RemoveClaim(claim.Type);
                }
            }
        }

        protected virtual void UpdateApiResourceProperties(UpdateApiResourceDto input, ApiResources.ApiResource apiResource)
        {
            foreach (var property in input.Properties)
            {
                var existing = apiResource.FindProperty(property.Key);
                if (existing == null)
                {
                    apiResource.AddProperty(property.Key, property.Value);
                }
            }

            //Copied with ToList to avoid modification of the collection in the for loop
            foreach (var property in apiResource.Properties.ToList())
            {
                var existing = input
                    .Properties
                    .FirstOrDefault(c => property.Equals(apiResource.Id, c.Key, c.Value));

                if (existing == null)
                {
                    apiResource.RemoveProperty(property.Key);
                }
            }
        }
    }
}
