using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.PrinterManagement.MongoDB
{
    [ConnectionStringName(PrinterManagementDbProperties.ConnectionStringName)]
    public class PrinterManagementMongoDbContext : AbpMongoDbContext, IPrinterManagementMongoDbContext
    {
        /* Add mongo collections here. Example:
         * public IMongoCollection<Question> Questions => Collection<Question>();
         */

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.ConfigurePrinterManagement();
        }
    }
}