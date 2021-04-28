using JetBrains.Annotations;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace FS.CmsKitManagement.EntityFrameworkCore
{
    public partial class CmsKitManagementModelBuilderConfigurationOptions : AbpModelBuilderConfigurationOptions
    {
        public CmsKitManagementModelBuilderConfigurationOptions(
            [NotNull] string tablePrefix = "",
            [CanBeNull] string schema = null)
            : base(
                tablePrefix,
                schema)
        {

        }
    }
}