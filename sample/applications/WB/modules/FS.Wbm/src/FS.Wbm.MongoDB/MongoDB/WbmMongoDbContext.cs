using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Wbm.MongoDB
{
    [ConnectionStringName(WbmDbProperties.ConnectionStringName)]
    public class WbmMongoDbContext : AbpMongoDbContext, IWbmMongoDbContext
    {
        /* Add mongo collections here. Example:
         * public IMongoCollection<Question> Questions => Collection<Question>();
         */

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.ConfigureWbm();
        }
    }
}