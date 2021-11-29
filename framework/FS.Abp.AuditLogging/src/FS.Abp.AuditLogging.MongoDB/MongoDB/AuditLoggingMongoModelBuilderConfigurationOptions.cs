using JetBrains.Annotations;
using Volo.Abp.MongoDB;

namespace FS.Abp.AuditLogging.MongoDB
{
    public class AuditLoggingMongoModelBuilderConfigurationOptions : AbpMongoModelBuilderConfigurationOptions
    {
        public AuditLoggingMongoModelBuilderConfigurationOptions(
            [NotNull] string collectionPrefix = "")
            : base(collectionPrefix)
        {
        }
    }
}