using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace DEMO.EntityFrameworkCore
{
    public static class DEMODbContextModelCreatingExtensions
    {
        public static void ConfigureDEMO(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(DEMOConsts.DbTablePrefix + "YourEntities", DEMOConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}