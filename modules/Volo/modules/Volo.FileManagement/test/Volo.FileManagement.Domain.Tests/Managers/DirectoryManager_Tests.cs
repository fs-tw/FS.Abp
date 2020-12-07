using System;
using System.Linq;
using System.Threading.Tasks;
using Shouldly;
using Volo.Abp;
using Volo.FileManagement.Directories;
using Xunit;

namespace Volo.FileManagement.Managers
{
    public class DirectoryManager_Tests : FileManagementDomainTestBase
    {
        private readonly IDirectoryManager _directoryManager;
        private readonly IDirectoryDescriptorRepository _directoryDescriptorRepository;
        protected FileManagementTestData _testData;

        public DirectoryManager_Tests()
        {
            _directoryManager = GetRequiredService<IDirectoryManager>();
            _testData = GetRequiredService<FileManagementTestData>();
            _directoryDescriptorRepository = GetRequiredService<IDirectoryDescriptorRepository>();
        }

        [Fact]
        public async Task Should_Create_Directory()
        {
            var newDirectory = await _directoryManager.CreateAsync("Test Directory", _testData.Directory4Id);
            
            newDirectory.ShouldNotBeNull();
            newDirectory.Id.ShouldNotBe(Guid.Empty);
        }

        [Fact]
        public async Task Should_Not_Create_Directory()
        {
            Should.Throw<Exception>(async () => await _directoryManager.CreateAsync("Test / Directory", _testData.Directory4Id));
        }

        [Fact]
        public async Task Should_Rename()
        {
            var newName = "TEST-RENAME";
            var directory = new DirectoryDescriptor(_testData.Directory1Id, _testData.Directory1Name, _testData.Directory1_ParentId);

            await _directoryManager.RenameAsync(directory, newName);
            
            directory.Name.ShouldNotBe(_testData.Directory1Name);
            directory.Name.ShouldBe(newName);
        }
        
        [Fact]
        public async Task Should_Not_Rename()
        {
            var newName = "TEST/ * ' RENAME";
            
            var directory = new DirectoryDescriptor(_testData.Directory1Id, _testData.Directory1Name, _testData.Directory1_ParentId);
            
            Should.Throw<InvalidDirectoryNameException>(async () => await _directoryManager.RenameAsync(directory, newName));
        }

        [Fact]
        public async Task Should_Move()
        {
            var directory = new DirectoryDescriptor(_testData.Directory4Id, _testData.Directory4Name, _testData.Directory4_ParentId);

            await _directoryManager.MoveAsync(directory, null);
            
            directory.ParentId.ShouldNotBe(_testData.Directory4_ParentId);
            directory.ParentId.ShouldBeNull();
        }
        
        [Fact]
        public async Task Should_Not_Move()
        {
            var directory = new DirectoryDescriptor(_testData.Directory1Id, _testData.Directory1Name, _testData.Directory1_ParentId);
            
            Should.Throw<InvalidMoveException>(async () =>
                await _directoryManager.MoveAsync(directory, _testData.Directory2Id)
                );
        }

        [Fact]
        public async Task Should_Delete_With_All()
        {
            await _directoryManager.DeleteAsync(_testData.Directory1Id);

            Should.Throw<Exception>(async () => await _directoryDescriptorRepository.GetAsync(_testData.Directory1Id));
            Should.Throw<Exception>(async () => await _directoryDescriptorRepository.GetAsync(_testData.Directory2Id));
        }
    }
}