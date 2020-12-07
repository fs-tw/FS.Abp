using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace FS.EntityFrameworkCore
{
    public static class FSDbContextModelCreatingExtensions
    {
        public static void ConfigureFS(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(FSConsts.DbTablePrefix + "YourEntities", FSConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}