
using FS.Cms.Blogs;
using FS.Cms.Definitions;
using FS.Cms.Posts.Dtos;
using Shouldly;
using System;
using System.Threading.Tasks;
using Xunit;

namespace FS.Cms.Posts
{
    public class PostAppService_Tests : CmsApplicationTestBase
    {
        private readonly IPostCrudAppService _postCrudAppService;
        private readonly IPostsAppService _postsAppService;
        private readonly IBlogCrudAppService _blogCrudAppService;

        public PostAppService_Tests()
        {
            _postCrudAppService = GetRequiredService<IPostCrudAppService>();
            _postsAppService = GetRequiredService<IPostsAppService>();
            _blogCrudAppService = GetRequiredService<IBlogCrudAppService>();

        }

        [Fact]
        public async Task ValdateGetPostsByBlogId()
        {

            #region DummyData
            var privateBlog = new Blogs.Dtos.BlogCreateDto()
            {
                Code = "00009",
                Description = "內部公告",
                Disable = true,
                No = "內部公告",
                DisplayName = "內部公告"
            };
            var blog = await this._blogCrudAppService.CreateAsync(privateBlog);
            var publicBlog = await this._blogCrudAppService.CreateAsync(new Blogs.Dtos.BlogCreateDto()
            {
                Code = "00010",
                Description = "外部公告",
                Disable = false,
                No = "外部公告",
                DisplayName = "外部公告"
            });

            var privatePost = new PostCreateDto()
            {
                BlogId = blog.Id,
                Disable = false,
                StartTime = DateTime.Now,
                Title = "內部公告"
            };
            var post = await this._postCrudAppService.CreateAsync(privatePost);
            await this._postCrudAppService.CreateAsync(new PostCreateDto()
            {
                BlogId = publicBlog.Id,
                Disable = false,
                StartTime = DateTime.Now,
                Title = "外部公告"
            });
            #endregion
            //測試資料:兩個部落格(disable 開啟關閉各一)，每個Blog含一則貼文

            //驗證API: Blog 關閉則Post不能被查出 : 查詢特定Blog(已關閉的不能被列出)
            var queryParams = new GetPostByBlogIdInput()
            {
                BlogId = blog.Id
            };
            var allpost = this._postsAppService.GetPostsByBlogId(queryParams, true);
            allpost.Result.Items.Count.ShouldBe(0);
            //驗證API: Blog 關閉則Post不能被查出 : 列出所有貼文(只有公開貼文被列出)
            var queryParams1 = new GetPostByBlogIdInput();
            var allpost1 = this._postsAppService.GetPostsByBlogId(queryParams1, true);
            allpost1.Result.Items.Count.ShouldBe(1);
        }
    }
}
