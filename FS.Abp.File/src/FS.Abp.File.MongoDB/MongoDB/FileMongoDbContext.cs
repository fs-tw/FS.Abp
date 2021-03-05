using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Abp.File.MongoDB
{
    [ConnectionStringName(FileDbProperties.ConnectionStringName)]
    public class FileMongoDbContext : AbpMongoDbContext, IFileMongoDbContext
    {
        /* Add mongo collections here. Example:
         * public IMongoCollection<Question> Questions => Collection<Question>();
         */

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.ConfigureFile();
        }
    }
}