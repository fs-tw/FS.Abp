using JetBrains.Annotations;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace Volo.Payment.EntityFrameworkCore
{
    public class PaymentModelBuilderConfigurationOptions : AbpModelBuilderConfigurationOptions
    {
        public PaymentModelBuilderConfigurationOptions(
            [NotNull] string tablePrefix = "",
            [CanBeNull] string schema = null)
            : base(
                tablePrefix,
                schema)
        {

        }
    }
}