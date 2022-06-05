using JetBrains.Annotations;
using Volo.Abp.MongoDB;

namespace FS.PrinterManagement.MongoDB
{
    public class PrinterManagementMongoModelBuilderConfigurationOptions : AbpMongoModelBuilderConfigurationOptions
    {
        public PrinterManagementMongoModelBuilderConfigurationOptions(
            [NotNull] string collectionPrefix = "")
            : base(collectionPrefix)
        {
        }
    }
}