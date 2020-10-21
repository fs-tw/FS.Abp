using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using System.Linq;
using Shouldly;

namespace FS.Cms.Posts
{
    public class PostsManager_Tests: CmsDomainTestBase
    {
        private readonly IPostsManager _postsManager;
        public PostsManager_Tests()
        {
            _postsManager = GetRequiredService<IPostsManager>();
        }

        [Fact]
        public async Task Post_GetList_ForAnonymous_Async()
        {
            await WithUnitOfWorkAsync(() =>
            {
                var result = this._postsManager.CheckPublished_AtForPermission(null, false);
                result.ToList().Count().ShouldBe(2);
            });
        }
    }
}
