using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace FS.Abp.EntityTypes.EntityFrameworkCore
{
    public class EntityTypesHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<EntityTypesHttpApiHostMigrationsDbContext>
    {
        public EntityTypesHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
        {
            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<EntityTypesHttpApiHostMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("EntityTypes"));

            return new EntityTypesHttpApiHostMigrationsDbContext(builder.Options);
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
