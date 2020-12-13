using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Internal;
using Shouldly;
using Volo.Abp;
using Volo.Abp.BlobStoring;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Uow;
using Volo.FileManagement.Directories;
using Volo.FileManagement.Files;
using Xunit;

namespace Volo.FileManagement.Managers
{
    public class FileManager_Tests : FileManagementDomainTestBase
    {
        private readonly IFileManager _fileManager;
        private readonly IDirectoryManager _directoryManager;
        private readonly FileManagementTestData _testData;
        private readonly IFileDescriptorRepository _fileDescriptorRepository;
        protected ICurrentTenant CurrentTenant { get; }
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        
        public FileManager_Tests()
        {
            _fileManager = GetRequiredService<IFileManager>();
            _directoryManager = GetRequiredService<IDirectoryManager>();
            _testData = GetRequiredService<FileManagementTestData>();
            _fileDescriptorRepository = GetRequiredService<IFileDescriptorRepository>();
            CurrentTenant = GetRequiredService<ICurrentTenant>();
            _unitOfWorkManager = GetRequiredService<IUnitOfWorkManager>();
        }
        
        [Fact]
        public async Task Should_Not_Create_File()
        {
            Should.Throw<Exception>(async () => await _fileManager.CreateAsync("My New * file", "qs", "new content".GetBytes()));
        }

        [Fact]
        public async Task Should_Rename()
        {
            var newName = "TEST Rename.bat";
            
            var file = await _fileDescriptorRepository.GetAsync(_testData.File1Id);

            await _fileManager.RenameAsync(file, newName);
            
            file.Name.ShouldBe(newName);
        }
        
        [Fact]
        public async Task Should_Not_Rename()
        {
            var newName = "TEST /*? Name";
            
            var file = await _fileDescriptorRepository.GetAsync(_testData.File1Id);
            
            Should.Throw<InvalidFileNameException>(async () => await _fileManager.RenameAsync(file, newName));
        }
        
        [Fact]
        public async Task Should_Delete_By_Directory()
        {
            await _fileManager.DeleteAllAsync(_testData.Directory3Id);

            Should.Throw<Exception>(async () => await _fileDescriptorRepository.GetAsync(_testData.File4Id));
            Should.Throw<Exception>(async () => await _fileDescriptorRepository.GetAsync(_testData.File5Id));
        }
        
        [Fact]
        public async Task Should_Delete()
        {
            var file = await _fileDescriptorRepository.GetAsync(_testData.File4Id);
            await _fileManager.DeleteAsync(file);

            Should.Throw<Exception>(async () => await _fileDescriptorRepository.GetAsync(_testData.File4Id));
        }
        
        [Fact]
        public async Task Should_Move()
        {
            var file = await _fileDescriptorRepository.GetAsync(_testData.File4Id);
                
            await _fileManager.MoveAsync(file, null);
            await _fileDescriptorRepository.UpdateAsync(file);
            
            var movedFile = await _fileDescriptorRepository.GetAsync(_testData.File4Id);
            
            movedFile.DirectoryId.ShouldNotBe(_testData.File4_DirectoryId);
            movedFile.DirectoryId.ShouldBeNull();
        }

        [Fact]
        public async Task Should_Not_Move_To_Other_Tenant_Directory()
        {
            var file = await _fileDescriptorRepository.GetAsync(_testData.File4Id);

            var tenantId = Guid.NewGuid();
            
            Guid directoryId;
            
            using (CurrentTenant.Change(tenantId))
            {
                using (var uow = _unitOfWorkManager.Begin())
                {
                    var directory = await _directoryManager.CreateAsync("q", null, tenantId);

                    directoryId = directory.Id;
                    await uow.CompleteAsync();
                }
            }
            
            Should.Throw<DirectoryNotExistException>(async () => await _fileManager.MoveAsync(file, directoryId));
        }
    }
}