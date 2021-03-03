using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Text;

namespace FS.LineNotify.Channels
{
    public class Channel
    {
        public string ProviderKey { get; }
        public string AccessToken { get; }

        protected Channel()
        {
        }

        public Channel(
            [NotNull] string providerKey,
            [NotNull] string accessToken
            )
        {
            ProviderKey = providerKey;
            AccessToken = accessToken;
        }

    }
}
