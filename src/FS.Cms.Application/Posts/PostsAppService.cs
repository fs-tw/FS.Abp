using FS.Abp.Application;
using FS.Cms.Posts.Dtos;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace FS.Cms.Posts
{

    public class PostsAppService : CmsAppService, IPostsAppService
    {

        private ISearchedAndPagedAndSortedOperation _searchedAndPagedAndSortedOperation;

        private ISearchedAndPagedAndSortedOperation searchedAndPagedAndSortedOperation => LazyGetRequiredService(ref _searchedAndPagedAndSortedOperation);


        private readonly IPostRepository postsRepository;
        private readonly IAuthorizationService authorizationService;

        public PostsAppService(
            IPostRepository postsRepository,
            IAuthorizationService authorizationService
            )
        {
            this.postsRepository = postsRepository;
            this.authorizationService = authorizationService;
        }


        public async Task<PagedResultDto<PostWithDetailsNoContentDto>> GetPostByBlogDefinition(PostsWithBlogCodeDto input)
        {

            var permission = await authorizationService.AuthorizeAsync("FS.Cms.Menu.前台內容管理.最新消息管理");
            var query = this.postsRepository
                            .WithDetails()
                            .WhereIf(input.BlogCodeId.HasValue, x => x.BlogCodeId == input.BlogCodeId)
                            .WhereIf(!permission.Succeeded, x => x.Published_At <= DateTime.Now && x.Published == true)
                            .OrderByDescending(x=>x.Published_At);
            var entities = await this.searchedAndPagedAndSortedOperation.ListAsync(query, input).ConfigureAwait(false);
            return new PagedResultDto<PostWithDetailsNoContentDto>()
            {
                TotalCount = entities.TotalCount,
                Items = ObjectMapper.Map<List<Posts.Post>, List<PostWithDetailsNoContentDto>>(entities.Entities)
            };
        }

        public async Task GetPostWithAttachmentFile(Guid id) 
        {
            
        }

    }
}
