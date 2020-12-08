using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.ObjectExtending;

namespace Volo.Abp.Identity
{
    [Authorize(IdentityPermissions.ClaimTypes.Default)]
    public class IdentityClaimTypeAppService : ApplicationService, IIdentityClaimTypeAppService
    {
        protected IdenityClaimTypeManager IdenityClaimTypeManager { get; }
        protected IIdentityClaimTypeRepository IdentityClaimTypeRepository { get; }

        public IdentityClaimTypeAppService(IdenityClaimTypeManager idenityClaimTypeManager, IIdentityClaimTypeRepository identityClaimTypeRepository)
        {
            IdenityClaimTypeManager = idenityClaimTypeManager;
            IdentityClaimTypeRepository = identityClaimTypeRepository;
        }

        public virtual async Task<PagedResultDto<ClaimTypeDto>> GetListAsync(GetIdentityClaimTypesInput input)
        {
            var identityClaimTypes = await IdentityClaimTypeRepository.GetListAsync(input.Sorting, input.MaxResultCount, input.SkipCount, input.Filter);

            var totalCount = await IdentityClaimTypeRepository.GetCountAsync(input.Filter);

            var dtos = MapListClaimTypeToListDto(identityClaimTypes);

            return new PagedResultDto<ClaimTypeDto>(totalCount, dtos);
        }

        public virtual async Task<List<ClaimTypeDto>> GetAllListAsync()
        {
            var identityClaimTypes = await IdentityClaimTypeRepository.GetListAsync();

            return MapListClaimTypeToListDto(identityClaimTypes);
        }

        public virtual async Task<ClaimTypeDto> GetAsync(Guid id)
        {
            var claimType = await IdentityClaimTypeRepository.GetAsync(id);
            return MapClaimTypeToDto(claimType);
        }

        [Authorize(IdentityPermissions.ClaimTypes.Create)]
        public virtual async Task<ClaimTypeDto> CreateAsync(CreateClaimTypeDto input)
        {
            //TODO: We should not use automap to create an entity!
            var claimType = ObjectMapper.Map<CreateClaimTypeDto, IdentityClaimType>(input);
            input.MapExtraPropertiesTo(claimType);

            var newClaimType = await IdenityClaimTypeManager.CreateAsync(claimType);

            return MapClaimTypeToDto(newClaimType);
        }

        [Authorize(IdentityPermissions.ClaimTypes.Update)]
        public virtual async Task<ClaimTypeDto> UpdateAsync(Guid id, UpdateClaimTypeDto input)
        {
            var claimTypeToUpdate = await IdentityClaimTypeRepository.GetAsync(id);

            //TODO: We should not use automap to change an entity!
            ObjectMapper.Map<UpdateClaimTypeDto, IdentityClaimType>(input, claimTypeToUpdate);
            input.MapExtraPropertiesTo(claimTypeToUpdate);
            var updatedClaimType = await IdenityClaimTypeManager.UpdateAsync(claimTypeToUpdate);

            return MapClaimTypeToDto(updatedClaimType);
        }

        [Authorize(IdentityPermissions.ClaimTypes.Delete)]
        public virtual async Task DeleteAsync(Guid id)
        {
            await IdentityClaimTypeRepository.DeleteAsync(id);
        }

        protected virtual ClaimTypeDto MapClaimTypeToDto(IdentityClaimType claimType)
        {
            var dto = ObjectMapper.Map<IdentityClaimType, ClaimTypeDto>(claimType);
            dto.ValueTypeAsString = dto.ValueType.ToString();
            return dto;
        }

        protected virtual List<ClaimTypeDto> MapListClaimTypeToListDto(List<IdentityClaimType> claimTypes)
        {
            var dtos = ObjectMapper.Map<List<IdentityClaimType>, List<ClaimTypeDto>>(claimTypes);
            foreach (var dto in dtos)
            {
                dto.ValueTypeAsString = dto.ValueType.ToString();
            }
            return dtos;
        }
    }
}
