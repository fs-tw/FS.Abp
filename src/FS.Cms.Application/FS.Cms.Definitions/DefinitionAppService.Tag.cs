using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FS.Cms.Definitions
{
    public partial class DefinitionsAppService : CmsAppService, ITagAppService
    {
        //todo tag api

        public async Task TagGetListAsync()
        {
            var definition = await CodingStore.Codes.GetDefinitionAsync(CmsDefinition.CmsTagDefinition);
            
        }
    }
}
