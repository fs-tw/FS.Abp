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
using Volo.Abp.DependencyInjection;
using Volo.Abp.Features;
using Volo.FileManagement;
using Volo.FileManagement.Authorization;
using Volo.FileManagement.Files;

namespace FS.FileManagement.Files
{
    [Authorize(null)]
    //[Dependency(ReplaceServices =true)]
    //[ExposeServices(typeof(IFileDescriptorAppService))]
    public class FileDescriptorAppService :
        Volo.FileManagement.Files.FileDescriptorAppService,
        Volo.FileManagement.Files.IFileDescriptorAppService
    {
        public FileDescriptorAppService(
            IFileManager fileManager,
            IFileDescriptorRepository fileDescriptorRepository,
            IBlobContainer<FileManagementContainer> blobContainer)
            : base(fileManager, fileDescriptorRepository, blobContainer)
        {
        }

    }
}
