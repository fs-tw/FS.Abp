using System.Collections.Generic;

namespace Volo.Abp.Account.ExternalProviders
{
    public class ExternalProviderItemWithSecretDto
    {
        public bool Success { get; set; }

        public string Name { get; set; }

        public bool Enabled { get; set; }

        public List<ExternalProviderSettingsProperty> Properties { get; set; }

        public List<ExternalProviderSettingsProperty> SecretProperties { get; set; }
    }
}
