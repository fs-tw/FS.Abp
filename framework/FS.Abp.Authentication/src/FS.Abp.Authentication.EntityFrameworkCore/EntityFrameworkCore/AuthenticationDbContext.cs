using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.Authentication.EntityFrameworkCore
{
    [ConnectionStringName(AuthenticationDbProperties.ConnectionStringName)]
    public class AuthenticationDbContext : AbpDbContext<AuthenticationDbContext>, IAuthenticationDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * public DbSet<Question> Questions { get; set; }
         */

        public AuthenticationDbContext(DbContextOptions<AuthenticationDbContext> options) 
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ConfigureAuthentication();
        }
    }
}