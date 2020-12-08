using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Volo.Abp.LeptonTheme.HttpApi.Host.EntityFrameworkCore
{
    public class LeptonThemeDemoHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<LeptonThemeDemoHttpApiHostMigrationsDbContext>
    {
        public LeptonThemeDemoHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
        {
            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<LeptonThemeDemoHttpApiHostMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("MyProjectName"));

            return new LeptonThemeDemoHttpApiHostMigrationsDbContext(builder.Options);
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
