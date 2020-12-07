using System.Threading.Tasks;

namespace FS.Data
{
    public interface IFSDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}