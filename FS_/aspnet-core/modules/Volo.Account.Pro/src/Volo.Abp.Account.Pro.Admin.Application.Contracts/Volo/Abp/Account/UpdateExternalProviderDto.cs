using System.Collections.Generic;
using Volo.Abp.Account.ExternalProviders;

namespace Volo.Abp.Account
{
    public class UpdateExternalProviderDto
    {
        public string Name { get; set; }

        public bool Enabled { get; set; }

        public List<ExternalProviderSettingsProperty> Properties { get; set; }

        public List<ExternalProviderSettingsProperty> SecretProperties { get; set; }
    }
}
