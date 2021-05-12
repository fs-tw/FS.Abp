using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FS.Abp.File;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.BlobStoring;
using Volo.Abp.Caching;
using Volo.Abp.Content;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Features;
using Volo.FileManagement;
using Volo.FileManagement.Authorization;
using Volo.FileManagement.Files;

namespace FS.Abp.File.Files
{
    //[Dependency(ReplaceServices =true)]
    //[ExposeServices(typeof(IFileDescriptorAppService))]
    public class FileDescriptorAppService :
        Volo.FileManagement.Files.FileDescriptorAppService,
        Volo.FileManagement.Files.IFileDescriptorAppService
    {
        public FileDescriptorAppService(
            IFileManager fileManager, 
            IFileDescriptorRepository fileDescriptorRepository, 
            IBlobContainer<FileManagementContainer> blobContainer, 
            IDistributedCache<FileDownloadTokenCacheItem, string> downloadTokenCache)
            : base(fileManager, fileDescriptorRepository, blobContainer,downloadTokenCache)
        {
        }

        [AllowAnonymous]
        public async override Task<FileDescriptorDto> GetAsync(Guid id)
        {
            return await base.GetAsync(id);
        }

        [AllowAnonymous]
        public override Task<byte[]> GetContentAsync(Guid id)
        {
            return base.GetContentAsync(id);
        }
    }
}
