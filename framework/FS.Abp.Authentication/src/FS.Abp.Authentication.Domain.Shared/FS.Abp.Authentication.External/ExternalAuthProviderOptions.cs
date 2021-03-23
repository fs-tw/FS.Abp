using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FS.Abp.Authentication.External
{
    public class ExternalAuthProviderOptions
    {
        public ExternalAuthProviderConfigurationDictionary ExternalAuthProviders { get; }
        public ExternalAuthProviderOptions()
        {
            ExternalAuthProviders = new ExternalAuthProviderConfigurationDictionary();
        }
    }
}
