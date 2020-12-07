using System;
using System.Linq;
using System.Threading.Tasks;
using Xunit;
using Shouldly;
using Volo.Abp.Application.Dtos;

namespace Volo.Abp.Identity
{
    public class IdentityClaimTypeAppService_Tests : AbpIdentityApplicationTestBase
    {
        private readonly IIdentityClaimTypeAppService _claimTypeAppService;
        private readonly IIdentityClaimTypeRepository _claimTypeRepository;

        public IdentityClaimTypeAppService_Tests()
        {
            _claimTypeAppService = GetRequiredService<IIdentityClaimTypeAppService>();
            _claimTypeRepository = GetRequiredService<IIdentityClaimTypeRepository>();
        }

        [Fact]
        public async Task GetListAsync()
        {
            var result = await _claimTypeAppService.GetListAsync(
                new GetIdentityClaimTypesInput() {MaxResultCount = 10, SkipCount = 0, Sorting = null});

            result.Items.Count.ShouldBeGreaterThan(0);
        }

        [Fact]
        public async Task GetListAsync_With_Filter()
        {
            //Act

            var result = await _claimTypeAppService.GetListAsync(new GetIdentityClaimTypesInput
            {
                Filter = "Age"
            });

            //Assert

            result.Items.Count.ShouldBe(1);
            result.TotalCount.ShouldBe(1);
        }

        [Fact]
        public async Task GetAsync()
        {
            var claim = (await _claimTypeRepository.GetListAsync()).FirstOrDefault();
            var claimType = _claimTypeAppService.GetAsync(claim.Id);
            claimType.ShouldNotBeNull();
        }

        [Fact]
        public async Task CreateAsync()
        {
            var claimType = new CreateClaimTypeDto(){Name = "test"};

            var newClaimType = await _claimTypeAppService.CreateAsync(claimType);

            newClaimType.ShouldNotBeNull();
        }

        [Fact]
        public async Task UpdateAsync()
        {
            var newClaimTypeName = "newClaimTypeName";
            var claimType = (await _claimTypeRepository.GetListAsync()).FirstOrDefault();

            var updatedClaimType = await _claimTypeAppService.UpdateAsync(claimType.Id, new UpdateClaimTypeDto()
            {
                Name = newClaimTypeName
            });

            updatedClaimType.Name.ShouldBe(newClaimTypeName);
        }

        [Fact]
        public async Task DeleteAsync()
        {
            var claimType = (await _claimTypeRepository.GetListAsync()).FirstOrDefault();

            await _claimTypeAppService.DeleteAsync(claimType.Id);

            (await _claimTypeRepository.GetListAsync()).Any(ct=>ct.Id == claimType.Id).ShouldBeFalse();
        }
    }
}
