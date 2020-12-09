﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using FS.Cms.Tags.Dtos;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace FS.Cms.Tags
{
    public partial class TagsApi : ITagCrudAppService //auto-generated 
    {
        [HttpGet]
        [Route("tag/id")]
        [RemoteService(false)]
        public Task<TagWithDetailsDto> GetAsync([FromQuery] TagPrimaryKeyDto TagPrimaryKey)
        {
            return this.TagCrudAppService.GetAsync(TagPrimaryKey);
        }

        [HttpGet]
        [Route("tag")]
        [RemoteService(false)]
        public Task<PagedResultDto<TagWithDetailsDto>> GetListAsync(TagGetListDto TagGetList)
        {
            return this.TagCrudAppService.GetListAsync(TagGetList);
        }

        [HttpPost]
        [Route("tag")]
        [RemoteService(false)]
        public Task<TagWithDetailsDto> CreateAsync(TagCreateDto TagCreate)
        {
            return this.TagCrudAppService.CreateAsync(TagCreate);
        }

        [HttpPut]
        [Route("tag/id")]
        [RemoteService(false)]
        public Task<TagWithDetailsDto> UpdateAsync([FromQuery] TagPrimaryKeyDto TagPrimaryKey, TagUpdateDto TagUpdate)
        {
            return this.TagCrudAppService.UpdateAsync(TagPrimaryKey,TagUpdate);
        }

        [HttpDelete]
        [Route("tag/id")]
        [RemoteService(false)]
        public Task DeleteAsync([FromQuery] TagPrimaryKeyDto TagPrimaryKey)
        {
            return this.TagCrudAppService.DeleteAsync(TagPrimaryKey);
        }
    }
}
