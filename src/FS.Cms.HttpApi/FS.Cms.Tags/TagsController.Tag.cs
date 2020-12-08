using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FS.Cms.Tags
{
    public partial class TagsApi
    {
        [HttpPut]
        [Route("tag/{id}")]
        public async Task PutTag(Guid id, TagForUpdateDto input)
        {
            await this.tagAppService.PutTag(id, input);
        }

        [HttpDelete]
        [Route("tag/{id}")]
        public async Task TagDelete(Guid id)
        {
            await this.tagAppService.TagDelete(id);
        }

    }
}
