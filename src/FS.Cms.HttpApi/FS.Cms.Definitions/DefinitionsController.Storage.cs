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

    }
}
