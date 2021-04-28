using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.CmsKitManagement.EntityFrameworkCore
{
    [ConnectionStringName(CmsKitManagementDbProperties.ConnectionStringName)]
    public partial interface ICmsKitManagementDbContext : IEfCoreDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * DbSet<Question> Questions { get; }
         */
    }
}