using System.Collections.Generic;

namespace Volo.Abp.Account.ExternalProviders
{
    public class ExternalProviderDefinition
    {
        public string Name { get; set; }

        public List<ExternalProviderDefinitionProperty> Properties { get; set; }

        public ExternalProviderDefinition()
        {
            Properties = new List<ExternalProviderDefinitionProperty>();
        }
    }
}
