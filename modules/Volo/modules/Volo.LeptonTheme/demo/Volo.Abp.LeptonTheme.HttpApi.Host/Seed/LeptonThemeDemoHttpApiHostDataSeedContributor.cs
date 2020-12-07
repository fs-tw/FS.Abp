using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace Volo.Abp.LeptonTheme.HttpApi.Host.Seed
{
    public class LeptonThemeDemoHttpApiHostDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly LeptonThemeDemoSampleDataSeeder _leptonThemeDemoSampleDataSeeder;

        public LeptonThemeDemoHttpApiHostDataSeedContributor(
            LeptonThemeDemoSampleDataSeeder leptonThemeDemoSampleDataSeeder)
        {
            _leptonThemeDemoSampleDataSeeder = leptonThemeDemoSampleDataSeeder;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            await _leptonThemeDemoSampleDataSeeder.SeedAsync(context);
        }
    }
}
