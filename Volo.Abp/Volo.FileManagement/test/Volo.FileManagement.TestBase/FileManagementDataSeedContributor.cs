using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Guids;
using Volo.FileManagement.Directories;
using Volo.FileManagement.Files;

namespace Volo.FileManagement
{
    public class FileManagementDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly FileManagementTestData _testData;

        private readonly IDirectoryDescriptorRepository _directoryDescriptorRepository;
        private readonly IFileDescriptorRepository _fileDescriptorRepository;
        
        public FileManagementDataSeedContributor(
            FileManagementTestData testData, 
            IDirectoryDescriptorRepository directoryDescriptorRepository, 
            IFileDescriptorRepository fileDescriptorRepository)
        {
            _testData = testData;
            _directoryDescriptorRepository = directoryDescriptorRepository;
            _fileDescriptorRepository = fileDescriptorRepository;
        }
        
        public async Task SeedAsync(DataSeedContext context)
        {
            await AddDirectories();
            await AddFiles();
        }

        private async Task AddDirectories()
        {
            var directory1 = new DirectoryDescriptor(_testData.Directory1Id, _testData.Directory1Name, _testData.Directory1_ParentId);
            var directory2 = new DirectoryDescriptor(_testData.Directory2Id, _testData.Directory2Name, _testData.Directory2_ParentId);
            var directory3 = new DirectoryDescriptor(_testData.Directory3Id, _testData.Directory3Name, _testData.Directory3_ParentId);
            var directory4 = new DirectoryDescriptor(_testData.Directory4Id, _testData.Directory4Name, _testData.Directory4_ParentId);

            await _directoryDescriptorRepository.InsertAsync(directory1);
            await _directoryDescriptorRepository.InsertAsync(directory2);
            await _directoryDescriptorRepository.InsertAsync(directory3);
            await _directoryDescriptorRepository.InsertAsync(directory4);
        }

        private async Task AddFiles()
        {
            var file1 = new FileDescriptor(_testData.File1Id, _testData.File1Name, "text/markdown", _testData.File1_DirectoryId);
            var file2 = new FileDescriptor(_testData.File2Id, _testData.File2Name, "text/markdown", _testData.File2_DirectoryId);
            var file3 = new FileDescriptor(_testData.File3Id, _testData.File3Name, "text/markdown", _testData.File3_DirectoryId);
            var file4 = new FileDescriptor(_testData.File4Id, _testData.File4Name, "text/markdown", _testData.File4_DirectoryId);
            var file5 = new FileDescriptor(_testData.File5Id, _testData.File5Name, "text/markdown", _testData.File5_DirectoryId);

            await _fileDescriptorRepository.InsertAsync(file1);
            await _fileDescriptorRepository.InsertAsync(file2);
            await _fileDescriptorRepository.InsertAsync(file3);
            await _fileDescriptorRepository.InsertAsync(file4);
            await _fileDescriptorRepository.InsertAsync(file5);
        }
    }
}