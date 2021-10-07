using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.EntityTypes.EntityFrameworkCore
{
    public class EntityTypesHttpApiHostMigrationsDbContext : AbpDbContext<EntityTypesHttpApiHostMigrationsDbContext>
    {
        public EntityTypesHttpApiHostMigrationsDbContext(DbContextOptions<EntityTypesHttpApiHostMigrationsDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ConfigureEntityTypes();
        }
    }
}
