using FS.Cms.Posts;
using FS.Cms.Posts.Dtos;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;

namespace FS.Cms.Posts
{
    [RemoteService(true)]
    [Area("cms")]
    [Route("api/cms/PostCrud")]    
    public class PostsController : CmsController
    {
        private IPostCrudAppService _postCrudAppService; 
        public PostsController(
            IPostCrudAppService postCrudAppService
            )
        {
            _postCrudAppService = postCrudAppService;
        }

        [HttpPost]
        //[Route("")]
        
        public async Task<Posts.Dtos.PostWithDetailsDto> Create(PostCreateInput input)
        {
            return await this._postCrudAppService.CreateAsync(input);
        }

        [HttpPut]      
        public async Task<Posts.Dtos.PostWithDetailsDto> Update(Guid id, PostUpdateInput input)
        {
            return await this._postCrudAppService.UpdateAsync(id, input);
        }

        [HttpDelete]
        public async Task Delete(Guid id)
        {
            await this._postCrudAppService.DeleteAsync(id);
        }

        [HttpPost]
        [Route("PostByBlogDefinition")]
        public async Task<PagedResultDto<PostWithDetailsDto>> GetPostByBlogDefinition(PostsWithBlogCodeDto input)
        {
            return await this._postCrudAppService.GetPostByBlogDefinition(input);
        }

    }
}
