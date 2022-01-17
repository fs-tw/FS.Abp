using JetBrains.Annotations;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace FS.Abp.Settings.EntityFrameworkCore
{
    public class SettingsModelBuilderConfigurationOptions : AbpModelBuilderConfigurationOptions
    {
        public SettingsModelBuilderConfigurationOptions(
            [NotNull] string tablePrefix = "",
            [CanBeNull] string schema = null)
            : base(
                tablePrefix,
                schema)
        {

        }
    }
}