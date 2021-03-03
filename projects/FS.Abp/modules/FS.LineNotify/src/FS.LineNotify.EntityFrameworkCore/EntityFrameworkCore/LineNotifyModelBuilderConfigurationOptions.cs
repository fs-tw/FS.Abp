using JetBrains.Annotations;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace FS.LineNotify.EntityFrameworkCore
{
    public class LineNotifyModelBuilderConfigurationOptions : AbpModelBuilderConfigurationOptions
    {
        public LineNotifyModelBuilderConfigurationOptions(
            [NotNull] string tablePrefix = "",
            [CanBeNull] string schema = null)
            : base(
                tablePrefix,
                schema)
        {

        }
    }
}