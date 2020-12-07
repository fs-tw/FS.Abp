using System.Linq;
using System.Threading.Tasks;
using Shouldly;
using Volo.Abp.Modularity;
using Volo.FileManagement.Directories;
using Xunit;

namespace Volo.FileManagement.Repositories
{
    public abstract class DirectoryDescriptorRepository_Tests<TStartupModule> : FileManagementTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
        protected IDirectoryDescriptorRepository _directoryDescriptorRepository;

        protected FileManagementTestData _testData;

        public DirectoryDescriptorRepository_Tests()
        {
            _directoryDescriptorRepository = GetRequiredService<IDirectoryDescriptorRepository>();
            _testData = GetRequiredService<FileManagementTestData>();
        }

        [Fact]
        public async Task Should_Contains_Something()
        {
            var containsAny = await _directoryDescriptorRepository.ContainsAnyAsync(_testData.Directory1Id);
            var containsAny2 = await _directoryDescriptorRepository.ContainsAnyAsync(_testData.Directory3Id);

            containsAny.ShouldBe(true);
            containsAny2.ShouldBe(true);
        }

        [Fact]
        public async Task Should_Not_Contains_Something()
        {
            var containsAny = await _directoryDescriptorRepository.ContainsAnyAsync(_testData.Directory4Id);
            
            containsAny.ShouldBe(false);
        }

        [Fact]
        public async Task Should_Find()
        {
            var directory = await _directoryDescriptorRepository.FindAsync(_testData.Directory2Name, _testData.Directory2_ParentId);
            
            directory.ShouldNotBeNull();
        }
        
        [Fact]
        public async Task Should_Not_Find()
        {
            var directory = await _directoryDescriptorRepository.FindAsync("bugs", null);
            
            directory.ShouldBeNull();
        }
        
        [Fact]
        public async Task Should_Contains()
        {
            var contains = await _directoryDescriptorRepository.ContainsAnyAsync(_testData.Directory2Id);
            
            contains.ShouldBe(true);
        }
        
        [Fact]
        public async Task Should_Not_Contains()
        {
            var contains = await _directoryDescriptorRepository.ContainsAnyAsync(_testData.Directory4Id);
            
            contains.ShouldBe(false);
        }

        [Fact]
        public async Task Should_Get_Children()
        {
            var children = await _directoryDescriptorRepository.GetChildrenAsync(_testData.Directory1Id);
            
            children.Count.ShouldBe(1);
            
            children.Any(x => x.Id == _testData.Directory2Id).ShouldBe(true);
        }

        [Fact]
        public async Task Should_Get_All_Children()
        {
            var children = await _directoryDescriptorRepository.GetAllChildrenAsync(_testData.Directory1Id);
            
            children.Count.ShouldBe(3);
            children.Any(x => x.Id == _testData.Directory1Id).ShouldBeFalse();
        }
        
        [Fact]
        public async Task Should_Get_All_Children_Ids()
        {
            var childrenIds = await _directoryDescriptorRepository.GetAllChildrenIdsAsync(_testData.Directory1Id);
            
            childrenIds.Count.ShouldBe(3);
            childrenIds.Any(x => x == _testData.Directory1Id).ShouldBeFalse();
        }
    }
}