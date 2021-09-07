using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.CodingManagement.EntityFrameworkCore
{
    public partial class CodingManagementDbContext : AbpDbContext<CodingManagementDbContext>, ICodingManagementDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * public DbSet<Question> Questions { get; set; }
         */
    }
}