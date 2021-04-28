using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;
using Volo.CmsKit.EntityFrameworkCore;

namespace FS.CmsKitManagement.EntityFrameworkCore
{
    [ConnectionStringName(CmsKitManagementDbProperties.ConnectionStringName)]
    public partial class CmsKitManagementDbContext : AbpDbContext<CmsKitManagementDbContext>, ICmsKitManagementDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * public DbSet<Question> Questions { get; set; }
         */

        public CmsKitManagementDbContext(DbContextOptions<CmsKitManagementDbContext> options) 
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ConfigureCmsKit();
            builder.ConfigureCmsKitManagement();
        }
    }
}