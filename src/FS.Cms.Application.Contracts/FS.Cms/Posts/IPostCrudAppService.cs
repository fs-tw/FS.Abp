
using FS.Cms.Posts.Dtos;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace FS.Cms.Posts
{
    public partial interface IPostCrudAppService 
    {
       // Task<PagedResultDto<PostWithDetailsDto>> GetPostByBlogDefinition(PostsWithBlogCodeDto input);
        Task Save(CmsImageModel input, Guid postId);
    }
}
