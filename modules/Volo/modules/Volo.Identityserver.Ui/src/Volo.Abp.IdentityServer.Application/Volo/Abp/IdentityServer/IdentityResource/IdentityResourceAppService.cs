using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.IdentityServer.IdentityResource.Dtos;
using Volo.Abp.IdentityServer.IdentityResources;
using Volo.Abp.ObjectExtending;

namespace Volo.Abp.IdentityServer.IdentityResource
{
    [Authorize(AbpIdentityServerPermissions.IdentityResource.Default)]
    public class IdentityResourceAppService : IdentityServerAppServiceBase, IIdentityResourceAppService
    {
        protected IIdentityResourceDataSeeder IdentityResourceDataSeeder { get; }
        protected IIdentityResourceRepository IdentityResourceRepository { get; }

        public IdentityResourceAppService(
            IIdentityResourceRepository identityResourceRepository,
            IIdentityResourceDataSeeder identityResourceDataSeeder)
        {
            IdentityResourceRepository = identityResourceRepository;
            IdentityResourceDataSeeder = identityResourceDataSeeder;
        }

        public virtual async Task<PagedResultDto<IdentityResourceWithDetailsDto>> GetListAsync(GetIdentityResourceListInput input)
        {
            var identityResources = await IdentityResourceRepository.GetListAsync(
                input.Sorting, input.SkipCount, input.MaxResultCount, input.Filter);

            var totalCount = await IdentityResourceRepository.GetCountAsync();

            var dtos = ObjectMapper.Map<List<IdentityResources.IdentityResource>, List<IdentityResourceWithDetailsDto>>(identityResources);

            return new PagedResultDto<IdentityResourceWithDetailsDto>(totalCount, dtos);
        }

        public virtual async Task<List<IdentityResourceWithDetailsDto>> GetAllListAsync()
        {
            var identityResources = await IdentityResourceRepository.GetListAsync();
            return ObjectMapper.Map<List<IdentityResources.IdentityResource>, List<IdentityResourceWithDetailsDto>>(identityResources);
        }

        public virtual async Task<IdentityResourceWithDetailsDto> GetAsync(Guid id)
        {
            var identityResource = await IdentityResourceRepository.GetAsync(id);
            return ObjectMapper.Map<IdentityResources.IdentityResource, IdentityResourceWithDetailsDto>(identityResource);
        }

        [Authorize(AbpIdentityServerPermissions.IdentityResource.Create)]
        public virtual async Task<IdentityResourceWithDetailsDto> CreateAsync(CreateIdentityResourceDto input)
        {
            if (await IdentityResourceRepository.CheckNameExistAsync(input.Name))
            {
                throw new BusinessException("Volo.IdentityServer:DuplicateIdentityResourceName").WithData("Name", input.Name);
            }

            var newResource = new IdentityResources.IdentityResource(
                GuidGenerator.Create(),
                input.Name,
                input.DisplayName,
                input.Description,
                input.Enabled,
                input.Required,
                input.Emphasize,
                input.ShowInDiscoveryDocument
            );

            foreach (var claim in input.UserClaims)
            {
                newResource.AddUserClaim(claim.Type);
            }

            foreach (var property in input.Properties)
            {
                newResource.AddProperty(property.Key, property.Value);
            }

            input.MapExtraPropertiesTo(newResource);

            newResource = await IdentityResourceRepository.InsertAsync(newResource);

            return ObjectMapper.Map<IdentityResources.IdentityResource, IdentityResourceWithDetailsDto>(newResource);
        }

        [Authorize(AbpIdentityServerPermissions.IdentityResource.Update)]
        public virtual async Task<IdentityResourceWithDetailsDto> UpdateAsync(Guid id, UpdateIdentityResourceDto input)
        {
            if (await IdentityResourceRepository.CheckNameExistAsync(input.Name, id))
            {
                throw new BusinessException("Volo.IdentityServer:DuplicateIdentityResourceName").WithData("Name", input.Name);
            }

            var identityResource = await IdentityResourceRepository.GetAsync(id);

            identityResource.Name = input.Name;
            identityResource.DisplayName = input.DisplayName;
            identityResource.Description = input.Description;
            identityResource.Enabled = input.Enabled;
            identityResource.Required = input.Required;
            identityResource.Emphasize = input.Emphasize;
            identityResource.ShowInDiscoveryDocument = input.ShowInDiscoveryDocument;

            UpdateIdentityResourceClaims(input, identityResource);
            UpdateIdentityResourceProperties(input, identityResource);

            input.MapExtraPropertiesTo(identityResource);

            identityResource = await IdentityResourceRepository.UpdateAsync(identityResource);

            return ObjectMapper.Map<IdentityResources.IdentityResource, IdentityResourceWithDetailsDto>(identityResource);
        }

        [Authorize(AbpIdentityServerPermissions.IdentityResource.Default)]
        public virtual async Task DeleteAsync(Guid id)
        {
            await IdentityResourceRepository.DeleteAsync(id);
        }

        [Authorize(AbpIdentityServerPermissions.IdentityResource.Create)]
        public virtual async Task CreateStandardResourcesAsync()
        {
            await IdentityResourceDataSeeder.CreateStandardResourcesAsync();
        }

        protected virtual void UpdateIdentityResourceClaims(UpdateIdentityResourceDto input, IdentityResources.IdentityResource identityResource)
        {
            foreach (var claim in input.UserClaims)
            {
                var existing = identityResource.FindUserClaim(claim.Type);
                if (existing == null)
                {
                    identityResource.AddUserClaim(claim.Type);
                }
            }

            //Copied with ToList to avoid modification of the collection in the for loop
            foreach (var identityClaim in identityResource.UserClaims.ToList())
            {
                if (!input.UserClaims.Any(c => identityClaim.Equals(identityResource.Id, c.Type)))
                {
                    identityResource.RemoveUserClaim(identityClaim.Type);
                }
            }
        }

        protected virtual void UpdateIdentityResourceProperties(UpdateIdentityResourceDto input, IdentityResources.IdentityResource identityResource)
        {
            foreach (var property in input.Properties)
            {
                var existing = identityResource.FindProperty(property.Key);
                if (existing == null)
                {
                    identityResource.AddProperty(property.Key, property.Value);
                }
            }

            //Copied with ToList to avoid modification of the collection in the for loop
            foreach (var property in identityResource.Properties.ToList())
            {
                if (!input.Properties.Any(c => property.Equals(identityResource.Id, c.Key, c.Value)))
                {
                    identityResource.RemoveProperty(property.Key);
                }
            }
        }
    }
}
