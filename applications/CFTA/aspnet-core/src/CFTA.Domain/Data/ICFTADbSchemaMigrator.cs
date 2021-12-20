using System.Threading.Tasks;

namespace CFTA.Data
{
    public interface ICFTADbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
