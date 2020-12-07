using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Shouldly;
using Volo.Abp.IdentityServer.ApiResource;
using Volo.Abp.IdentityServer.ApiResource.Dtos;
using Volo.Abp.IdentityServer.ApiResources;
using Xunit;

namespace Volo.Abp.IdentityServer
{
    public class ApiResourceAppService_Tests : AbpIdentityServerApplicationTestBase
    {
        private readonly IApiResourceAppService _apiResourceAppService;
        private readonly IApiResourceRepository _apiResourceRepository;
        private readonly AbpIdentityServerTestData _testData;

        public ApiResourceAppService_Tests()
        {
            _apiResourceAppService = GetRequiredService<IApiResourceAppService>();
            _apiResourceRepository = GetRequiredService<IApiResourceRepository>();
            _testData = GetRequiredService<AbpIdentityServerTestData>();
        }

        [Fact]
        public async Task GetListAsync()
        {
            var listResultDto = await _apiResourceAppService.GetListAsync(new GetApiResourceListInput());

            listResultDto.Items.Count.ShouldBeGreaterThan(0);
        }

        [Fact]
        public async Task GetAsync()
        {
            var apiResource = await _apiResourceAppService.GetAsync(_testData.ApiResource1Id);

            apiResource.ShouldNotBeNull();
        }

        [Fact]
        public async Task CreateAsync()
        {
            var apiResourceDto = new CreateApiResourceDto
            {
                Name = "ARName",
                DisplayName = "ARDisplayName",
                UserClaims = new List<ApiResourceClaimDto>
                {
                    new ApiResourceClaimDto
                    {
                        Type = "Claim1"
                    },
                    new ApiResourceClaimDto
                    {
                        Type = "Claim2"
                    }
                },
            };

            var apiResource = await _apiResourceAppService.CreateAsync(apiResourceDto);

            apiResource.ShouldNotBeNull();
            apiResource.Name.ShouldBe("ARName");
            apiResource.DisplayName.ShouldBe("ARDisplayName");
            apiResource.UserClaims.Count.ShouldBe(2);
        }

        [Fact]
        public async Task UpdateAsync()
        {
            var newDisplayName = "NewApiResourceDisplayName";

            var updateDto = new UpdateApiResourceDto
            {
                DisplayName = newDisplayName,
                Scopes = new List<ApiResourceScopeDto>()
                {
                    new ApiResourceScopeDto
                    {
                        Scope = "Test-ApiScope-Name-1",
                    }
                },
                Secrets = new List<ApiResourceSecretDto>()
                {
                    new ApiResourceSecretDto
                    {
                        ApiResourceId = _testData.ApiResource1Id,
                        Value = "Value",
                        Type = "Type"
                    }
                },
                UserClaims = new List<ApiResourceClaimDto>()
                {
                    new ApiResourceClaimDto
                    {
                        Type = "Clam1"
                    },
                    new ApiResourceClaimDto
                    {
                        Type = "Clam2"
                    }
                },
                Properties = new List<ApiResourcePropertyDto>()
                {
                    new ApiResourcePropertyDto
                    {
                        Key = "Key",
                        Value = "Value"
                    }
                }
            };

            var returnDto = await _apiResourceAppService.UpdateAsync(_testData.ApiResource1Id, updateDto);

            returnDto.DisplayName.ShouldBe(newDisplayName);
            returnDto.Scopes.Count.ShouldBe(1);
            returnDto.Secrets.Count.ShouldBe(1);
            returnDto.UserClaims.Count.ShouldBe(2);
            returnDto.Properties.Count.ShouldBe(1);
        }

        [Fact]
        public async Task DeleteAsync()
        {
            await _apiResourceAppService.DeleteAsync(_testData.ApiResource1Id);

            (await _apiResourceRepository.FindAsync(_testData.ApiResource1Id)).ShouldBeNull();
        }
    }
}
