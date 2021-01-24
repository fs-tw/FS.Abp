using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Theme.TheProject.MongoDB
{
    [ConnectionStringName(TheProjectDbProperties.ConnectionStringName)]
    public class TheProjectMongoDbContext : AbpMongoDbContext, ITheProjectMongoDbContext
    {
        /* Add mongo collections here. Example:
         * public IMongoCollection<Question> Questions => Collection<Question>();
         */

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.ConfigureTheProject();
        }
    }
}