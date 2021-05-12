using System.Threading.Tasks;

namespace DEMO.Data
{
    public interface IDEMODbSchemaMigrator
    {
        Task MigrateAsync();
    }
}