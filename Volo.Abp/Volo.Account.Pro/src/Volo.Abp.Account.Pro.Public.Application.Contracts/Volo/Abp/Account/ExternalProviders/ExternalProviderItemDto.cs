using System.Collections.Generic;

namespace Volo.Abp.Account.ExternalProviders
{
    public class ExternalProviderItemDto
    {
        public string Name { get; set; }

        public bool Enabled { get; set; }

        public List<ExternalProviderSettingsProperty> Properties { get; set; }
    }
}
