using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.LineNotify.EntityFrameworkCore
{
    public class LineNotifyHttpApiHostMigrationsDbContext : AbpDbContext<LineNotifyHttpApiHostMigrationsDbContext>
    {
        public LineNotifyHttpApiHostMigrationsDbContext(DbContextOptions<LineNotifyHttpApiHostMigrationsDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ConfigureLineNotify();
        }
    }
}
