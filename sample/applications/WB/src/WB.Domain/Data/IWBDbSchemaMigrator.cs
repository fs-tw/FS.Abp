using System.Threading.Tasks;

namespace WB.Data
{
    public interface IWBDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
