
using FS.Cms.Definitions;
using FS.Cms.Posts.Dtos;
using Shouldly;
using System.Threading.Tasks;
using Xunit;
 
namespace FS.Cms.Tags
{
    public class TagAppService_Tests : CmsApplicationTestBase
    {
        private readonly ITagAppService _tagsAppService;
        public TagAppService_Tests()
        {
            _tagsAppService = GetRequiredService<ITagAppService>();
        }

        [Fact]
        public async Task Tag_GetList_Async()
        {
            var group= await this._tagsAppService.TagGroupGetListAsync();
            group.Count.ShouldBe(2);
        }
    }
}
