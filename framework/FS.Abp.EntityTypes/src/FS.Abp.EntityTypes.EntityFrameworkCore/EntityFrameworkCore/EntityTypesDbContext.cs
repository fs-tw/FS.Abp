using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.EntityTypes.EntityFrameworkCore
{
    [ConnectionStringName(EntityTypesDbProperties.ConnectionStringName)]
    public class EntityTypesDbContext : AbpDbContext<EntityTypesDbContext>, IEntityTypesDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * public DbSet<Question> Questions { get; set; }
         */

        public EntityTypesDbContext(DbContextOptions<EntityTypesDbContext> options) 
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ConfigureEntityTypes();
        }
    }
}