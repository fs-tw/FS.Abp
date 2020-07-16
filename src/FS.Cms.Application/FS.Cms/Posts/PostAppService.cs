using FS.Abp.Application;
using FS.Cms.Posts;
using FS.Cms.Posts.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace FS.Cms.Posts
{
    public partial class PostCrudAppService: IPostCrudAppService
    {
        private ISearchedAndPagedAndSortedOperation _searchedAndPagedAndSortedOperation;

        public ISearchedAndPagedAndSortedOperation searchedAndPagedAndSortedOperation => LazyGetRequiredService(ref _searchedAndPagedAndSortedOperation);


        public override Task<PostWithDetailsDto> GetAsync(Guid id)
        {
            return base.GetAsync(id);
        }

        public override Task<PagedResultDto<PostWithDetailsDto>> GetListAsync(PostGetListInput input)
        {
            return base.GetListAsync(input);
        }

        public async Task<PagedResultDto<PostWithDetailsDto>> GetPostByBlogDefinition(PostsWithBlogCodeDto input)
        {
            await CheckGetListPolicyAsync().ConfigureAwait(false);
            var query = this.Repository
                            .WithDetails()
                            .WhereIf(input.BlogCodeId.HasValue, x => x.BlogCodeId == input.BlogCodeId);
            var entities = await this.searchedAndPagedAndSortedOperation.ListAsync(query, input).ConfigureAwait(false);
            var result = this.CreatePagedResultDto<PostWithDetailsDto>(entities);
            return result;
        }

        public async Task Save(CmsImageModel input, Guid postId)
        {
            var post = this.Repository.Where(x => x.Id == postId).FirstOrDefault();
            var newData = ObjectMapper.Map<List<Core.Dtos.CmsImageFieldDto>, List<Core.CmsImageField>>(input.ImgaeField);
            var removeDeleteImage = post.Images.
                 WhereIf(input.UploadImageInput.DeleteFiles.Count > 0, x => !input.UploadImageInput.DeleteFiles.Contains(x.Title)).ToList();

            post.Images = removeDeleteImage;
            post.Images.AddRange(newData);
            await this.Repository.UpdateAsync(post).ConfigureAwait(false);
        }


    }
}
