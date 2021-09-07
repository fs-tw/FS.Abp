using JetBrains.Annotations;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.DependencyInjection;

namespace FS.CodingManagement.SerialNumbers
{
    public interface IProviderStore
    {
        Task<List<Provider>> GetDefinitionsAsync();

        Task<Provider> GetDefinitionAsync([NotNull] string name);

        Task<bool> IsDefinedAsync([NotNull] string name);
    }
    public class DefaultProviderStore : IProviderStore, ITransientDependency
    {
        private readonly ProviderOptions options;

        public DefaultProviderStore(IOptions<ProviderOptions> options)
        {
            this.options = options.Value;
        }

        public virtual Task<Provider> GetDefinitionAsync([NotNull] string providerKey)
        {
            Check.NotNullOrWhiteSpace(providerKey, nameof(providerKey));

            var result = options.Providers.GetOrDefault(providerKey) ?? throw new KeyNotFoundException(providerKey);

            return Task.FromResult(result);
        }

        public virtual Task<List<Provider>> GetDefinitionsAsync()
        {
            return Task.FromResult(options.Providers.Values.ToList());
        }

        public virtual Task<bool> IsDefinedAsync([NotNull] string providerKey)
        {
            Check.NotNullOrWhiteSpace(providerKey, nameof(providerKey));
            return Task.FromResult(options.Providers.ContainsKey(providerKey));
        }
    }
}
