using System.Threading.Tasks;
using Volo.Abp.Modularity;
using Xunit;
using FS.Abp.CodingManagement.Coding;
using Shouldly;
using FS.Cms.Posts;

namespace FS.Cms.Posts
{
    public abstract class PostsStore_Tests<TStartupModule> : CmsTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {

        private readonly IPostsStore _postsStore;

        protected PostsStore_Tests()
        {
            _postsStore = GetRequiredService<IPostsStore>();
        }

        [Fact(Skip ="待完成")]
        public async Task Should_Has_Datas()
        {
            //assert
            (await this._postsStore.Post.GetCountAsync().ConfigureAwait(false)).ShouldBeGreaterThan(0);
            (await this._postsStore.PostTagMap.GetCountAsync().ConfigureAwait(false)).ShouldBeGreaterThan(0);
        }
    }
}
