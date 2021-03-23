using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.Authentication.EntityFrameworkCore
{
    public class AuthenticationHttpApiHostMigrationsDbContext : AbpDbContext<AuthenticationHttpApiHostMigrationsDbContext>
    {
        public AuthenticationHttpApiHostMigrationsDbContext(DbContextOptions<AuthenticationHttpApiHostMigrationsDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ConfigureAuthentication();
        }
    }
}
