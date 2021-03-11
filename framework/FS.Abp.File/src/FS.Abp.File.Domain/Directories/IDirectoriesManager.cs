using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.FileManagement.Directories;

namespace FS.Abp.File.Directories
{
    public interface IDirectoriesManager
    {
        Task<List<DirectoryDescriptor>> FindByProviderAsync(string providerKey, string group = null);
    }
}