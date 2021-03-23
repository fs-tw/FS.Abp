using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace FS.Abp.Authentication.EntityFrameworkCore
{
    public class AuthenticationHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<AuthenticationHttpApiHostMigrationsDbContext>
    {
        public AuthenticationHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
        {
            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<AuthenticationHttpApiHostMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Authentication"));

            return new AuthenticationHttpApiHostMigrationsDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
