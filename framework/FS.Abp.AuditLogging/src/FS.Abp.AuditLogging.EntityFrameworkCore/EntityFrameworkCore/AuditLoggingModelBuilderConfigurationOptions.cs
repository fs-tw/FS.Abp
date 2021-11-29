using JetBrains.Annotations;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace FS.Abp.AuditLogging.EntityFrameworkCore
{
    public class AuditLoggingModelBuilderConfigurationOptions : AbpModelBuilderConfigurationOptions
    {
        public AuditLoggingModelBuilderConfigurationOptions(
            [NotNull] string tablePrefix = "",
            [CanBeNull] string schema = null)
            : base(
                tablePrefix,
                schema)
        {

        }
    }
}