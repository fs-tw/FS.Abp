﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 2.0.1
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
    public partial class PostsApi : IPostCrudAppService //auto-generated 
    {
        [HttpGet]
        [Route("post/id")]
        [RemoteService(true)]
        public Task<PostWithDetailsDto> GetAsync([FromQuery] PostPrimaryKeyDto PostPrimaryKey)
        {
            return this.PostCrudAppService.GetAsync(PostPrimaryKey);
        }

        [HttpGet]
        [Route("post")]
        [RemoteService(true)]
        public Task<PagedResultDto<PostWithDetailsDto>> GetListAsync(PostGetListDto PostGetList)
        {
            return this.PostCrudAppService.GetListAsync(PostGetList);
        }

        [HttpPost]
        [Route("post")]
        [RemoteService(true)]
        public Task<PostWithDetailsDto> CreateAsync(PostCreateDto PostCreate)
        {
            return this.PostCrudAppService.CreateAsync(PostCreate);
        }

        [HttpPut]
        [Route("post/id")]
        [RemoteService(false)]
        public Task<PostWithDetailsDto> UpdateAsync([FromQuery] PostPrimaryKeyDto PostPrimaryKey, PostUpdateDto PostUpdate)
        {
            return this.PostCrudAppService.UpdateAsync(PostPrimaryKey,PostUpdate);
        }

        [HttpDelete]
        [Route("post/id")]
        [RemoteService(true)]
        public Task DeleteAsync([FromQuery] PostPrimaryKeyDto PostPrimaryKey)
        {
            return this.PostCrudAppService.DeleteAsync(PostPrimaryKey);
        }
    }
}
