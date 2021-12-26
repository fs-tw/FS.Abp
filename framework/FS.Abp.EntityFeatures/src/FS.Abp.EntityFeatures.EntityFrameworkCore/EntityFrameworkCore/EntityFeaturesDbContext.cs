using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.EntityFeatures.EntityFrameworkCore
{
    [ConnectionStringName(EntityFeaturesDbProperties.ConnectionStringName)]
    public class EntityFeaturesDbContext : AbpDbContext<EntityFeaturesDbContext>, IEntityFeaturesDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * public DbSet<Question> Questions { get; set; }
         */

        public EntityFeaturesDbContext(DbContextOptions<EntityFeaturesDbContext> options) 
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ConfigureEntityFeatures();
        }
    }
}