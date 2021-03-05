using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FS.Abp.File.Directories
{
    public interface IDirectoryProviderDefinitionStore
    {
        Task<List<DirectoryProviderDefinition>> GetDefinitionsAsync();

        Task<DirectoryProviderDefinition> GetDefinitionAsync([NotNull] string providerKey);

        Task<bool> IsDefinedAsync([NotNull] string providerKey);
    }
}
