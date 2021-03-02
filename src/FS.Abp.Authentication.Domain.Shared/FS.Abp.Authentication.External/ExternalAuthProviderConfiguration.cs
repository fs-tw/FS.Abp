using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FS.Abp.Authentication.External
{
    public class ExternalAuthProviderConfiguration
    {
        [NotNull]
        public string ProviderKey { get; }

        [NotNull]
        public Type ExternalAuthProviderType { get; }

        public ExternalAuthProviderConfiguration(string providerKey, Type externalAuthProviderType)
        {
            ProviderKey = providerKey;
            ExternalAuthProviderType = externalAuthProviderType;
        }
    }
}
