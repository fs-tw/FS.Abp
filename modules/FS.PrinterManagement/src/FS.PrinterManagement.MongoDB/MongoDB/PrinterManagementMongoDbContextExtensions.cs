using System;
using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.PrinterManagement.MongoDB
{
    public static class PrinterManagementMongoDbContextExtensions
    {
        public static void ConfigurePrinterManagement(
            this IMongoModelBuilder builder,
            Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new PrinterManagementMongoModelBuilderConfigurationOptions(
                PrinterManagementDbProperties.DbTablePrefix
            );

            optionsAction?.Invoke(options);
        }
    }
}