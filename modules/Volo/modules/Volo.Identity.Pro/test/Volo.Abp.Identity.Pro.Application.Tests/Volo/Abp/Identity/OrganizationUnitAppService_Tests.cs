using Shouldly;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace Volo.Abp.Identity
{
    public class OrganizationUnitAppService_Tests : AbpIdentityApplicationTestBase
    {
        private readonly IOrganizationUnitAppService _organizationUnitAppService;
        private readonly IOrganizationUnitRepository _organizationUnitRepository;
        private readonly IdentityUserManager _identityUserManager;
        private readonly IdentityTestData _identityTestData;

        public OrganizationUnitAppService_Tests()
        {
            _organizationUnitAppService = GetRequiredService<IOrganizationUnitAppService>();
            _organizationUnitRepository = GetRequiredService<IOrganizationUnitRepository>();
            _identityUserManager = GetRequiredService<IdentityUserManager>();
            _identityTestData = GetRequiredService<IdentityTestData>();
        }

        [Fact]
        public async Task CreateAsnyc()
        {
            var input = new OrganizationUnitCreateDto
            {
                DisplayName = "Root 1",
                ParentId = null
            };
            var createdOuDto = await _organizationUnitAppService.CreateAsync(input);

            createdOuDto.Id.ShouldNotBe(Guid.Empty);
            createdOuDto.DisplayName.ShouldBe(input.DisplayName);

            var oU = await _organizationUnitRepository.GetAsync(createdOuDto.Id);
            oU.DisplayName.ShouldBe(input.DisplayName);
        }

        [Fact]
        public async Task UpdateAsync()
        {
            var ou11 = await GetOrganizationUnitAsync("OU11");
            var ou2 = await GetOrganizationUnitAsync("OU2");
            var input = new OrganizationUnitUpdateDto
            {
                DisplayName = "OU11 Updated to OU21"
            };
            var updatedUo = await _organizationUnitAppService.UpdateAsync(ou11.Id, input);

            updatedUo.DisplayName.ShouldContain("Updated to OU21");
        }

        [Fact]
        public async Task DeleteAsync()
        {
            var ouId = (await _organizationUnitRepository.GetAsync("OU11")).Id;
            await _organizationUnitAppService.DeleteAsync(ouId);

            (await FindOrganizationUnitAsync("OU11")).ShouldBeNull();
        }

        [Fact]
        public async Task GetAsync()
        {
            var ouId = (await _organizationUnitRepository.GetAsync("OU111")).Id;
            var ou = await _organizationUnitAppService.GetAsync(ouId);
            ou.Roles.Count.ShouldBe(2);
            ou.Roles.FirstOrDefault(q => q.Id == _identityTestData.RoleModeratorId).ShouldNotBeNull();
            ou.Roles.FirstOrDefault(q => q.Id == _identityTestData.RoleModeratorId).Name.ShouldContain("moderator");
        }

        [Fact]
        public async Task GetListAsync()
        {
            var ous = await _organizationUnitAppService.GetListAsync(new GetOrganizationUnitInput()
            {
                Sorting = "DisplayName",
                MaxResultCount = 5
            });
            ous.TotalCount.ShouldBeGreaterThan(5);
            ous.Items.Count.ShouldBe(5);
            ous.Items.First().ShouldNotBeNull();
            ous.Items.First().DisplayName.ShouldBe("OU1");
        }

        [Fact]
        public async Task AddRolesToOrganizationUnitAsync()
        {
            List<Guid> roleIds = new List<Guid> {_identityTestData.RoleModeratorId};
            var ou = await _organizationUnitRepository.GetAsync("OU1");
            await _organizationUnitAppService.AddRolesAsync(ou.Id, new OrganizationUnitRoleInput {RoleIds = roleIds});
            var result = await _organizationUnitRepository.GetAsync("OU1", includeDetails: true);
            result.Roles.First().RoleId.ShouldBe(roleIds.First());
        }

        [Fact]
        public async Task AddUsersToOrganizationUnitAsync()
        {
            List<Guid> userIds = new List<Guid> {_identityTestData.UserJohnId};
            var ou = await _organizationUnitRepository.GetAsync("OU1");
            await _organizationUnitAppService.AddMembersAsync(ou.Id, new OrganizationUnitUserInput {UserIds = userIds});
            var johnIsInRole =
                await _identityUserManager.IsInOrganizationUnitAsync(_identityTestData.UserJohnId, ou.Id);
            var davidIsInRole =
                await _identityUserManager.IsInOrganizationUnitAsync(_identityTestData.UserDavidId, ou.Id);
            johnIsInRole.ShouldBeTrue();
            davidIsInRole.ShouldBeFalse();
        }

        [Fact]
        public async Task GetOrganizationUnitRoles()
        {
            var ouId = (await _organizationUnitRepository.GetAsync("OU111")).Id;
            var result =
                await _organizationUnitAppService.GetRolesAsync(ouId,
                    new Abp.Application.Dtos.PagedAndSortedResultRequestDto());
            result.Items.Count.ShouldBeGreaterThan(0);
        }

        [Fact]
        public async Task GetOrganizationUnitMembers()
        {
            var ou = (await _organizationUnitRepository.GetAsync("OU111"));
            var result = await _organizationUnitAppService.GetMembersAsync(ou.Id, new GetIdentityUsersInput());
            result.Items.Count.ShouldBe(2);
            result.TotalCount.ShouldBe(2);
        }

        [Fact]
        public async Task GetOrganizationUnitMembers_With_Filter()
        {
            var ou = (await _organizationUnitRepository.GetAsync("OU111"));
            var result = await _organizationUnitAppService.GetMembersAsync(ou.Id, new GetIdentityUsersInput()
            {
                Filter = "john"
            });
            result.Items.Count.ShouldBe(1);
            result.TotalCount.ShouldBe(1);
        }

        [Fact]
        public async Task GetAvailableUsers()
        {
            var ou = await _organizationUnitRepository.GetAsync("OU111");
            var result = await _organizationUnitAppService.GetAvailableUsersAsync(new GetAvailableUsersInput
            {
                Id = ou.Id
            });

            result.TotalCount.ShouldBeGreaterThan(0);
            result.Items.ShouldNotContain(u => u.UserName == "john.nash");
            result.Items.ShouldContain(u => u.UserName == "administrator");
            result.Items.ShouldContain(u => u.UserName == "david");
        }

        [Fact]
        public async Task GetAvailableRoles()
        {
            var ou = await _organizationUnitRepository.GetAsync("OU111");
            var result = await _organizationUnitAppService.GetAvailableRolesAsync(new GetAvailableRolesInput
            {
                Id = ou.Id
            });

            result.TotalCount.ShouldBeGreaterThan(0);
            result.Items.ShouldNotContain(r => r.Name == "manager");
            result.Items.ShouldNotContain(r => r.Name == "moderator");
            result.Items.ShouldContain(r => r.Name == "admin");
        }

        [Fact]
        public async Task GetAvailableUsers_With_Filter()
        {
            var ou = await _organizationUnitRepository.GetAsync("OU111");
            var result = await _organizationUnitAppService.GetAvailableUsersAsync(new GetAvailableUsersInput
            {
                Id = ou.Id,
                Filter = "n"
            });

            result.TotalCount.ShouldBeGreaterThan(0);
            result.Items.ShouldNotContain(u => u.UserName == "john.nash");
            result.Items.ShouldContain(u => u.UserName == "administrator");
            result.Items.ShouldAllBe(u => u.UserName.Contains("n"));
        }

        [Fact]
        public async Task GetAvailableRoles_With_Filter()
        {
            var ou = await _organizationUnitRepository.GetAsync("OU111");
            var result = await _organizationUnitAppService.GetAvailableRolesAsync(new GetAvailableRolesInput
            {
                Id = ou.Id,
                Filter = "n"
            });

            result.TotalCount.ShouldBeGreaterThan(0);
            result.Items.ShouldNotContain(r => r.Name == "manager");
            result.Items.ShouldNotContain(r => r.Name == "moderator");
            result.Items.ShouldAllBe(r => r.Name.Contains("n"));
        }

        private async Task<OrganizationUnit> GetOrganizationUnitAsync(string displayName)
        {
            return (await _organizationUnitRepository.GetListAsync()).First(u => u.DisplayName == displayName);
        }

        private async Task<OrganizationUnit> FindOrganizationUnitAsync(string displayName)
        {
            return (await _organizationUnitRepository.GetListAsync()).FirstOrDefault(u => u.DisplayName == displayName);
        }
    }
}
