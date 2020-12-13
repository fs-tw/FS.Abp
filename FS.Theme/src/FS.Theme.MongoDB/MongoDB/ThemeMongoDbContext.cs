using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Theme.MongoDB
{
    [ConnectionStringName(ThemeDbProperties.ConnectionStringName)]
    public class ThemeMongoDbContext : AbpMongoDbContext, IThemeMongoDbContext
    {
        /* Add mongo collections here. Example:
         * public IMongoCollection<Question> Questions => Collection<Question>();
         */

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.ConfigureTheme();
        }
    }
}