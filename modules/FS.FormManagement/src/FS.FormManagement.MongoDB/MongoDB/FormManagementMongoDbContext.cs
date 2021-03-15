using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.FormManagement.MongoDB
{
    [ConnectionStringName(FormManagementDbProperties.ConnectionStringName)]
    public class FormManagementMongoDbContext : AbpMongoDbContext, IFormManagementMongoDbContext
    {
        /* Add mongo collections here. Example:
         * public IMongoCollection<Question> Questions => Collection<Question>();
         */

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.ConfigureFormManagement();
        }
    }
}