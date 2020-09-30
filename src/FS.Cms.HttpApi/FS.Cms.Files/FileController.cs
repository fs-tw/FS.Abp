using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using System.IO;
using System.Net;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace FS.Cms.Files
{
    [Area("cms")]
    [Route("api/cms/file")]
    public class FileController : CmsController
    {
        private readonly IFileAppService _fileAppService;

        public FileController(IFileAppService themeAppService)
        {
            _fileAppService = themeAppService;
        }

        [HttpGet]
        [Route("{name}")]
        public async Task<IActionResult> Get(string name)
        {            
            var datas = await _fileAppService.GetBytesAsync(name);

            string contentType;
            new FileExtensionContentTypeProvider().TryGetContentType(name, out contentType);
            contentType = contentType ?? "application/octet-stream";

            return File(datas, contentType, name.Replace(@"/", "_"));
        }


        [HttpGet]
        [Route("base64/{name}")]
        public async Task<string> GetBase64(string name)
        {
            var datas = await _fileAppService.GetBase64Async(name);          
            return datas;
        }

        [HttpPut, DisableRequestSizeLimit]
        public async Task Put()
        {
            foreach (var file in Request.Form.Files)
            {
                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fileBytes = await file.GetAllBytesAsync().ConfigureAwait(false);
                    await _fileAppService.SaveBytesAsync(fileName, fileBytes);
                }
            }
        }

        /// <summary>
        /// notice:base64="data:image/png;......."
        /// </summary>
        /// <param name="name"></param>
        /// <param name="base64"></param>
        [HttpPut]
        [Route("{name}")]
        public void Put(string name, [FromBody] FilePutInput base64)
        {
            _fileAppService.SaveBytesAsync(name, base64.Base64);
        }

        [HttpDelete]
        [Route("{name}")]
        public async Task DeleteAsync(string name)
        {
            await _fileAppService.DeleteAsync(name);
        }

        public class FilePutInput
        {
            public string Base64 { get; set; }
        }
    }
}
