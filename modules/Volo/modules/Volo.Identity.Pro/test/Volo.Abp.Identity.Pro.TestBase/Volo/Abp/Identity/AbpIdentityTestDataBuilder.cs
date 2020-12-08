using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Guids;
using Volo.Abp.SecurityLog;

namespace Volo.Abp.Identity
{
    public class AbpIdentityTestDataBuilder : ITransientDependency
    {
        private readonly IGuidGenerator _guidGenerator;
        private readonly IIdentityUserRepository _userRepository;
        private readonly IOrganizationUnitRepository _organizationUnitRepository;
        private readonly IIdentityClaimTypeRepository _identityClaimTypeRepository;
        private readonly IIdentityRoleRepository _roleRepository;
        private readonly ILookupNormalizer _lookupNormalizer;
        private readonly IdentityTestData _testData;
        private readonly OrganizationUnitManager _organizationUnitManager;
        private readonly IIdentitySecurityLogRepository _identitySecurityLogRepository;

        private IdentityRole _adminRole;
        private IdentityRole _moderator;
        private IdentityRole _supporterRole;
        private IdentityRole _managerRole;
        private OrganizationUnit _ou111;
        private OrganizationUnit _ou112;

        public AbpIdentityTestDataBuilder(
            IGuidGenerator guidGenerator,
            IIdentityUserRepository userRepository,
            IOrganizationUnitRepository organizationUnitRepository,
            IIdentityClaimTypeRepository identityClaimTypeRepository,
            IIdentityRoleRepository roleRepository,
            ILookupNormalizer lookupNormalizer,
            IdentityTestData testData,
            OrganizationUnitManager organizationUnitManager, IIdentitySecurityLogRepository identitySecurityLogRepository)
        {
            _guidGenerator = guidGenerator;
            _userRepository = userRepository;
            _organizationUnitRepository = organizationUnitRepository;
            _identityClaimTypeRepository = identityClaimTypeRepository;
            _roleRepository = roleRepository;
            _lookupNormalizer = lookupNormalizer;
            _testData = testData;
            _organizationUnitManager = organizationUnitManager;
            _identitySecurityLogRepository = identitySecurityLogRepository;
        }

        public async Task Build()
        {
            await AddRoles();
            await AddOrganizationUnits();
            await AddUsers();
            await AddClaimTypes();
            await AddSecurityLogs();
        }
        /* Creates OU tree as shown below:
         *
         * - OU1
         *   - OU11
         *     - OU111
         *     - OU112
         *   - OU12
         * - OU2
         *   - OU21
         */
        private async Task AddOrganizationUnits()
        {
            var ou1 = await CreateOU("OU1");
            var ou11 = await CreateOU("OU11", ou1.Id);
            _ou112 = await CreateOU("OU112", ou11.Id);
            var ou12 = await CreateOU("OU12", ou1.Id);
            var ou2 = await CreateOU("OU2");
            var ou21 = await CreateOU("OU21", ou2.Id);

            _ou111 = new OrganizationUnit(_guidGenerator.Create(), "OU111", ou11.Id);
            _ou111.AddRole(_moderator.Id);
            _ou111.AddRole(_managerRole.Id);
            await _organizationUnitManager.CreateAsync(_ou111);
        }

        private async Task AddRoles()
        {
            _adminRole = await _roleRepository.FindByNormalizedNameAsync(_lookupNormalizer.NormalizeName("admin"));

            _moderator = new IdentityRole(_testData.RoleModeratorId, "moderator");
            _moderator.AddClaim(_guidGenerator, new Claim("test-claim", "test-value"));
            await _roleRepository.InsertAsync(_moderator);

            _supporterRole = new IdentityRole(_guidGenerator.Create(), "supporter");
            await _roleRepository.InsertAsync(_supporterRole);

            _managerRole = new IdentityRole(_guidGenerator.Create(), "manager");
            await _roleRepository.InsertAsync(_managerRole);
        }

        private async Task AddUsers()
        {
            var adminUser = new IdentityUser(_guidGenerator.Create(), "administrator", "admin@abp.io");
            adminUser.AddRole(_adminRole.Id);
            adminUser.AddClaim(_guidGenerator, new Claim("TestClaimType", "42"));
            await _userRepository.InsertAsync(adminUser);

            var john = new IdentityUser(_testData.UserJohnId, "john.nash", "john.nash@abp.io");
            john.AddRole(_moderator.Id);
            john.AddRole(_supporterRole.Id);
            john.AddOrganizationUnit(_ou111.Id);
            john.AddOrganizationUnit(_ou112.Id);
            john.AddLogin(new UserLoginInfo("github", "john", "John Nash"));
            john.AddLogin(new UserLoginInfo("twitter", "johnx", "John Nash"));
            john.AddClaim(_guidGenerator, new Claim("TestClaimType", "42"));
            john.SetToken("test-provider", "test-name", "test-value");
            await _userRepository.InsertAsync(john);

            var david = new IdentityUser(_testData.UserDavidId, "david", "david@abp.io");
            await _userRepository.InsertAsync(david);

            var neo = new IdentityUser(_testData.UserNeoId, "neo", "neo@abp.io");
            neo.AddRole(_supporterRole.Id);
            neo.AddClaim(_guidGenerator, new Claim("TestClaimType", "43"));
            neo.AddOrganizationUnit(_ou111.Id);
            await _userRepository.InsertAsync(neo);
        }

        private async Task AddClaimTypes()
        {
            var ageClaim = new IdentityClaimType(_testData.AgeClaimId, "Age", false, false, null, null, null, IdentityClaimValueType.Int);
            await _identityClaimTypeRepository.InsertAsync(ageClaim);
            var educationClaim = new IdentityClaimType(_testData.EducationClaimId, "Education", true, false, null, null, null);
            await _identityClaimTypeRepository.InsertAsync(educationClaim);
        }

        private async Task<OrganizationUnit> CreateOU(string displayName, Guid? parentId = null)
        {
            await _organizationUnitManager.CreateAsync(new OrganizationUnit(_guidGenerator.Create(), displayName, parentId));
            var ou = await _organizationUnitRepository.GetAsync(displayName);
            return ou;
        }

        private async Task AddSecurityLogs()
        {
           var johnLog = await _identitySecurityLogRepository.InsertAsync(new IdentitySecurityLog(_guidGenerator, new SecurityLogInfo
            {
                ApplicationName = "Test-ApplicationName",
                Identity = "Test-Identity",
                Action = "Test-Action",
                UserId = _testData.UserJohnId,
                UserName = "john.nash",

                CreationTime = new DateTime(2020, 01, 01, 10, 0, 0)
            }));
           _testData.UserJohnSecurityLogId = johnLog.Id;

           var davidLog = await _identitySecurityLogRepository.InsertAsync(new IdentitySecurityLog(_guidGenerator, new SecurityLogInfo
            {
                ApplicationName = "Test-ApplicationName",
                Identity = "Test-Identity",
                Action = "Test-Action",
                UserId = _testData.UserDavidId,
                UserName = "david",

                CreationTime = new DateTime(2020, 01, 02, 10, 0, 0)
            }));
           _testData.UserDavidSecurityLogId  = davidLog.Id;
        }
    }
}
