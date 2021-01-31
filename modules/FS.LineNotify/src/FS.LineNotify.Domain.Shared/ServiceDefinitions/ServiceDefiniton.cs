using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Text;

namespace FS.LineNotify.ServiceDefinitions
{
    public class ServiceDefiniton
    {
        public string ProviderKey { get; }
        public string ClientId { get; }
        public string ClientSecret { get; }
        public string DisplayName { get; }
        public string Description { get; }
        public string Redirect_uri { get;}

        protected ServiceDefiniton()
        {
        }

        public ServiceDefiniton(
            [NotNull] string no,
            [NotNull] string clientId,
            [NotNull] string clientSecret,
            [CanBeNull] string displayName = null,
            [CanBeNull] string description = null,
            [CanBeNull] string redirect_uri = null
            )
        {
            ProviderKey = no;
            DisplayName = displayName;
            Description = description;
            ClientId = clientId;
            ClientSecret = clientSecret;
            Redirect_uri = redirect_uri;
        }

    }
}
