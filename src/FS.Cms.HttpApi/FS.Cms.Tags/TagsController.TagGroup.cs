using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FS.Cms.Tags
{
    public partial class TagsApi 
    {
        [HttpGet]
        [Route("tag-group")]
        public async Task<List<TagGroupDto>> TagGroupGetListAsync()
        {
            return await this.tagAppService.TagGroupGetListAsync();
        }
    }
}
