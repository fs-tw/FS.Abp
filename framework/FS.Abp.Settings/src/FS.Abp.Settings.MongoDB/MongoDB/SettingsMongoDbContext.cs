using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Abp.Settings.MongoDB
{
    [ConnectionStringName(SettingsDbProperties.ConnectionStringName)]
    public class SettingsMongoDbContext : AbpMongoDbContext, ISettingsMongoDbContext
    {
        /* Add mongo collections here. Example:
         * public IMongoCollection<Question> Questions => Collection<Question>();
         */

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.ConfigureSettings();
        }
    }
}