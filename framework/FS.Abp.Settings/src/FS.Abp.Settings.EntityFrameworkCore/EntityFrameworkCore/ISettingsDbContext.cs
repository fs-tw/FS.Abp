using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.Settings.EntityFrameworkCore
{
    [ConnectionStringName(SettingsDbProperties.ConnectionStringName)]
    public interface ISettingsDbContext : IEfCoreDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * DbSet<Question> Questions { get; }
         */
    }
}