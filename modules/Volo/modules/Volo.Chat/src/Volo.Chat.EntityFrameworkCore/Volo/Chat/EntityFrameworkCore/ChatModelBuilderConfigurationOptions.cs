using JetBrains.Annotations;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace Volo.Chat.EntityFrameworkCore
{
    public class ChatModelBuilderConfigurationOptions : AbpModelBuilderConfigurationOptions
    {
        public ChatModelBuilderConfigurationOptions(
            [NotNull] string tablePrefix = "",
            [CanBeNull] string schema = null)
            : base(
                tablePrefix,
                schema)
        {

        }
    }
}