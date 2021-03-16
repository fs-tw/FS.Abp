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
        private IDirectoriesManager directoriesManager => this.LazyServiceProvider.LazyGetRequiredService<IDirectoriesManager>();
        
        public async Task<List<DirectoryProviderDefinition>> GetDefinitionsAsync()
        {
            return await directoryProviderDefinitionStore.GetDefinitionsAsync();
        }
        public async Task<Dtos.DirectoryDescriptorDto> FindByProviderAsync(string providerKey, string group = null)
        {
            var directory = await this.directoriesManager.FindByProviderAsync(providerKey, group);
           
            var datas= ObjectMapper.Map<List<DirectoryDescriptor>, List<Dtos.DirectoryDescriptorDto>>(directory);
            
            datas.ForEach(x =>
            {
                if (x.ParentId != null)
                    x.Parent = datas.Single(y => y.Id == x.ParentId);
            });

            return datas.Last();
        }     
    }
}