using JetBrains.Annotations;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.DependencyInjection;

namespace FS.LineNotify.Channels
{
    public class DefaultChannelStore : IChannelStore, ISingletonDependency
    {
        public Dictionary<string, Channel> Channels { get; } = new Dictionary<string, Channel>();


        public void AddOrReplace([NotNull] string providerKey, [NotNull] string accessToken)
        {
            this.Channels[providerKey] = new Channel(providerKey, accessToken);
        }

        public Channel Get(string providerKey)
        {
            return this.Channels.GetOrDefault(providerKey);
        }
    }
}
