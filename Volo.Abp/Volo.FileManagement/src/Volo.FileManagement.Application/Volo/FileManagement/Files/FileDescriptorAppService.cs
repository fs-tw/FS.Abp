using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.BlobStoring;
using Volo.Abp.Features;
using Volo.FileManagement.Authorization;

namespace Volo.FileManagement.Files
{
    [RequiresFeature(FileManagementFeatures.Enable)]
    [Authorize(FileManagementPermissions.FileDescriptor.Default)]
    public class FileDescriptorAppService : FileManagementAppService, IFileDescriptorAppService
    {
        protected IFileManager FileManager { get; }
        protected IFileDescriptorRepository FileDescriptorRepository { get; }
        protected IBlobContainer<FileManagementContainer> BlobContainer { get; }
        
        public FileDescriptorAppService(
            IFileManager fileManager, 
            IFileDescriptorRepository fileDescriptorRepository, 
            IBlobContainer<FileManagementContainer> blobContainer)
        {
            FileManager = fileManager;
            FileDescriptorRepository = fileDescriptorRepository;
            BlobContainer = blobContainer;
        }

        public virtual async Task<FileDescriptorDto> GetAsync(Guid id)
        {
            var fileDescriptor = await FileDescriptorRepository.GetAsync(id);

            return ObjectMapper.Map<FileDescriptor, FileDescriptorDto>(fileDescriptor);
        }

        public virtual async Task<ListResultDto<FileDescriptorDto>> GetListAsync(Guid? directoryId)
        {
            var fileDescriptors = ObjectMapper.Map<List<FileDescriptor>, List<FileDescriptorDto>>(
                await FileDescriptorRepository.GetListAsync(directoryId)
                );

            return new ListResultDto<FileDescriptorDto>(fileDescriptors);
        }
        
        [Authorize(FileManagementPermissions.FileDescriptor.Update)]
        public virtual async Task<FileDescriptorDto> RenameAsync(Guid id, RenameFileInput input)
        {
            var file = await FileDescriptorRepository.GetAsync(id);
            await FileManager.RenameAsync(file, input.Name);
            await FileDescriptorRepository.UpdateAsync(file);
            
            return ObjectMapper.Map<FileDescriptor, FileDescriptorDto>(file);
        }

        [Authorize(FileManagementPermissions.FileDescriptor.Delete)]
        public virtual async Task DeleteAsync(Guid id)
        {
            var file = await FileDescriptorRepository.GetAsync(id);
            
            await FileManager.DeleteAsync(file);
        }

        [Authorize(FileManagementPermissions.FileDescriptor.Create)]
        public virtual async Task<FileDescriptorDto> CreateAsync(CreateFileInput input)
        {
            await CheckSizeAsync(input.Content.Length);
            
            var fileDescriptor = await FileManager.CreateAsync(input.Name, input.MimeType, input.Content, input.DirectoryId, CurrentTenant.Id, overrideExisting: true);

            return ObjectMapper.Map<FileDescriptor, FileDescriptorDto>(fileDescriptor);
        }

        [Authorize(FileManagementPermissions.FileDescriptor.Update)]
        public virtual async Task<FileDescriptorDto> MoveAsync(MoveFileInput input)
        {
            var fileDescriptor = await FileDescriptorRepository.GetAsync(input.Id);
            
            await FileManager.MoveAsync(fileDescriptor, input.NewDirectoryId);
            await FileDescriptorRepository.UpdateAsync(fileDescriptor);
            
            return ObjectMapper.Map<FileDescriptor, FileDescriptorDto>(fileDescriptor);
        }

        public virtual async Task<List<FileUploadPreInfoDto>> GetPreInfoAsync(List<FileUploadPreInfoRequest> input)
        {
            var totalSize = input.Sum(x => x.Size);

            await CheckSizeAsync(totalSize);
            
            var result  = new List<FileUploadPreInfoDto>();

            foreach (var infoRequest in input)
            {
                result.Add(new FileUploadPreInfoDto
                {
                    FileName = infoRequest.FileName,
                    HasValidName = FileNameValidator.IsValidName(infoRequest.FileName),
                    DoesExist = (await FileDescriptorRepository.FindAsync(infoRequest.FileName, infoRequest.DirectoryId)) != null
                });
            }

            return result;
        }

        public virtual async Task<byte[]> GetContentAsync(Guid id)
        {
            return await BlobContainer.GetAllBytesAsync(id.ToString());
        }

        protected virtual async Task CheckSizeAsync(long contentLength)
        {
            if (contentLength > FileDescriptorConsts.MaxSizeLength)
            {
                throw new UserFriendlyException(L["FileTooBig", BeautifySize(FileDescriptorConsts.MaxSizeLength)]);;
            }
            
            var maxSizeDescription = await FeatureChecker.GetOrNullAsync(FileManagementFeatures.StorageSize);

            if (maxSizeDescription == null || maxSizeDescription == "0")
            {
                return;
            }

            var maxSize = long.Parse(maxSizeDescription);
            
            var totalStorage = await FileDescriptorRepository.GetTotalSizeAsync();

            if ((totalStorage + contentLength) < maxSize)
            {
                return;
            }

            var remainedSize = (maxSize - totalStorage);
            throw new NotEnoughStorageSizeException(BeautifySize(maxSize), BeautifySize(remainedSize));
        }

        protected virtual string BeautifySize(long size)
        {
            if (size == 0 || size == 1)
            {
                return $"{size} Byte";
            }

            if (size >= FileManagementConsts.Terabyte)
            {
                var fixedSize = ((float) size / (float) FileManagementConsts.Terabyte);
                return  $"{FormatSize(fixedSize)} TB";
            }

            if (size >= FileManagementConsts.Gigabyte)
            {
                var fixedSize = ((float) size / (float) FileManagementConsts.Gigabyte);
                return  $"{FormatSize(fixedSize)} GB";
            }

            if (size >= FileManagementConsts.Megabyte)
            {
                var fixedSize = ((float) size / (float) FileManagementConsts.Megabyte);
                return  $"{FormatSize(fixedSize)} MB";
            }

            if (size >= FileManagementConsts.Kilobyte)
            {
                var fixedSize = ((float) size / (float) FileManagementConsts.Kilobyte);
                return  $"{FormatSize(fixedSize)} KB";
            }

            return $"{size} B";
        }

        protected virtual string FormatSize(float size)
        {
            var s = $"{size:0.00}";

            return s.EndsWith("00") ? ((int)size).ToString() : s;
        }
    }
}
