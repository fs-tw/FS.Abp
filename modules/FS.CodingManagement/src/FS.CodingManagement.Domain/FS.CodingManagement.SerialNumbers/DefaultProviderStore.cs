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
        Task<List<Provider>> GetProvidersAsync();

        Task<Provider> GetProviderAsync([NotNull] string name);

        Task<bool> IsDefinedAsync([NotNull] string name);
    }
    public class DefaultProviderStore : IProviderStore, ITransientDependency
    {
        private readonly ProviderOptions options;

        public DefaultProviderStore(IOptions<ProviderOptions> options)
        {
            this.options = options.Value;
        }

        public virtual Task<Provider> GetProviderAsync([NotNull] string name)
        {
            Provider result = null;
            Check.NotNullOrWhiteSpace(name, nameof(name));

            if (options.Providers.ContainsKey(name))
            {
                result = options.Providers.GetOrDefault(name);
            }
            else
            {
                result = options.Providers.GetOrDefault(ProviderOptions.DefaultProviderName);
            }
            if (result == null)
                throw new KeyNotFoundException(name);

            return Task.FromResult(result);
        }

        public virtual Task<List<Provider>> GetProvidersAsync()
        {
            return Task.FromResult(options.Providers.Values.ToList());
        }

        public virtual Task<bool> IsDefinedAsync([NotNull] string name)
        {
            Check.NotNullOrWhiteSpace(name, nameof(name));
            return Task.FromResult(options.Providers.ContainsKey(name));
        }
    }
}
