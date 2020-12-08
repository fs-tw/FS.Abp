using System.Collections.Generic;

namespace Volo.Abp.Account.ExternalProviders
{
    public class AbpExternalProviderOptions
    {
        public List<ExternalProviderDefinition> Definitions { get; set; }

        public AbpExternalProviderOptions()
        {
            Definitions = new List<ExternalProviderDefinition>();
        }
    }
}
