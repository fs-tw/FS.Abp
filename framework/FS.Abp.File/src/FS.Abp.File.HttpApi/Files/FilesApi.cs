
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.FileManagement.Files;

namespace FS.Abp.File.Files
{

    [RemoteService]
    [Route("api/file/files")]
    [Area("file")]
    [ControllerName("FS.Abp.File.Files(file)")]
    public class FilesApi : FileController
    {
        protected IFileDescriptorAppService FileDescriptorAppService;
        private readonly IFilesAppService filesAppService;

        public FilesApi(
            IFileDescriptorAppService fileDescriptorAppService,
            IFilesAppService filesAppService)
        {
            FileDescriptorAppService = fileDescriptorAppService;
            this.filesAppService = filesAppService;
        }

        [HttpGet]
        [Route("file-content")]
        public virtual async Task<IActionResult> GetContentAsync(Guid id)
        {          
            try
            {
                var file = await this.filesAppService.GetAsync(id);
                var bytes = await filesAppService.GetContentAsync(id);
                string contentType;
                new FileExtensionContentTypeProvider().TryGetContentType(file.Name, out contentType);
                contentType = contentType ?? "application/octet-stream";
                return File(bytes, contentType, file.Name);
            }
            catch (Exception e)
            {
                throw new UserFriendlyException(
                     "沒有此檔案！"
                 );
            }

        }
    }
}
