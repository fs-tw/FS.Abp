using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.LineNotify.MongoDB
{
    [ConnectionStringName(LineNotifyDbProperties.ConnectionStringName)]
    public class LineNotifyMongoDbContext : AbpMongoDbContext, ILineNotifyMongoDbContext
    {
        /* Add mongo collections here. Example:
         * public IMongoCollection<Question> Questions => Collection<Question>();
         */

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.ConfigureLineNotify();
        }
    }
}