using JetBrains.Annotations;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace FS.Abp.Metadata.EntityFrameworkCore
{
    public class MetadataModelBuilderConfigurationOptions : AbpModelBuilderConfigurationOptions
    {
        public MetadataModelBuilderConfigurationOptions(
            [NotNull] string tablePrefix = "",
            [CanBeNull] string schema = null)
            : base(
                tablePrefix,
                schema)
        {

        }
    }
}