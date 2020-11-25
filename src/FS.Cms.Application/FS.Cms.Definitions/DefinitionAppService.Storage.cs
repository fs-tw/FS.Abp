using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FS.Cms.Definitions
{
    public partial class DefinitionsAppService : CmsAppService, IStorageAppService
    {

        public async Task<List<StorageDto>> GetFile() 
        {
            var codes = await this.StorageManager.GetFiles();
            
            var result = codes.Select(x => 
            {
                var fileUrl = FileManager.GetFileApiUrl(x.No);
                return new StorageDto()
                {
                    FileName = x.DisplayName,
                    FileUrl = fileUrl,
                    Id = x.Id,
                    CreationTime = x.CreationTime,
                    FileSizeStr = x.Description
                };
            }).ToList();

            return result;
        }
       
    }
}
