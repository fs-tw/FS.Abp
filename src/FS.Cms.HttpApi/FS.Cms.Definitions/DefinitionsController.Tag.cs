using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FS.Cms.Definitions
{
    public partial class DefinitionsController : ITagAppService
    {
        [HttpGet]
        [Route("tags")]
        public Task<List<TagDto>> TagGetListAsync()
        {
            return this._appService.TagGetListAsync();
        }

        [HttpPost]
        [Route("tags")]
        public Task TagCreateAsync(TagForCreateDto input)
        {
            return this._appService.TagCreateAsync(input);
        }

        [HttpDelete]
        [Route("tags/{id}")]
        public Task TageDeleteAsync(Guid id)
        {
            return this._appService.TageDeleteAsync(id);
        }

        [HttpPut]
        [Route("tags")]
        public Task TagUpdateAsync(TagForUpdateDto input)
        {
            return this._appService.TagUpdateAsync(input);
        }
    }
}
