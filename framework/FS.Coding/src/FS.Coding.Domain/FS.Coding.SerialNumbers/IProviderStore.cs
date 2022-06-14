using JetBrains.Annotations;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FS.Coding.SerialNumbers
{
    public interface IProviderStore
    {
        Task<List<Provider>> GetProvidersAsync();

        Task<Provider> GetProviderAsync([NotNull] string name);

        Task<bool> IsDefinedAsync([NotNull] string name);
    }
}
