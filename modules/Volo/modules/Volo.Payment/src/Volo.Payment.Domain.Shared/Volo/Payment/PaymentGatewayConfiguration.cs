using System;
using JetBrains.Annotations;
using Volo.Abp;
using Volo.Abp.Localization;

namespace Volo.Payment
{
    public class PaymentGatewayConfiguration
    {
        [NotNull]
        public string Name { get; }

        [NotNull]
        public ILocalizableString DisplayName
        {
            get => _displayName;
            set => _displayName = Check.NotNull(value, nameof(value));
        }
        private ILocalizableString _displayName;

        [NotNull]
        public Type PaymentGatewayType { get; }
        
        /// <summary>
        /// Default value: 1000.
        /// </summary>
        public int Order { get; set; } = 1000;

        public PaymentGatewayConfiguration(
            [NotNull] string name,
            [NotNull] ILocalizableString displayName,
            [NotNull] Type paymentGatewayType)
        {
            Name = Check.NotNullOrWhiteSpace(name, nameof(name));
            DisplayName = displayName;
            PaymentGatewayType = paymentGatewayType;
        }
    }
}