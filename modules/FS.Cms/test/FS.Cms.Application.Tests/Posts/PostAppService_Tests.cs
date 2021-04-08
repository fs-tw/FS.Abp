
using FS.Cms.Blogs;
using FS.Cms.Definitions;
using FS.Cms.Posts.Dtos;
using Shouldly;
using System;
using System.Linq;
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

            // 測試資料︰兩個部落格(disable 開啟關閉各一)
            #region DummyData
            var privateBlog = await this._blogCrudAppService.CreateAsync(new Blogs.Dtos.BlogCreateDto()
            {
                Code = "00009",
                Description = "內部公告",
                Disable = true,
                No = "內部公告",
                DisplayName = "內部公告"
            });
            var publicBlog = await this._blogCrudAppService.CreateAsync(new Blogs.Dtos.BlogCreateDto()
            {
                Code = "00010",
                Description = "外部公告",
                Disable = false,
                No = "外部公告",
                DisplayName = "外部公告"
            });

            await this._postCrudAppService.CreateAsync(new PostCreateDto()
            {
                BlogId = privateBlog.Id,
                Disable = false,
                StartTime = DateTime.Now,
                Title = "內部公告"
            });
            await this._postCrudAppService.CreateAsync(new PostCreateDto()
            {
                BlogId = publicBlog.Id,
                Disable = false,
                StartTime = DateTime.Now,
                Title = "外部公告1"
            });
            await this._postCrudAppService.CreateAsync(new PostCreateDto()
            {
                BlogId = publicBlog.Id,
                Disable = false,
                StartTime = DateTime.Now,
                EndTime = DateTime.Now,
                Title = "外部公告2"
            });
            await this._postCrudAppService.CreateAsync(new PostCreateDto()
            {
                BlogId = publicBlog.Id,
                Disable = false,
                StartTime = DateTime.Now.AddDays(-3),
                EndTime = DateTime.Now.AddDays(-1),
                Title = "過期公告"
            });
            await this._postCrudAppService.CreateAsync(new PostCreateDto()
            {
                BlogId = publicBlog.Id,
                Disable = true,
                StartTime = DateTime.Now,
                Title = "未開放公告"
            });
            #endregion

            //驗證API: Blog 關閉則Post不能被查出 : 查詢特定Blog(已關閉的不能被列出)
            var queryParams1 = new GetPostByBlogIdInput()
            {
                BlogId = privateBlog.Id
            };
            var allpost1 = await this._postsAppService.GetPostsByBlogId(queryParams1, true);
            allpost1.Items.Count.ShouldBe(0);

            //驗證API: Blog 關閉則Post不能被查出 : 查詢特定Blog(未關閉的需被列出)
            var queryParams2 = new GetPostByBlogIdInput()
            {
                BlogId = publicBlog.Id
            };
            var allpost2 = await this._postsAppService.GetPostsByBlogId(queryParams2, true);
            allpost2.Items.Count.ShouldBe(2);

            //驗證API: Blog 關閉則Post不能被查出 : 列出所有貼文(外部公告 1, 2 被列出)
            var queryParams3 = new GetPostByBlogIdInput();
            var allpost3 = await this._postsAppService.GetPostsByBlogId(queryParams3, true);
            allpost3.Items.Count.ShouldBe(2);

            //驗證API: Blog 關閉則Post不能被查出 : 查詢所有貼文(只有 外部公告1 被列出)
            var queryParams4 = new GetPostByBlogIdInput()
            {
                Keyword = "外部公告1"
            };
            var allpost4 = await this._postsAppService.GetPostsByBlogId(queryParams4, true);
            allpost4.Items.Count.ShouldBe(1);

            //驗證API: Blog 關閉則Post不能被查出 : 貼文依建立時間反序，第一筆應為外部公告2
            var queryParams5 = new GetPostByBlogIdInput()
            {
                Sorting = "creationTime desc"
            };
            var allpost5 = await this._postsAppService.GetPostsByBlogId(queryParams5, true);
            allpost5.Items.Count.ShouldBe(2);
            allpost5.Items.First().Title.ShouldBe("外部公告2");
        }
    }
}
