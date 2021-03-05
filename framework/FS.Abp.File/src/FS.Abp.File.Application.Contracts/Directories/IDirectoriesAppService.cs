using System.Threading.Tasks;
using Volo.FileManagement.Directories;

namespace FS.Abp.File.Directories
{
    public interface IDirectoriesAppService
    {
        Task<DirectoryDescriptorDto> FindByProviderAsync(string key, string group = null);
    }
}