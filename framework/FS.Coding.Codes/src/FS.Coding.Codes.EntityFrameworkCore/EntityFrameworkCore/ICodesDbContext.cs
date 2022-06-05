using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Coding.Codes.EntityFrameworkCore;

[ConnectionStringName(CodesDbProperties.ConnectionStringName)]
public interface ICodesDbContext : IEfCoreDbContext
{
    /* Add DbSet for each Aggregate Root here. Example:
     * DbSet<Question> Questions { get; }
     */
}
