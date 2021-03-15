using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FS.Abp.File;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.BlobStoring;
using Volo.Abp.Content;
using Volo.Abp.Features;
using Volo.FileManagement.Authorization;

namespace Volo.FileManagement.Files
{

    public class FilesAppService : FileAppService, IFilesAppService
    {
        protected IFileManager FileManager { get; }
        protected IFileDescriptorRepository FileDescriptorRepository { get; }
        protected IBlobContainer<FileManagementContainer> BlobContainer { get; }

        public FilesAppService(
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






        public virtual async Task<RemoteStreamContent> DownloadAsync(Guid id)
        {
            var stream = await BlobContainer.GetAsync(id.ToString());

            return new RemoteStreamContent(stream);
        }








        public virtual async Task<byte[]> GetContentAsync(Guid id)
        {
            return await BlobContainer.GetAllBytesAsync(id.ToString());
        }

        protected virtual async Task CheckSizeAsync(long contentLength)
        {
            if (contentLength > FileDescriptorConsts.MaxSizeLength)
            {
                throw new UserFriendlyException(L["FileTooBig", BeautifySize(FileDescriptorConsts.MaxSizeLength)]); ;
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
                var fixedSize = ((float)size / (float)FileManagementConsts.Terabyte);
                return $"{FormatSize(fixedSize)} TB";
            }

            if (size >= FileManagementConsts.Gigabyte)
            {
                var fixedSize = ((float)size / (float)FileManagementConsts.Gigabyte);
                return $"{FormatSize(fixedSize)} GB";
            }

            if (size >= FileManagementConsts.Megabyte)
            {
                var fixedSize = ((float)size / (float)FileManagementConsts.Megabyte);
                return $"{FormatSize(fixedSize)} MB";
            }

            if (size >= FileManagementConsts.Kilobyte)
            {
                var fixedSize = ((float)size / (float)FileManagementConsts.Kilobyte);
                return $"{FormatSize(fixedSize)} KB";
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
