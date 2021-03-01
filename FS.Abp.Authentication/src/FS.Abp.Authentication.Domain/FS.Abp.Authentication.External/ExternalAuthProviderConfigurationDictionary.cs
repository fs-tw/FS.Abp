using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FS.Abp.Authentication.External
{
    public class ExternalAuthProviderConfigurationDictionary : Dictionary<string, ExternalAuthProviderConfiguration>
    {
        public void Add(ExternalAuthProviderConfiguration externalAuthProviderConfiguration)
        {
            this[externalAuthProviderConfiguration.ProviderName] = externalAuthProviderConfiguration;
        }
    }
}
