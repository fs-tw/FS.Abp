using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace Volo.Abp.LeptonTheme.IdentityServer.Seed
{
    public class LeptonThemeDemoIdentityServerDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly LeptonThemeDemoSampleIdentityDataSeeder _leptonThemeDemoSampleIdentityDataSeeder;
        private readonly LeptonThemeDemoIdentityServerDataSeeder _leptonThemeDemoIdentityServerDataSeeder;

        public LeptonThemeDemoIdentityServerDataSeedContributor(
            LeptonThemeDemoIdentityServerDataSeeder leptonThemeDemoIdentityServerDataSeeder,
            LeptonThemeDemoSampleIdentityDataSeeder leptonThemeDemoSampleIdentityDataSeeder)
        {
            _leptonThemeDemoIdentityServerDataSeeder = leptonThemeDemoIdentityServerDataSeeder;
            _leptonThemeDemoSampleIdentityDataSeeder = leptonThemeDemoSampleIdentityDataSeeder;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            await _leptonThemeDemoSampleIdentityDataSeeder.SeedAsync(context);
            await _leptonThemeDemoIdentityServerDataSeeder.SeedAsync(context);
        }
    }
}
