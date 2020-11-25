using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FS.Cms.Definitions
{
    public partial class DefinitionsController: IStorageAppService
    {

        [HttpGet]
        [Route("storages")]
        public async Task<List<StorageDto>> GetFile()
        {
            return await this._appService.GetFile();
        }


        //[HttpPost]
        //[Route("storages/{fileName}")]
        //public async Task SetFileLock(PutStorageLockDto input,string fileName)
        //{
        //     await this._appService.SetFileLock(input, fileName);
        //}

        //[HttpPost]
        //[Route("storages/{fileName}")]
        //public async Task<StorageLockDto> CheckDeleteFile(string fileName)
        //{
        //    return await this._appService.CheckDeleteFile(fileName);
        //}
    }
}
