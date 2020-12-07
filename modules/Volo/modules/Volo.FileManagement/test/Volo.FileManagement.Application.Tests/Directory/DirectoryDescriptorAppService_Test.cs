using System;
using System.Threading.Tasks;
using Shouldly;
using Volo.FileManagement.Directories;
using Volo.FileManagement.File;
using Volo.FileManagement.Files;
using Xunit;

namespace Volo.FileManagement.Directory
{
    public class DirectoryDescriptorAppService_Test : FileManagementApplicationTestBase
    {
        private readonly IDirectoryDescriptorAppService _appService;
        private readonly IFileDescriptorAppService _fileAppService;
        private readonly FileManagementTestData _testData;

        public DirectoryDescriptorAppService_Test()
        {
            _appService = GetRequiredService<IDirectoryDescriptorAppService>();
            _fileAppService = GetRequiredService<IFileDescriptorAppService>();
            _testData = GetRequiredService<FileManagementTestData>();
        }

        [Fact]
        public async Task Should_Not_Rename_Directory()
        {
            var newName = "ABP / FOLDER *+%2";
            
            var directory = await _appService.GetAsync(_testData.Directory1Id);

            Should.Throw<Exception>(async () =>
            {
                await _appService.RenameAsync(directory.Id, new RenameDirectoryInput { Name = newName });
            });
        }
        
        [Fact]
        public async Task Should_Rename_Directory()
        {
            var newName = "ABP FOLDER";
            
            var directory = await _appService.GetAsync(_testData.Directory1Id);

            await _appService.RenameAsync(directory.Id, new RenameDirectoryInput { Name = newName });

            var updatedDirectory = await _appService.GetAsync(_testData.Directory1Id);
            
            updatedDirectory.Name.ShouldNotBe(directory.Name);
            updatedDirectory.Name.ShouldBe(newName);
        }

        [Fact]
        public async Task Should_Delete_Recursively()
        {
            await _appService.DeleteAsync(_testData.Directory1Id);

            var directories = await _appService.GetListAsync(null);
            
            directories.Items.Count.ShouldBe(0);

            var files = await _fileAppService.GetListAsync(_testData.Directory1Id);
            
            files.Items.Count.ShouldBe(0);

            var subDirectoryFiles = await _fileAppService.GetListAsync(_testData.Directory3Id);
            
            subDirectoryFiles.Items.Count.ShouldBe(0);
        }

        [Fact]
        public async Task Should_Not_Move_To_Under_Child()
        {
            Should.Throw<Exception>(async () =>
            {
                await _appService.MoveAsync(new MoveDirectoryInput
                {
                    Id = _testData.Directory1Id,
                    NewParentId = _testData.Directory3Id
                });
            });
        }
        
        [Fact]
        public async Task Should_Move()
        {
            await _appService.MoveAsync(new MoveDirectoryInput
            {
                Id = _testData.Directory3Id,
                NewParentId = null
            });

            var directory = await _appService.GetAsync(_testData.Directory1Id);
            
            directory.ParentId.ShouldBeNull();
        }
    }
}