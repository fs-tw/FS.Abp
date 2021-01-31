using JetBrains.Annotations;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.DependencyInjection;

namespace FS.LineNotify.ServiceDefinitions
{
    public class DefaultServiceDefinitionStore : IServiceDefinitionStore, ITransientDependency
    {
        private readonly ServiceOptions options;

        public DefaultServiceDefinitionStore(IOptions<ServiceOptions> options)
        {
            this.options = options.Value;
        }

        public virtual Task<ServiceDefiniton> GetDefinitionAsync([NotNull] string providerKey)
        {
            Check.NotNullOrWhiteSpace(providerKey, nameof(providerKey));

            var result = options.ServiceDefinitions.GetOrDefault(providerKey) ?? throw new ServiceDefinitonNotTaggableException(providerKey);

            return Task.FromResult(result);
        }

        public virtual Task<List<ServiceDefiniton>> GetDefinitionsAsync()
        {
            return Task.FromResult(options.ServiceDefinitions.Values.ToList());
        }

        public virtual Task<bool> IsDefinedAsync([NotNull] string providerKey)
        {
            Check.NotNullOrWhiteSpace(providerKey, nameof(providerKey));
            return Task.FromResult(options.ServiceDefinitions.ContainsKey(providerKey));
        }
    }
}
