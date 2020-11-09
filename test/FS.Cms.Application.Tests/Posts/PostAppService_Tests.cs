
using FS.Cms.Definitions;
using FS.Cms.Posts.Dtos;
using Shouldly;
using System.Threading.Tasks;
using Xunit;
 
namespace FS.Cms.Posts
{
    public class PostAppService_Tests : CmsApplicationTestBase
    {
        private readonly IPostsAppService _postsAppService;
        public PostAppService_Tests()
        {
            _postsAppService = GetRequiredService<IPostsAppService>();
        }

        [Fact]
        public async Task Post_GetList_ForAdmin_Async()
        {
            //var posts = await _postsAppService.GetListAsync(new PostGetListDto()
            //{
            //    MaxResultCount = 10,
            //    Value = "",
            //    BlogCodeId = null,
            //    Fields = "",
            //    SkipCount = 0,
            //    Sorting = ""
            //});
            //posts.Items.Count.ShouldBe(3);

        }
    }
}
