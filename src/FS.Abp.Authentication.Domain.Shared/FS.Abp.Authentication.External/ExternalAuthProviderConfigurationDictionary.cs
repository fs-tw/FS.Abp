using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FS.Abp.Authentication.External
{
    public class ExternalAuthProviderConfigurationDictionary : Dictionary<string, ExternalAuthProviderConfiguration>
    {
        public void AddOrReplace(ExternalAuthProviderConfiguration externalAuthProviderConfiguration)
        {
            this[externalAuthProviderConfiguration.ProviderKey] = externalAuthProviderConfiguration;
        }
    }
}
