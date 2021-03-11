using FS.Cms.Posts.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace FS.Cms.Posts
{
    public partial interface IPostsApi
    {
        Task<PagedResultDto<PostWithDetailsDto>> GetPostsByBlogId(GetPostByBlogIdInput input);
    }
}
