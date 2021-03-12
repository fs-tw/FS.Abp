using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace FS.FormManagement.EntityFrameworkCore
{
    public class FormManagementHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<FormManagementHttpApiHostMigrationsDbContext>
    {
        public FormManagementHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
        {
            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<FormManagementHttpApiHostMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("FormManagement"));

            return new FormManagementHttpApiHostMigrationsDbContext(builder.Options);
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
