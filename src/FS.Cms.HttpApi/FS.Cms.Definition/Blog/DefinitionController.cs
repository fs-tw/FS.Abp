using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FS.Cms.Definition
{
    public partial class DefinitionController: IBlogAppService
    {
        [HttpGet]
        [Route("blog")]
        public async Task<List<BlogDto>> BlogGetListAsync()
        {
            return await this._appService.BlogGetListAsync();
        }

        [HttpGet]
        [Route("blog/{id}")]
        public async Task<BlogDto> BlogGetAsync(Guid id)
        {
            return await this._appService.BlogGetAsync(id);
        }

        [HttpPost]
        [Route("blog")]
        public Task<BlogDto> BlogCreateAsync(BlogCreateInput input)
        {
            return this._appService.BlogCreateAsync(input);
        }

        [HttpPut]
        [Route("blog/{id}")]
        public Task<BlogDto> BlogUpdateAsync(Guid id, BlogUpdateInput input)
        {
            return this._appService.BlogUpdateAsync(id, input);
        }

        [HttpDelete]
        [Route("blog/{id}")]
        public async Task BlogDeleteAsync(Guid id)
        {
            await this._appService.BlogDeleteAsync(id);
        }

    }
}
