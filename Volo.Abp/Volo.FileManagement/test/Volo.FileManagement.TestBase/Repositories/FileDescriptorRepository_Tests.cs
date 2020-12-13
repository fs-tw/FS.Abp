using System.Threading.Tasks;
using Shouldly;
using Volo.Abp.Modularity;
using Volo.FileManagement.Files;
using Xunit;

namespace Volo.FileManagement.Repositories
{
    public abstract class FileDescriptorRepository_Tests<TStartupModule> : FileManagementTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
        protected IFileDescriptorRepository _fileDescriptorRepository;

        protected FileManagementTestData _testData;

        public FileDescriptorRepository_Tests()
        {
            _fileDescriptorRepository = GetRequiredService<IFileDescriptorRepository>();
            _testData = GetRequiredService<FileManagementTestData>();
        }

        [Fact]
        public async Task Should_Find()
        {
            var file = await _fileDescriptorRepository.FindAsync(_testData.File1Name);
            
            file.ShouldNotBeNull();
        }
        
        [Fact]
        public async Task Should_Not_Find()
        {
            var file = await _fileDescriptorRepository.FindAsync("text.exe");
            
            file.ShouldBeNull();
        }

        [Fact]
        public async Task Should_Get_List()
        {
            var files = await _fileDescriptorRepository.GetListAsync(_testData.Directory3Id);
            
            files.Count.ShouldBe(2);
        }
    }
}