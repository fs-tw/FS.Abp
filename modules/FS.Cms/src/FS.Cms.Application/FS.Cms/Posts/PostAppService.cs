﻿using FS.Cms.Posts.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace FS.Cms.Posts
{
    public class PostAppService : CmsAppService, IPostAppService
    {
        private IPostsStore _postsStore => this.LazyServiceProvider.LazyGetRequiredService<IPostsStore>();

        public async Task<PagedResultDto<PostWithDetailsDto>> GetPostsByBlogId(GetPostByBlogIdInput input)
        {
            var query = (await this._postsStore.Post.WithDetailsAsync())
                .WhereIf(input.BlogId.HasValue, x => x.BlogId == input.BlogId)
                .WhereIf(!String.IsNullOrEmpty(input.Keyword), x => x.Title.ToLower().Contains(input.Keyword.Trim().ToLower()));

            var totalCount = await this.AsyncExecuter.CountAsync(query);

            var items = await this.AsyncExecuter.ToListAsync(query
                .Skip(input.SkipCount)
                .Take(input.MaxResultCount));

            return new PagedResultDto<PostWithDetailsDto>()
            {
                TotalCount = totalCount,
                Items = ObjectMapper.Map<List<Post>, List<PostWithDetailsDto>>(items)
            };
        }


        

    }
}
