using FS.Cms.Definitions;
using Shouldly;
using System.Threading.Tasks;
using Xunit;

namespace FS.Cms.Samples
{
    public class PostAppService_Tests : CmsApplicationTestBase
    {
        //private readonly IDefinitionsAppService _definitionAppService;

        public PostAppService_Tests()
        {
          //  _definitionAppService = GetRequiredService<IDefinitionsAppService>();
        }

        [Fact]
        public async Task Blog_GetList_Async()
        {
            //var blogs = await _definitionAppService.BlogGetListAsync();
            //blogs.Count.ShouldBe(3);
        }
    }
}
