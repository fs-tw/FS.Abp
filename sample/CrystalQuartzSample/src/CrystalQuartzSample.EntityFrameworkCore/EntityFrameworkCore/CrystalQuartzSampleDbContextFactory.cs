using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace CrystalQuartzSample.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class CrystalQuartzSampleDbContextFactory : IDesignTimeDbContextFactory<CrystalQuartzSampleDbContext>
    {
        public CrystalQuartzSampleDbContext CreateDbContext(string[] args)
        {
            CrystalQuartzSampleEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<CrystalQuartzSampleDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Default"));

            return new CrystalQuartzSampleDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../CrystalQuartzSample.DbMigrator/"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
