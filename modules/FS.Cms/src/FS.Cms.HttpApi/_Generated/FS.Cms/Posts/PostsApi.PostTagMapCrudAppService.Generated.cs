﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.2
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using FS.Cms.Posts.Dtos;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace FS.Cms.Posts
{
    public partial class PostsApi //: IPostTagMapCrudAppService //auto-generated 
    {
        [HttpGet]
        [Route("post-tag-map/id")]
        [NonAction][RemoteService(false)]
        public Task<PostTagMapWithDetailsDto> GetAsync([FromQuery] PostTagMapPrimaryKeyDto PostTagMapPrimaryKey)
        {
            return this.PostTagMapCrudAppService.GetAsync(PostTagMapPrimaryKey);
        }

        [HttpGet]
        [Route("post-tag-map")]
        [RemoteService(true)]
        public Task<PagedResultDto<PostTagMapWithDetailsDto>> GetListAsync(PostTagMapGetListDto PostTagMapGetList)
        {
            return this.PostTagMapCrudAppService.GetListAsync(PostTagMapGetList);
        }

        [HttpPost]
        [Route("post-tag-map")]
        [NonAction][RemoteService(false)]
        public Task<PostTagMapWithDetailsDto> CreateAsync(PostTagMapCreateDto PostTagMapCreate)
        {
            return this.PostTagMapCrudAppService.CreateAsync(PostTagMapCreate);
        }

        [HttpPut]
        [Route("post-tag-map/id")]
        [NonAction][RemoteService(false)]
        public Task<PostTagMapWithDetailsDto> UpdateAsync([FromQuery] PostTagMapPrimaryKeyDto PostTagMapPrimaryKey, PostTagMapUpdateDto PostTagMapUpdate)
        {
            return this.PostTagMapCrudAppService.UpdateAsync(PostTagMapPrimaryKey,PostTagMapUpdate);
        }

        [HttpDelete]
        [Route("post-tag-map/id")]
        [NonAction][RemoteService(false)]
        public Task DeleteAsync([FromQuery] PostTagMapPrimaryKeyDto PostTagMapPrimaryKey)
        {
            return this.PostTagMapCrudAppService.DeleteAsync(PostTagMapPrimaryKey);
        }
    }
}
