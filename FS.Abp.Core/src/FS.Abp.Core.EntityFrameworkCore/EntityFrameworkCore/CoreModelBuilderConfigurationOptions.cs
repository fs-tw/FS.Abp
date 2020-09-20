using JetBrains.Annotations;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace FS.Abp.Core.EntityFrameworkCore
{
    public class CoreModelBuilderConfigurationOptions : AbpModelBuilderConfigurationOptions
    {
        public CoreModelBuilderConfigurationOptions(
            [NotNull] string tablePrefix = "",
            [CanBeNull] string schema = null)
            : base(
                tablePrefix,
                schema)
        {

        }
    }
}