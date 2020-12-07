using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Shouldly;
using Volo.Abp.IdentityServer.ClaimType;
using Xunit;

namespace Volo.Abp.IdentityServer
{
    public class IdentityServerClaimTypeAppService_Tests : AbpIdentityServerApplicationTestBase
    {
        private readonly IIdentityServerClaimTypeAppService _identityServerClaimTypeAppService;

        public IdentityServerClaimTypeAppService_Tests()
        {
            _identityServerClaimTypeAppService = GetRequiredService<IIdentityServerClaimTypeAppService>();
        }

        [Fact]
        public async Task GetListAsync()
        {
            var claimTypeDtos = await _identityServerClaimTypeAppService.GetListAsync();
            claimTypeDtos.ShouldNotBeNull();
            claimTypeDtos.ShouldContain(x => x.Name == "Age");

        }

    }
}
