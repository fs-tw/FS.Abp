using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.FileManagement.Directories;
using Volo.FileManagement.Files;

namespace FS.Abp.File.Directories
{
    public class DirectoriesManager : DirectoryManager, IDirectoriesManager
    {
        public DirectoriesManager(
            IDirectoryDescriptorRepository directoryDescriptorRepository, IFileManager fileManager)
       : base(directoryDescriptorRepository, fileManager)
        {
        }
        private IDirectoryProviderDefinitionStore directoryProviderDefinitionStore => this.LazyServiceProvider.LazyGetRequiredService<IDirectoryProviderDefinitionStore>();




        public async Task<List<DirectoryDescriptor>> FindByProviderAsync(string providerKey, string group = null)
        {
            var directoryPath = (await directoryProviderDefinitionStore.GetDefinitionAsync(providerKey)).DirectoryPath;

            if (!string.IsNullOrEmpty(group))
                directoryPath = System.IO.Path.Combine(directoryPath, group);

            var separators = new char[] { Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar };

            var paths = directoryPath.Split(separators, System.StringSplitOptions.RemoveEmptyEntries).ToList();

            var directory = await getOrAddAsync(paths, null);

            return directory;
        }


        private async Task<List<DirectoryDescriptor>> getOrAddAsync(List<string> paths, System.Guid? parentId)
        {
            var currentParentId = parentId;
            List<DirectoryDescriptor> result = new List<DirectoryDescriptor>();
            foreach (var path in paths)
            {
                var target = await this.DirectoryDescriptorRepository.FindAsync(path, currentParentId);
                if (target == null)
                {
                    var fullPaths = paths.Skip(paths.IndexOf(path)).ToList();
                    var dirs = (await insertDirectoriesAsync(fullPaths, currentParentId));
                    result.AddRange(dirs);
                    return result;
                }
                currentParentId = target.Id;
                result.Add(target);
            }
            return result;
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
