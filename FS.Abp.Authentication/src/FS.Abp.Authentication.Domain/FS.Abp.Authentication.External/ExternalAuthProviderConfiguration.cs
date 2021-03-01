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
        public string ProviderName { get; }

        [NotNull]
        public Type ExternalAuthProviderType { get; }
    }
}
