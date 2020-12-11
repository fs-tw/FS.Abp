﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using FS.Cms.Blogs.Dtos;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace FS.Cms.Blogs
{
    public partial class BlogsApi : IBlogCrudAppService //auto-generated 
    {
        [HttpGet]
        [Route("blog/id")]
        [RemoteService(false)]
        public Task<BlogWithDetailsDto> GetAsync([FromQuery] BlogPrimaryKeyDto BlogPrimaryKey)
        {
            return this.BlogCrudAppService.GetAsync(BlogPrimaryKey);
        }

        [HttpGet]
        [Route("blog")]
        [RemoteService(false)]
        [NonAction]
        public Task<PagedResultDto<BlogWithDetailsDto>> GetListAsync(BlogGetListDto BlogGetList)
        {
            return this.BlogCrudAppService.GetListAsync(BlogGetList);
        }

        [HttpPost]
        [Route("blog")]
        [RemoteService(false)]
        public Task<BlogWithDetailsDto> CreateAsync(BlogCreateDto BlogCreate)
        {
            return this.BlogCrudAppService.CreateAsync(BlogCreate);
        }

        [HttpPut]
        [Route("blog/id")]
        [RemoteService(false)]
        public Task<BlogWithDetailsDto> UpdateAsync([FromQuery] BlogPrimaryKeyDto BlogPrimaryKey, BlogUpdateDto BlogUpdate)
        {
            return this.BlogCrudAppService.UpdateAsync(BlogPrimaryKey,BlogUpdate);
        }

        [HttpDelete]
        [Route("blog/id")]
        [RemoteService(false)]
        public Task DeleteAsync([FromQuery] BlogPrimaryKeyDto BlogPrimaryKey)
        {
            return this.BlogCrudAppService.DeleteAsync(BlogPrimaryKey);
        }
    }
}
