using System.Threading.Tasks;

namespace FS.Abp.Demo.Data
{
    public interface IDemoDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
