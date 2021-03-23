using JetBrains.Annotations;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace FS.Abp.Authentication.EntityFrameworkCore
{
    public class AuthenticationModelBuilderConfigurationOptions : AbpModelBuilderConfigurationOptions
    {
        public AuthenticationModelBuilderConfigurationOptions(
            [NotNull] string tablePrefix = "",
            [CanBeNull] string schema = null)
            : base(
                tablePrefix,
                schema)
        {

        }
    }
}