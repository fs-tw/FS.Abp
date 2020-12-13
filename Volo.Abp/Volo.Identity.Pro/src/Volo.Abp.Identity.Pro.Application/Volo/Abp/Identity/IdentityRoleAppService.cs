using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Volo.Abp.Application.Dtos;
using Volo.Abp.ObjectExtending;

namespace Volo.Abp.Identity
{
    [Authorize(IdentityPermissions.Roles.Default)]
    public class IdentityRoleAppService : IdentityAppServiceBase, IIdentityRoleAppService
    {
        protected IdentityRoleManager RoleManager { get; }
        protected IIdentityRoleRepository RoleRepository { get; }
        protected IIdentityClaimTypeRepository IdentityClaimTypeRepository { get; }

        public IdentityRoleAppService(
            IdentityRoleManager roleManager,
            IIdentityRoleRepository roleRepository,
            IIdentityClaimTypeRepository identityClaimTypeRepository)
        {
            RoleManager = roleManager;
            RoleRepository = roleRepository;
            IdentityClaimTypeRepository = identityClaimTypeRepository;
        }

        public virtual async Task<IdentityRoleDto> GetAsync(Guid id)
        {
            return ObjectMapper.Map<IdentityRole, IdentityRoleDto>(
                await RoleManager.GetByIdAsync(id)
            );
        }

        public virtual async Task<ListResultDto<IdentityRoleDto>> GetAllListAsync()
        {
            var list = await RoleRepository.GetListAsync();
            return new ListResultDto<IdentityRoleDto>(
                ObjectMapper.Map<List<IdentityRole>, List<IdentityRoleDto>>(list));
        }

        public virtual async Task<PagedResultDto<IdentityRoleDto>> GetListAsync(GetIdentityRoleListInput input)
        {
            var list = await RoleRepository.GetListAsync(input.Sorting, input.MaxResultCount, input.SkipCount, filter: input.Filter);
            var totalCount = await RoleRepository.GetCountAsync(input.Filter);

            return new PagedResultDto<IdentityRoleDto>(
                totalCount,
                ObjectMapper.Map<List<IdentityRole>, List<IdentityRoleDto>>(list)
            );
        }

        [Authorize(IdentityPermissions.Roles.Update)]
        public virtual async Task UpdateClaimsAsync(Guid id, List<IdentityRoleClaimDto> input)
        {
            var role = await RoleRepository.GetAsync(id);

            foreach (var claim in input)
            {
                var existing = role.FindClaim(new Claim(claim.ClaimType, claim.ClaimValue));
                if (existing == null)
                {
                    role.AddClaim(GuidGenerator, new Claim(claim.ClaimType, claim.ClaimValue));
                }
            }

            //Copied with ToList to avoid modification of the collection in the for loop
            foreach (var claim in role.Claims.ToList())
            {
                if (!input.Any(c => claim.ClaimType == c.ClaimType && claim.ClaimValue == c.ClaimValue))
                {
                    role.RemoveClaim(new Claim(claim.ClaimType, claim.ClaimValue));
                }
            }
        }

        [Authorize(IdentityPermissions.Roles.Default)]
        public virtual async Task<List<ClaimTypeDto>> GetAllClaimTypesAsync()
        {
            var claimTypes = await IdentityClaimTypeRepository.GetListAsync();

            var dtos = ObjectMapper.Map<List<IdentityClaimType>, List<ClaimTypeDto>>(claimTypes);
            foreach (var dto in dtos)
            {
                dto.ValueTypeAsString = dto.ValueType.ToString();
            }

            return dtos;
        }

        [Authorize(IdentityPermissions.Roles.Default)]
        public virtual async Task<List<IdentityRoleClaimDto>> GetClaimsAsync(Guid id)
        {
            var role = await RoleRepository.GetAsync(id);
            return new List<IdentityRoleClaimDto>(
                ObjectMapper.Map<List<IdentityRoleClaim>, List<IdentityRoleClaimDto>>(role.Claims.ToList())
            );
        }

        [Authorize(IdentityPermissions.Roles.Create)]
        public virtual async Task<IdentityRoleDto> CreateAsync(IdentityRoleCreateDto input)
        {
            var role = new IdentityRole(
                GuidGenerator.Create(),
                input.Name,
                CurrentTenant.Id
            )
            {
                IsDefault = input.IsDefault,
                IsPublic = input.IsPublic
            };

            input.MapExtraPropertiesTo(role);

            (await RoleManager.CreateAsync(role)).CheckErrors();
            await CurrentUnitOfWork.SaveChangesAsync();

            return ObjectMapper.Map<IdentityRole, IdentityRoleDto>(role);
        }

        [Authorize(IdentityPermissions.Roles.Update)]
        public virtual async Task<IdentityRoleDto> UpdateAsync(Guid id, IdentityRoleUpdateDto input)
        {
            var role = await RoleManager.GetByIdAsync(id);
            role.ConcurrencyStamp = input.ConcurrencyStamp;

            (await RoleManager.SetRoleNameAsync(role, input.Name)).CheckErrors();

            role.IsDefault = input.IsDefault;
            role.IsPublic = input.IsPublic;

            input.MapExtraPropertiesTo(role);

            (await RoleManager.UpdateAsync(role)).CheckErrors();
            await CurrentUnitOfWork.SaveChangesAsync();

            return ObjectMapper.Map<IdentityRole, IdentityRoleDto>(role);
        }

        [Authorize(IdentityPermissions.Roles.Delete)]
        public virtual async Task DeleteAsync(Guid id)
        {
            var role = await RoleManager.FindByIdAsync(id.ToString());
            if (role == null)
            {
                return;
            }

            (await RoleManager.DeleteAsync(role)).CheckErrors();
        }
    }
}
