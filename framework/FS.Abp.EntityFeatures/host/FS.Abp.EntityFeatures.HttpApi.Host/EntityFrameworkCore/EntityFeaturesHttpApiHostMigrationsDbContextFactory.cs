using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace FS.Abp.EntityFeatures.EntityFrameworkCore
{
    public class EntityFeaturesHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<EntityFeaturesHttpApiHostMigrationsDbContext>
    {
        public EntityFeaturesHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
        {
            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<EntityFeaturesHttpApiHostMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("EntityFeatures"));

            return new EntityFeaturesHttpApiHostMigrationsDbContext(builder.Options);
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
