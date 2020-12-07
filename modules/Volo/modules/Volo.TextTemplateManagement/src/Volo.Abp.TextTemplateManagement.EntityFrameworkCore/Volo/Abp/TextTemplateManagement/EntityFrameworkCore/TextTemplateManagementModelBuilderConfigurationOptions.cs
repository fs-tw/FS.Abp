using JetBrains.Annotations;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace Volo.Abp.TextTemplateManagement.EntityFrameworkCore
{
    public class TextTemplateManagementModelBuilderConfigurationOptions : AbpModelBuilderConfigurationOptions
    {
        public TextTemplateManagementModelBuilderConfigurationOptions(
            [NotNull] string tablePrefix = "",
            [CanBeNull] string schema = null)
            : base(
                tablePrefix,
                schema)
        {

        }
    }
}