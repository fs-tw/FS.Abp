using JetBrains.Annotations;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace FS.Theme.TheProject.EntityFrameworkCore
{
    public class TheProjectModelBuilderConfigurationOptions : AbpModelBuilderConfigurationOptions
    {
        public TheProjectModelBuilderConfigurationOptions(
            [NotNull] string tablePrefix = "",
            [CanBeNull] string schema = null)
            : base(
                tablePrefix,
                schema)
        {

        }
    }
}