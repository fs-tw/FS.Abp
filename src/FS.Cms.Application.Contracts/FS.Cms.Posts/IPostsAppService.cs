using System.Threading.Tasks;
using FS.Abp.Application;
using FS.Cms.Posts.Dtos;
using Volo.Abp.Application.Dtos;

namespace FS.Cms.Posts
{
    public interface IPostsAppService
    {
        Task<PostWithDetailsDto> CreateAsync(PostCreateDto input);
        Task<PostWithDetailsDto> GetAsync(System.Guid id);
        Task<PagedResultDto<PostWithDetailsDto>> GetPostByBlogDefinition(PostsWithBlogCodeDto input);
        Task<PostWithDetailsDto> UpdateAsync(System.Guid id, PostUpdateDto input);
    }
}