using System.Threading.Tasks;

namespace FS.YC.Data
{
    public interface IYCDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
