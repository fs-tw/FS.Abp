using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Options;
using Volo.Abp.DependencyInjection;
using Volo.FileManagement.Directories;
using Volo.FileManagement.Files;

namespace FS.Abp.File.Directories
{
    public class DirectoriesAppService : DirectoryDescriptorAppService, IDirectoriesAppService
    {
        public DirectoriesAppService(IDirectoryManager directoryManager, IFileManager fileManager, IDirectoryDescriptorRepository directoryDescriptorRepository, IFileDescriptorRepository fileDescriptorRepository, IOptions<FileIconOption> fileIconOption)
            : base(directoryManager, fileManager, directoryDescriptorRepository, fileDescriptorRepository, fileIconOption)
        {
        }

        private IDirectoryProviderDefinitionStore directoryProviderDefinitionStore => this.LazyServiceProvider.LazyGetRequiredService<IDirectoryProviderDefinitionStore>();
        public async Task<DirectoryDescriptorDto> FindByProviderAsync(string providerKey, string group = null)
        {
            var directoryPath = (await directoryProviderDefinitionStore.GetDefinitionAsync(providerKey)).DirectoryPath;

            System.IO.Path.Combine(directoryPath, group);

            var separators = new char[] { Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar };

            var paths = directoryPath.Split(separators, System.StringSplitOptions.RemoveEmptyEntries).ToList();

            var directory = await getOrAddAsync(paths, null);

            return ObjectMapper.Map<DirectoryDescriptor, DirectoryDescriptorDto>(directory);
        }


        private async Task<DirectoryDescriptor> getOrAddAsync(List<string> paths, System.Guid? parentId)
        {
            var currentParentId = parentId;
            DirectoryDescriptor target = null;
            foreach (var path in paths)
            {
                target = await this.DirectoryDescriptorRepository.FindAsync(path, currentParentId);
                if (target == null)
                {
                    var fullPaths = paths.Skip(paths.IndexOf(path)).ToList();
                    target = (await insertDirectoriesAsync(fullPaths, currentParentId)).Last();
                    return target;
                }
                currentParentId = target.Id;
            }
            return target;
        }

        private async Task<List<DirectoryDescriptor>> insertDirectoriesAsync(List<string> paths, System.Guid? parentId)
        {
            var result = new List<DirectoryDescriptor>();
            var currentParentId = parentId;
            foreach (var path in paths)
            {
                var directory = new DirectoryDescriptor(GuidGenerator.Create(), path, currentParentId, CurrentTenant.Id);
                result.Add(directory);
                currentParentId = directory.Id;
            }
            await this.DirectoryDescriptorRepository.InsertManyAsync(result, true);
            return result;

        }
    }
}