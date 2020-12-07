using System;
using System.Threading.Tasks;
using Shouldly;
using Volo.FileManagement.Directories;
using Volo.FileManagement.Directory;
using Volo.FileManagement.Files;
using Xunit;

namespace Volo.FileManagement.File
{
    public class FileDescriptorAppService_Test : FileManagementApplicationTestBase
    {
        private readonly IDirectoryDescriptorAppService _directoryAppService;
        private readonly IFileDescriptorAppService _appService;
        private readonly FileManagementTestData _testData;
        
        public FileDescriptorAppService_Test()
        {
            _directoryAppService = GetRequiredService<IDirectoryDescriptorAppService>();
            _appService = GetRequiredService<IFileDescriptorAppService>();
            _testData = GetRequiredService<FileManagementTestData>();
        }

        [Fact]
        public async Task Should_Rename()
        {
            var newFileName = "ABP - README.md";
            var file = await _appService.GetAsync(_testData.File1Id);

            await _appService.RenameAsync(file.Id, new RenameFileInput
            {
                Name = newFileName
            });

            var updatedFile = await _appService.GetAsync(_testData.File1Id);
            
            updatedFile.Name.ShouldNotBe(file.Name);
            updatedFile.Name.ShouldBe(newFileName);
        }
        
        [Fact]
        public async Task Should_Not_Rename_Directory()
        {
            var newName = "DOCS /^ *+%2";
            
            Should.Throw<Exception>(async () =>
            {
                await _appService.RenameAsync(_testData.File1Id, new RenameFileInput { Name = newName });
            });
        }

        [Fact]
        public async Task Should_Move()
        {
            var file = await _appService.GetAsync(_testData.File1Id);
            
            var movedFile = await _appService.MoveAsync(new MoveFileInput
            {
                Id = _testData.File1Id,
                NewDirectoryId = _testData.File5_DirectoryId
            });
            
            movedFile.DirectoryId.ShouldNotBe(file.DirectoryId);
            movedFile.DirectoryId.ShouldBe(_testData.File5_DirectoryId);
        }

        [Fact]
        public async Task Should_Delete()
        {
            await _appService.DeleteAsync(_testData.File1Id);

            Should.Throw<Exception>(async () =>
            {
                await _appService.GetAsync(_testData.File1Id);
            });
        }
    }
}