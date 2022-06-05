using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Coding.EntityFrameworkCore;

[ConnectionStringName(CodingDbProperties.ConnectionStringName)]
public interface ICodingDbContext : IEfCoreDbContext
{
    /* Add DbSet for each Aggregate Root here. Example:
     * DbSet<Question> Questions { get; }
     */
}
