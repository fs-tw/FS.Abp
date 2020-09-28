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
using Volo.Abp.Data;

namespace FS.Cms.Posts
{
    [Obsolete]
    [RemoteService(true)]
    [Area("cms")]
    [Route("api/cms/PostCrud")]
    public class OldPostsController : CmsController
    {
        private readonly IDataSeeder _dataSeeder;

        //private IPostCrudAppService _postCrudAppService;
        private readonly IPostsAppService _postsAppService;

        public OldPostsController(
            //IPostCrudAppService postCrudAppService,
            IDataSeeder dataSeeder,
            IPostsAppService postsAppService
            )
        {
            this._dataSeeder = dataSeeder;
            //_postCrudAppService = postCrudAppService;
            this._postsAppService = postsAppService;
        }


        /// <summary>
        /// 建立貼文
        /// </summary>
        /// <param name="input">新增文章，設定發佈日期</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<Posts.Dtos.PostWithDetailsDto> Create(PostCreateDto input)
        {
            return await this._postsAppService.CreateAsync(input);
        }

        /// <summary>
        /// 更新文章
        /// </summary>
        /// <param name="id"></param>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpPut]      
        public async Task<Posts.Dtos.PostWithDetailsDto> Update(Guid id, PostUpdateDto input)
        {
            return await this._postsAppService.UpdateAsync(id, input);
        }

        [HttpDelete]
        public async Task Delete(Guid id)
        {
            await this._postsAppService.DeleteAsync(id);
        }

        /// <summary>
        /// 根據BlogDefinition 查詢文章(全部列出管理者用，不管發佈日期、隱藏)
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("PostByBlogDefinition")]
        public async Task<PagedResultDto<PostWithDetailsDto>> GetPostByBlogDefinition(PostsWithBlogCodeDto input)
        {
            return await this._postsAppService.GetListAsync(new PostGetListDto()
            {
                BlogCodeId = input.BlogCodeId,
                Fields = input.Fields,
                MaxResultCount = input.MaxResultCount,
                SkipCount = input.SkipCount,
                Sorting = input.Sorting,
                Value = input.Value
            });
        }

        /// <summary>
        /// 取得一筆文章
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("{id}")]
        public async Task<PostWithDetailsDto> GetAsync(Guid id)
        {
            return await this._postsAppService.GetAsync(id);
        }



        [HttpGet]
        [Route("dataseed")]
        public async Task dataseed()
        {
            await this._dataSeeder.SeedAsync();
        }

    }
}
