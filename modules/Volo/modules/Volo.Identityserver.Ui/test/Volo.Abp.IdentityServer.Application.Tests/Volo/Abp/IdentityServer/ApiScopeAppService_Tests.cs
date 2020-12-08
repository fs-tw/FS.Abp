using System.Collections.Generic;
using System.Threading.Tasks;
using Shouldly;
using Volo.Abp.IdentityServer.ApiScope;
using Volo.Abp.IdentityServer.ApiScope.Dtos;
using Volo.Abp.IdentityServer.ApiScopes;
using Xunit;

namespace Volo.Abp.IdentityServer
{
    public class ApiScopeAppService_Tests : AbpIdentityServerApplicationTestBase
    {
        private readonly IApiScopeRepository _apiScopeRepository;
        private readonly IApiScopeAppService _apiScopeAppService;
        private readonly AbpIdentityServerTestData _testData;

        public ApiScopeAppService_Tests()
        {
            _apiScopeRepository = GetRequiredService<IApiScopeRepository>();
            _apiScopeAppService = GetRequiredService<IApiScopeAppService>();
            _testData = GetRequiredService<AbpIdentityServerTestData>();
        }

        [Fact]
        public async Task GetListAsync()
        {
            var listResultDto = await _apiScopeAppService.GetListAsync(new GetApiScopeListInput());

            listResultDto.Items.Count.ShouldBeGreaterThan(0);
        }

        [Fact]
        public async Task GetAsync()
        {
            var apiResource = await _apiScopeAppService.GetAsync(_testData.ApiScope1Id);

            apiResource.ShouldNotBeNull();
        }

        [Fact]
        public async Task CreateAsync()
        {
            var apiScopeDto = new CreateApiScopeDto()
            {
                Name = "ASName",
                DisplayName = "ASDisplayName",
                UserClaims = new List<ApiScopeClaimDto>
                {
                    new ApiScopeClaimDto
                    {
                        Type = "Claim1"
                    },
                    new ApiScopeClaimDto
                    {
                        Type = "Claim2"
                    }
                },
                Properties = new List<ApiScopePropertyDto>
                {
                    new ApiScopePropertyDto
                    {
                        Key = "Key",
                        Value = "Value"
                    }
                }
            };

            var apiscope = await _apiScopeAppService.CreateAsync(apiScopeDto);

            apiscope.ShouldNotBeNull();
            apiscope.Name.ShouldBe("ASName");
            apiscope.DisplayName.ShouldBe("ASDisplayName");
            apiscope.UserClaims.Count.ShouldBe(2);
            apiscope.Properties.Count.ShouldBe(1);
        }

        [Fact]
        public async Task UpdateAsync()
        {
            var newDisplayName = "NewApiScopeDisplayName";

            var updateDto = new UpdateApiScopeDto()
            {
                DisplayName = newDisplayName,
                UserClaims = new List<ApiScopeClaimDto>()
                {
                    new ApiScopeClaimDto
                    {
                        Type = "Clam1"
                    },
                    new ApiScopeClaimDto
                    {
                        Type = "Clam2"
                    }
                },
                Properties = new List<ApiScopePropertyDto>()
                {
                    new ApiScopePropertyDto
                    {
                        Key = "Key",
                        Value = "Value"
                    }
                }
            };

            var returnDto = await _apiScopeAppService.UpdateAsync(_testData.ApiScope1Id, updateDto);

            returnDto.DisplayName.ShouldBe(newDisplayName);
            returnDto.UserClaims.Count.ShouldBe(2);
            returnDto.Properties.Count.ShouldBe(1);
        }

        [Fact]
        public async Task DeleteAsync()
        {
            await _apiScopeAppService.DeleteAsync(_testData.ApiScope1Id);

            (await _apiScopeRepository.FindAsync(_testData.ApiScope1Id)).ShouldBeNull();
        }
    }
}
