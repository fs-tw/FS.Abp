using System.Threading.Tasks;

namespace CrystalQuartzSample.Data
{
    public interface ICrystalQuartzSampleDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
