using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.Metadata.EntityFrameworkCore
{
    public class MetadataHttpApiHostMigrationsDbContext : AbpDbContext<MetadataHttpApiHostMigrationsDbContext>
    {
        public MetadataHttpApiHostMigrationsDbContext(DbContextOptions<MetadataHttpApiHostMigrationsDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ConfigureMetadata();
        }
    }
}
