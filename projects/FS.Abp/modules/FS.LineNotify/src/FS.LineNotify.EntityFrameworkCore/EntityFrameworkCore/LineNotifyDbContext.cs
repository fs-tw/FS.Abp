using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.LineNotify.EntityFrameworkCore
{
    [ConnectionStringName(LineNotifyDbProperties.ConnectionStringName)]
    public class LineNotifyDbContext : AbpDbContext<LineNotifyDbContext>, ILineNotifyDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * public DbSet<Question> Questions { get; set; }
         */

        public LineNotifyDbContext(DbContextOptions<LineNotifyDbContext> options) 
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ConfigureLineNotify();
        }
    }
}