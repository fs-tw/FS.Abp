using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.Metadata.EntityFrameworkCore
{
    [ConnectionStringName(MetadataDbProperties.ConnectionStringName)]
    public class MetadataDbContext : AbpDbContext<MetadataDbContext>, IMetadataDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * public DbSet<Question> Questions { get; set; }
         */

        public MetadataDbContext(DbContextOptions<MetadataDbContext> options) 
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ConfigureMetadata();
        }
    }
}