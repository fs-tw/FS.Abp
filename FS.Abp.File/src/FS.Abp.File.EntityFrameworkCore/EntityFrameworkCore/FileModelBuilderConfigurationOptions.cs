using JetBrains.Annotations;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace FS.Abp.File.EntityFrameworkCore
{
    public class FileModelBuilderConfigurationOptions : AbpModelBuilderConfigurationOptions
    {
        public FileModelBuilderConfigurationOptions(
            [NotNull] string tablePrefix = "",
            [CanBeNull] string schema = null)
            : base(
                tablePrefix,
                schema)
        {

        }
    }
}