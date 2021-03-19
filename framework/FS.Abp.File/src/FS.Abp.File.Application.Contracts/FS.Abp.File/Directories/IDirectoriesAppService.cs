using System.Threading.Tasks;
using Volo.FileManagement.Directories;
using System.Collections.Generic;

namespace FS.Abp.File.Directories
{
    public interface IDirectoriesAppService
    {
        Task<Dtos.DirectoryDescriptorDto> FindByProviderAsync(string providerKey, string group = null);
        Task<List<DirectoryProviderDefinition>> GetDefinitionsAsync();
    }
}