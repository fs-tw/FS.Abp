using JetBrains.Annotations;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FS.LineNotify.ServiceDefinitions
{
    public interface IServiceDefinitionStore
    {
        Task<List<ServiceDefiniton>> GetDefinitionsAsync();

        Task<ServiceDefiniton> GetDefinitionAsync([NotNull] string providerKey);

        Task<bool> IsDefinedAsync([NotNull] string providerKey);
    }
}
