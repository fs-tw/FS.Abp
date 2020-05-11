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


        public async Task<PagedResultDto<PostWithDetailsDto>> GetPostByBlogDefinition(PostsWithBlogCodeDto input)
        {
            await CheckGetListPolicyAsync().ConfigureAwait(false);
            var query = this.Repository
                            .WithDetails()
                            .Where(x => x.BlogCodeId == input.BlogCodeId);
            var entities = await this.searchedAndPagedAndSortedOperation.ListAsync(query, input).ConfigureAwait(false);
            var result = this.CreatePagedResultDto<PostWithDetailsDto>(entities);
            return result;           
        }

        public async Task Save(List<Core.Dtos.ImageFieldDto> images,Guid postId, UploadImageInput uploadImageInput) 
        {
            Post input = new Post();
            var post = this.Repository.Where(x => x.Id == postId).FirstOrDefault();

            var newData = ObjectMapper.Map<List<Core.Dtos.ImageFieldDto>, List<Core.ImageField>>(images);

          
           var removeDeleteImage = post.Images.
                WhereIf(uploadImageInput.DeleteFiles.Count > 0,x=> !uploadImageInput.DeleteFiles.Contains(x.Title)).ToList();

            post.Images= removeDeleteImage;
            post.Images.AddRange(newData);

            //post.Images.AddRange(); 
            await this.Repository.UpdateAsync(post).ConfigureAwait(false);
        }


    }
}
