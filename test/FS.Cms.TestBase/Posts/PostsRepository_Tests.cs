using System.Threading.Tasks;
using Volo.Abp.Modularity;
using Xunit;
using FS.Abp.CodingManagement.Coding;
using Shouldly;
using FS.Cms.Posts;

namespace FS.Cms.Posts
{
    public abstract class PostsRepository_Tests<TStartupModule> : CmsTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {

        private readonly IPostRepository _postRepository;

        protected PostsRepository_Tests()
        {
            _postRepository = GetRequiredService<IPostRepository>();
        }

        [Fact]
        public async Task CmsPost_Should_Exist_Test()
        {
            var posts = await this._postRepository.GetListAsync();
            posts.Count.ShouldBe(3);
        }
    }
}
