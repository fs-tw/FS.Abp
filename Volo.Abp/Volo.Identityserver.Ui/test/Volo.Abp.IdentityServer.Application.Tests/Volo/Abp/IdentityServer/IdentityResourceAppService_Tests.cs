using System.Collections.Generic;
using System.Threading.Tasks;
using Shouldly;
using Volo.Abp.IdentityServer.IdentityResource;
using Volo.Abp.IdentityServer.IdentityResource.Dtos;
using Volo.Abp.IdentityServer.IdentityResources;
using Xunit;

namespace Volo.Abp.IdentityServer
{
    public class IdentityResourceAppService_Tests : AbpIdentityServerApplicationTestBase
    {
        private readonly IIdentityResourceAppService _identityResourceAppService;
        private readonly IIdentityResourceRepository _identityResourceRepository;
        private readonly AbpIdentityServerTestData _testData;

        public IdentityResourceAppService_Tests()
        {
            _identityResourceAppService = GetRequiredService<IIdentityResourceAppService>();
            _identityResourceRepository = GetRequiredService<IIdentityResourceRepository>();
            _testData = GetRequiredService<AbpIdentityServerTestData>();
        }

        [Fact]
        public async Task GetListAsync()
        {
            var listResultDto = await _identityResourceAppService.GetListAsync(new GetIdentityResourceListInput());

            listResultDto.Items.Count.ShouldBeGreaterThan(0);
        }

        [Fact]
        public async Task GetAsync()
        {
            var identityResource = await _identityResourceAppService.GetAsync(_testData.IdentityResource1Id);

            identityResource.ShouldNotBeNull();
        }

        [Fact]
        public async Task CreateAsync()
        {
            var identityResourceDto = new CreateIdentityResourceDto
            {
                Name = "IRName",
                DisplayName = "IRDisplayName",
                UserClaims = new List<IdentityResourceClaimDto>
                {
                    new IdentityResourceClaimDto
                    {
                        Type ="Claim1"
                    },
                    new IdentityResourceClaimDto
                    {
                        Type = "claim2"
                    }
                },
                Properties = new List<IdentityResourcePropertyDto>
                {
                    new IdentityResourcePropertyDto
                    {
                        Key = "Key",
                        Value = "Value"
                    }
                }
            };

            var identityResource = await _identityResourceAppService.CreateAsync(identityResourceDto);

            identityResource.ShouldNotBeNull();
            identityResource.UserClaims.Count.ShouldBe(2);
            identityResource.Properties.Count.ShouldBe(1);
        }

        [Fact]
        public async Task UpdateAsync()
        {
            var name = "NewIdentityResourceName";
            var displayName = "NewIdentityResourceDisplayName";

            var updateDto = new UpdateIdentityResourceDto
            {
                Name = name,
                DisplayName = displayName,
                UserClaims = new List<IdentityResourceClaimDto>
                {
                    new IdentityResourceClaimDto
                    {
                        Type ="Claim1"
                    },
                    new IdentityResourceClaimDto
                    {
                        Type = "claim2"
                    },
                    new IdentityResourceClaimDto
                    {
                        Type = "claim3"
                    }
                },
                Properties = new List<IdentityResourcePropertyDto>
                {
                    new IdentityResourcePropertyDto
                    {
                        Key = "Key",
                        Value = "Value"
                    }
                }
            };

            var returnDto = await _identityResourceAppService.UpdateAsync(_testData.IdentityResource1Id, updateDto);

            returnDto.Name.ShouldBe(name);
            returnDto.DisplayName.ShouldBe(displayName);
            returnDto.UserClaims.Count.ShouldBe(3);
            returnDto.Properties.Count.ShouldBe(1);
        }

        [Fact]
        public async Task DeleteAsync()
        {
            await _identityResourceAppService.DeleteAsync(_testData.IdentityResource1Id);

            (await _identityResourceRepository.FindAsync(_testData.IdentityResource1Id)).ShouldBeNull();
        }

        [Fact]
        public async Task CreateStandardResourcesAsync()
        {
            await _identityResourceAppService.CreateStandardResourcesAsync();
        }
    }
}
