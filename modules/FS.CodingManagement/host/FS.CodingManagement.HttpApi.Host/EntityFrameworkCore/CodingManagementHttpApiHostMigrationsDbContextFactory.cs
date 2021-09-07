using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace FS.CodingManagement.EntityFrameworkCore
{
    public class CodingManagementHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<CodingManagementHttpApiHostMigrationsDbContext>
    {
        public CodingManagementHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
        {
            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<CodingManagementHttpApiHostMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("CodingManagement"));

            return new CodingManagementHttpApiHostMigrationsDbContext(builder.Options);
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
