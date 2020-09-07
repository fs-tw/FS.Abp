using System.Threading.Tasks;
using Volo.Abp.Data;

namespace FS.Cms.DataSeed.Seeder
{
    public interface ICmsDefinitionSeeder
    {
        Task SeedAsync(DataSeedContext context);
    }
}