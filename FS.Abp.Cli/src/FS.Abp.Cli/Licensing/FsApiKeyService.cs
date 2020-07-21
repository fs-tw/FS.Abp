using System;
using System.Threading.Tasks;
using Volo.Abp.Cli.Http;
using Volo.Abp.Cli.Licensing;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Json;
namespace FS.Abp.Cli.Licensing
{
    [ExposeServices(typeof(IApiKeyService))]
    public class FsApiKeyService : IApiKeyService, ITransientDependency
    {
        public FsApiKeyService(IJsonSerializer jsonSerializer)
        {
            JsonSerializer = jsonSerializer;
        }

        protected IJsonSerializer JsonSerializer { get; }

        public async Task<DeveloperApiKeyResult> GetApiKeyOrNullAsync(bool invalidateCache = false)
        {
            return await Task.FromResult<DeveloperApiKeyResult>(null).ConfigureAwait(false);
        }
    }
}