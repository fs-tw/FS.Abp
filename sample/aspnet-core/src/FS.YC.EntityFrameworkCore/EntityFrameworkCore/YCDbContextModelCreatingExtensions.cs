using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace FS.YC.EntityFrameworkCore
{
    public static class YCDbContextModelCreatingExtensions
    {
        public static void ConfigureYC(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(YCConsts.DbTablePrefix + "YourEntities", YCConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}