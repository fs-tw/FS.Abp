using JetBrains.Annotations;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;

namespace FS.Abp.File.Directories
{
    public class DefaultDirectoryProviderDefinitionStore : IDirectoryProviderDefinitionStore
    {
        private readonly DirectoryProviderOptions options;
        public DefaultDirectoryProviderDefinitionStore(IOptions<DirectoryProviderOptions> options)
        {
            this.options = options.Value;
        }
        public Task<DirectoryProviderDefinition> GetDefinitionAsync([NotNull] string providerKey)
        {
            Check.NotNullOrWhiteSpace(providerKey, nameof(providerKey));

            var result = options.DirectoryProviders.GetOrDefault(providerKey) ?? throw new DirectoryProviderDefinitionNotTaggableException(providerKey);

            return Task.FromResult(result);
        }

        public Task<List<DirectoryProviderDefinition>> GetDefinitionsAsync()
        {
            return Task.FromResult(options.DirectoryProviders.Values.ToList());
        }

        public Task<bool> IsDefinedAsync([NotNull] string providerKey)
        {
            Check.NotNullOrWhiteSpace(providerKey, nameof(providerKey));
            return Task.FromResult(options.DirectoryProviders.ContainsKey(providerKey));
        }
    }
}
