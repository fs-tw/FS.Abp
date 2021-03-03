using JetBrains.Annotations;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FS.LineNotify.Channels
{
    public interface IChannelStore
    {
        void AddOrReplace(
            [NotNull] string providerKey,
            [NotNull] string accessToken);
        Channel Get(string providerKey);
    }
}
