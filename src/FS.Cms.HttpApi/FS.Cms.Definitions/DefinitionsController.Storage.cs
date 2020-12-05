//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;
//using System;
//using System.Collections.Generic;
//using System.Threading.Tasks;

//namespace FS.Cms.Definitions
//{
//    public partial class DefinitionsController: IStorageAppService
//    {
       

//        [HttpGet]
//        [Route("storages")]        
//        public async Task<List<StorageDto>> GetFile()
//        {
//            return await this._appService.GetFile();
//        }


//        [Authorize]
//        [HttpPut]
//        [Route("storages/{fileName}")]
//        public async Task SetFileLock(PutStorageLockDto input, string fileName)
//        {
//            await this._appService.SetFileLock(input, fileName);
//        }

//        [Authorize]
//        [HttpPost]
//        [Route("storages/{fileName}")]
//        public async Task<StorageLockDto> CheckDeleteFile(string FileName)
//        {
//            return await this._appService.CheckDeleteFile(FileName);
//        }
//    }
//}
