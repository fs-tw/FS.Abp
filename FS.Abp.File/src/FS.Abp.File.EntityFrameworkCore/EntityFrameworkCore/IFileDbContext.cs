using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.File.EntityFrameworkCore
{
    [ConnectionStringName(FileDbProperties.ConnectionStringName)]
    public interface IFileDbContext : IEfCoreDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * DbSet<Question> Questions { get; }
         */
    }
}