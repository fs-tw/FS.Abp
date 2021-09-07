using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.CodingManagement.EntityFrameworkCore
{
    public partial interface ICodingManagementDbContext : IEfCoreDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * DbSet<Question> Questions { get; }
         */
    }
}