using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.FormManagement.EntityFrameworkCore
{
    public class FormManagementHttpApiHostMigrationsDbContext : AbpDbContext<FormManagementHttpApiHostMigrationsDbContext>
    {
        public FormManagementHttpApiHostMigrationsDbContext(DbContextOptions<FormManagementHttpApiHostMigrationsDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ConfigureFormManagement();
        }
    }
}
