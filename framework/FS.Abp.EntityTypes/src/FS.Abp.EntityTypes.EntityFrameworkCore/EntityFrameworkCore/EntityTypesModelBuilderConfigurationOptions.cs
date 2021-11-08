using JetBrains.Annotations;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace FS.Abp.EntityTypes.EntityFrameworkCore
{
    public class EntityTypesModelBuilderConfigurationOptions : AbpModelBuilderConfigurationOptions
    {
        public EntityTypesModelBuilderConfigurationOptions(
            [NotNull] string tablePrefix = "",
            [CanBeNull] string schema = null)
            : base(
                tablePrefix,
                schema)
        {

        }
    }
}