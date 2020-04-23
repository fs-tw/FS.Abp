using FS.Abp.Application;
using FS.Cms.Posts;
using FS.Cms.Posts.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace FS.Cms.Posts
{
    public partial class PostCrudAppService 
    {
        private ISearchedAndPagedAndSortedOperation _searchedAndPagedAndSortedOperation;

        public ISearchedAndPagedAndSortedOperation SearchedAndPagedAndSortedOperation => LazyGetRequiredService(ref _searchedAndPagedAndSortedOperation);        


        public async Task<PagedResultDto<PostWithDetailsDto>> GetPostByBlogDefinition(PostsWithBlogCodeDto input)
        {
            await CheckGetListPolicyAsync().ConfigureAwait(false);
            var query = this.Repository
                            .WithDetails()
                            .Where(x => x.BlogCodeId == input.BlogCodeId);
            var entities = await this.SearchedAndPagedAndSortedOperation.ListAsync(query, input).ConfigureAwait(false);
            var result = this.CreatePagedResultDto<PostWithDetailsDto>(entities);
            return result;           
        }




    }
}
