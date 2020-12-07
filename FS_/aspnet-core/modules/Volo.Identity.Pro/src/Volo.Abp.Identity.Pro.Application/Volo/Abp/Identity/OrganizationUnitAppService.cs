using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.ObjectExtending;

namespace Volo.Abp.Identity
{
    [Authorize(IdentityPermissions.OrganizationUnits.Default)]
    public class OrganizationUnitAppService : IdentityAppServiceBase, IOrganizationUnitAppService
    {
        protected OrganizationUnitManager OrganizationUnitManager { get; }
        protected IdentityUserManager UserManager { get; }
        protected IOrganizationUnitRepository OrganizationUnitRepository { get; }
        protected IIdentityUserRepository IdentityUserRepository { get; }
        protected IIdentityRoleRepository IdentityRoleRepository { get; }

        public OrganizationUnitAppService(
            OrganizationUnitManager organizationUnitManager,
            IdentityUserManager userManager,
            IOrganizationUnitRepository organizationUnitRepository,
            IIdentityUserRepository identityUserRepository,
            IIdentityRoleRepository identityRoleRepository)
        {
            OrganizationUnitManager = organizationUnitManager;
            UserManager = userManager;
            OrganizationUnitRepository = organizationUnitRepository;
            IdentityUserRepository = identityUserRepository;
            IdentityRoleRepository = identityRoleRepository;
        }

        public virtual async Task<OrganizationUnitWithDetailsDto> GetAsync(Guid id)
        {
            var organizationUnit = await OrganizationUnitRepository.GetAsync(id);
            return await ConvertToOrganizationUnitWithDetailsDtoAsync(organizationUnit);
        }

        public virtual async Task<PagedResultDto<OrganizationUnitWithDetailsDto>> GetListAsync(GetOrganizationUnitInput input)
        {
            var organizationUnits = await OrganizationUnitRepository.GetListAsync(
                sorting: input.Sorting,
                maxResultCount: input.MaxResultCount,
                skipCount: input.SkipCount,
                includeDetails: true
                );

            var roleLookup = await GetRoleLookup(organizationUnits);
            var ouDtos = new List<OrganizationUnitWithDetailsDto>();
            foreach (var ou in organizationUnits)
            {
                ouDtos.Add(
                    await ConvertToOrganizationUnitWithDetailsDtoAsync(ou, roleLookup)
                    );
            }

            return new PagedResultDto<OrganizationUnitWithDetailsDto>(
                await OrganizationUnitRepository.GetCountAsync(),
                ouDtos
                );
        }

        public virtual async Task<ListResultDto<OrganizationUnitWithDetailsDto>> GetListAllAsync()
        {
            var organizationUnits = await OrganizationUnitRepository.GetListAsync(includeDetails: true);
            var roleLookup = await GetRoleLookup(organizationUnits);
            var ouDtos = new List<OrganizationUnitWithDetailsDto>();
            foreach (var ou in organizationUnits)
            {
                ouDtos.Add(
                    await ConvertToOrganizationUnitWithDetailsDtoAsync(ou, roleLookup)
                    );
            }
            return new ListResultDto<OrganizationUnitWithDetailsDto>(ouDtos);
        }

        public virtual async Task<PagedResultDto<IdentityRoleDto>> GetRolesAsync(Guid id, PagedAndSortedResultRequestDto input)
        {
            var ou = await OrganizationUnitRepository.GetAsync(id);
            var roles = await OrganizationUnitRepository.GetRolesAsync(ou, input.Sorting, input.MaxResultCount, input.SkipCount);
            var count = await OrganizationUnitRepository.GetRolesCountAsync(ou);
            return new PagedResultDto<IdentityRoleDto>
            {
                Items = ObjectMapper.Map<List<IdentityRole>, List<IdentityRoleDto>>(roles),
                TotalCount = count
            };
        }

        public virtual async Task<PagedResultDto<IdentityUserDto>> GetMembersAsync(Guid id, GetIdentityUsersInput input)
        {
            var ou = await OrganizationUnitRepository.GetAsync(id);
            var count = await OrganizationUnitRepository.GetMembersCountAsync(ou, input.Filter);
            var users = await OrganizationUnitRepository.GetMembersAsync(ou, input.Sorting, input.MaxResultCount, input.SkipCount, input.Filter);
            return new PagedResultDto<IdentityUserDto>
            {
                Items = ObjectMapper.Map<List<IdentityUser>, List<IdentityUserDto>>(users),
                TotalCount = count
            };
        }

        [Authorize(IdentityPermissions.OrganizationUnits.ManageOU)]
        public virtual async Task<OrganizationUnitWithDetailsDto> CreateAsync(OrganizationUnitCreateDto input)
        {
            var organizationUnit = new OrganizationUnit(
                GuidGenerator.Create(),
                input.DisplayName,
                input.ParentId,
                CurrentTenant.Id
                );

            input.MapExtraPropertiesTo(organizationUnit);

            await OrganizationUnitManager.CreateAsync(organizationUnit);

            return await ConvertToOrganizationUnitWithDetailsDtoAsync(organizationUnit);
        }

        [Authorize(IdentityPermissions.OrganizationUnits.ManageOU)]
        public virtual async Task DeleteAsync(Guid id)
        {
            var ou = await OrganizationUnitRepository.FindAsync(id);
            if (ou == null)
            {
                return;
            }

            await OrganizationUnitManager.DeleteAsync(id);
        }

        [Authorize(IdentityPermissions.OrganizationUnits.ManageOU)]
        public virtual async Task<OrganizationUnitWithDetailsDto> UpdateAsync(Guid id, OrganizationUnitUpdateDto input)
        {
            var organizationUnit = await OrganizationUnitRepository.GetAsync(id);
            organizationUnit.DisplayName = input.DisplayName;

            input.MapExtraPropertiesTo(organizationUnit);

            await OrganizationUnitManager.UpdateAsync(organizationUnit);
            await CurrentUnitOfWork.SaveChangesAsync();

            return await ConvertToOrganizationUnitWithDetailsDtoAsync(organizationUnit);
        }

        [Authorize(IdentityPermissions.OrganizationUnits.ManageRoles)]
        public virtual async Task AddRolesAsync(Guid id, OrganizationUnitRoleInput input)
        {
            foreach (var roleId in input.RoleIds)
            {
                await OrganizationUnitManager.AddRoleToOrganizationUnitAsync(roleId, id);
            }
        }

        [Authorize(IdentityPermissions.OrganizationUnits.ManageUsers)]
        public virtual async Task AddMembersAsync(Guid id, OrganizationUnitUserInput input)
        {
            foreach (var userId in input.UserIds)
            {
                await UserManager.AddToOrganizationUnitAsync(userId, id);
            }
        }

        [Authorize(IdentityPermissions.OrganizationUnits.ManageOU)]
        public virtual async Task MoveAsync(Guid id, OrganizationUnitMoveInput input)
        {
            await OrganizationUnitManager.MoveAsync(id, input.NewParentId);
        }

        [Authorize(IdentityPermissions.OrganizationUnits.ManageUsers)]
        public virtual async Task RemoveMemberAsync(Guid id, Guid memberId)
        {
            await UserManager.RemoveFromOrganizationUnitAsync(memberId, id);
        }

        [Authorize(IdentityPermissions.OrganizationUnits.ManageRoles)]
        public virtual async Task RemoveRoleAsync(Guid id, Guid roleId)
        {
            await OrganizationUnitManager.RemoveRoleFromOrganizationUnitAsync(roleId, id);
        }

        public virtual async Task<PagedResultDto<IdentityUserDto>> GetAvailableUsersAsync(GetAvailableUsersInput input)
        {
            var ou = await OrganizationUnitRepository.GetAsync(input.Id);
            var count = await OrganizationUnitRepository.GetUnaddedUsersCountAsync(ou, input.Filter);
            var users = await OrganizationUnitRepository.GetUnaddedUsersAsync(ou, input.Sorting, input.MaxResultCount, input.SkipCount, input.Filter);
            return new PagedResultDto<IdentityUserDto>
            {
                Items = ObjectMapper.Map<List<IdentityUser>, List<IdentityUserDto>>(users),
                TotalCount = count
            };
        }

        public virtual async Task<PagedResultDto<IdentityRoleDto>> GetAvailableRolesAsync(GetAvailableRolesInput input)
        {
            var ou = await OrganizationUnitRepository.GetAsync(input.Id);
            var count = await OrganizationUnitRepository.GetUnaddedRolesCountAsync(ou, input.Filter);
            var roles = await OrganizationUnitRepository.GetUnaddedRolesAsync(ou, input.Sorting, input.MaxResultCount, input.SkipCount, input.Filter);
            return new PagedResultDto<IdentityRoleDto>
            {
                Items = ObjectMapper.Map<List<IdentityRole>, List<IdentityRoleDto>>(roles),
                TotalCount = count
            };
        }

        private async Task<OrganizationUnitWithDetailsDto> ConvertToOrganizationUnitWithDetailsDtoAsync(OrganizationUnit organizationUnit)
        {
            return await ConvertToOrganizationUnitWithDetailsDtoAsync(
                organizationUnit,
                await GetRoleLookup(new[] { organizationUnit })
            );
        }

        private async Task<OrganizationUnitWithDetailsDto> ConvertToOrganizationUnitWithDetailsDtoAsync(
            OrganizationUnit organizationUnit,
            Dictionary<Guid, IdentityRole> roleLookup
            )
        {
            var dto = ObjectMapper.Map<OrganizationUnit, OrganizationUnitWithDetailsDto>(organizationUnit);
            dto.Roles = new List<IdentityRoleDto>();
            foreach (var ouRole in organizationUnit.Roles)
            {
                var role = roleLookup.GetOrDefault(ouRole.RoleId);
                if (role != null)
                {
                    dto.Roles.Add(ObjectMapper.Map<IdentityRole, IdentityRoleDto>(role));
                }
            }

            return await Task.FromResult(dto);
        }

        private async Task<Dictionary<Guid, IdentityRole>> GetRoleLookup(IEnumerable<OrganizationUnit> organizationUnits)
        {
            var roleIds = organizationUnits
                .SelectMany(q => q.Roles)
                .Select(t => t.RoleId)
                .Distinct()
                .ToArray();

            return (await IdentityRoleRepository.GetListAsync(roleIds))
                .ToDictionary(u => u.Id, u => u);
        }
    }
}
