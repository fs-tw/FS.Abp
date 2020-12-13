using System.Threading.Tasks;
using Shouldly;
using Volo.Saas.Tenants;
using Xunit;

namespace Volo.Saas
{
    public class Tenant_Tests : SaasDomainTestBase
    {
        private readonly ITenantRepository _tenantRepository;

        public Tenant_Tests()
        {
            _tenantRepository = GetRequiredService<ITenantRepository>();
        }

        [Fact]
        public async Task FindDefaultConnectionString()
        {
            var acme = await _tenantRepository.FindByNameAsync("acme");

            acme.ShouldNotBeNull();
            acme.FindDefaultConnectionString().ShouldBe("DefaultConnString-Value");
        }

        [Fact]
        public async Task FindConnectionString()
        {
            var acme = await _tenantRepository.FindByNameAsync("acme");

            acme.ShouldNotBeNull();
            acme.FindConnectionString(Abp.Data.ConnectionStrings.DefaultConnectionStringName).ShouldBe("DefaultConnString-Value");
            acme.FindConnectionString("MyConnString").ShouldBe("MyConnString-Value");
        }
    }
}
