
using FS.Cms.Posts.Dtos;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace FS.Cms.Posts
{
    public partial interface IPostCrudAppService : 
        FS.Abp.Application.Services.ICrudAppService<FS.Cms.Posts.Dtos.PostWithDetailsDto, Guid, FS.Cms.Posts.Dtos.PostGetListInput, FS.Cms.Posts.Dtos.PostCreateInput, FS.Cms.Posts.Dtos.PostUpdateInput>
    {
        public Task<PagedResultDto<PostWithDetailsDto>> GetPostByBlogDefinition(PostsWithBlogCodeDto input);
        public Task Save(List<Core.Dtos.ImageFieldDto> images, Guid postId, UploadImageInput input);
    }
}
