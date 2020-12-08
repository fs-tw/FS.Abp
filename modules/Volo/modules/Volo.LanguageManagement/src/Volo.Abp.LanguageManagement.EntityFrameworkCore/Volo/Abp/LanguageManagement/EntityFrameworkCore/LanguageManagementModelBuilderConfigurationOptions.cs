using JetBrains.Annotations;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace Volo.Abp.LanguageManagement.EntityFrameworkCore
{
    public class LanguageManagementModelBuilderConfigurationOptions : AbpModelBuilderConfigurationOptions
    {
        public LanguageManagementModelBuilderConfigurationOptions(
            [NotNull] string tablePrefix = "",
            [CanBeNull] string schema = null)
            : base(
                tablePrefix,
                schema)
        {

        }
    }
}