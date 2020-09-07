using FS.Abp.Application;
using FS.Cms.Posts.Dtos;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Guids;

namespace FS.Cms.Posts
{

    public class PostsAppService : CmsAppService, IPostsAppService
    {

        private ISearchedAndPagedAndSortedOperation _searchedAndPagedAndSortedOperation;

        private ISearchedAndPagedAndSortedOperation searchedAndPagedAndSortedOperation => LazyGetRequiredService(ref _searchedAndPagedAndSortedOperation);


        private readonly IPostRepository postsRepository;
        private readonly IGuidGenerator guidGenerator;
        private readonly IPostAttachmentFilesManager postAttachmentFilesManager;
        private readonly IAuthorizationService authorizationService;

        public PostsAppService(
            IPostRepository postsRepository,
            IGuidGenerator guidGenerator,
            IPostAttachmentFilesManager postAttachmentFilesManager,
            IAuthorizationService authorizationService
            )
        {
            this.postsRepository = postsRepository;
            this.guidGenerator = guidGenerator;
            this.postAttachmentFilesManager = postAttachmentFilesManager;
            this.authorizationService = authorizationService;
        }


        public async Task<PagedResultDto<PostWithDetailsNoContentDto>> GetPostByBlogDefinition(PostsWithBlogCodeDto input)
        {

            var permission = await authorizationService.AuthorizeAsync("FS.Cms.Menu.前台內容管理.最新消息管理");
            var query = this.postsRepository
                            .WithDetails()
                            .WhereIf(input.BlogCodeId.HasValue, x => x.BlogCodeId == input.BlogCodeId)
                            .WhereIf(!permission.Succeeded, x => x.Published_At <= DateTime.Now && x.Published == true)
                            .OrderByDescending(x=>x.LastModificationTime);
            var entities = await this.searchedAndPagedAndSortedOperation.ListAsync(query, input).ConfigureAwait(false);
            return new PagedResultDto<PostWithDetailsNoContentDto>()
            {
                TotalCount = entities.TotalCount,
                Items = ObjectMapper.Map<List<Posts.Post>, List<PostWithDetailsNoContentDto>>(entities.Entities)
            };
        }


        public async Task<PostWithDetailsDto> GetAsync(Guid id) 
        {
            var post = this.postsRepository.WithDetails().Where(x => x.Id == id).First();
            var output = ObjectMapper.Map<Post, Posts.Dtos.PostWithDetailsDto>(post);
            if (post.DisplayMode == DisplayMode.內文)
            {
                string firstStr = "{postAttachmentFileId:";
                string lastStr = "}";
                while (output.Content.Contains(firstStr))
                {
                    int firstIndex = output.Content.IndexOf(firstStr);
                    string lastContent = output.Content.Substring(firstIndex);
                    int lastIndex = lastContent.IndexOf(lastStr) +1;
                    string replaceData = output.Content.Substring(firstIndex, lastIndex);
                    var guidStr = replaceData.Substring(firstStr.Length, 36);
                    var postAttachmentFile = this.postAttachmentFilesManager.GetByStrId(guidStr);
                    output.Content = output.Content.Replace(replaceData, postAttachmentFile.Content);
                }
            }
            return output;
        }

        public async Task<Posts.Dtos.PostWithDetailsDto> CreateAsync(PostCreateInput input)
        {
            Guid postId = guidGenerator.Create();
            if (input.DisplayMode == DisplayMode.內文) 
            {              
                string firstStr = "<img src=\"";
                string lastStr = "\">";
                while (input.Content.Contains(firstStr)) 
                {
                    int firstIndex = input.Content.IndexOf(firstStr);
                    string lastContent = input.Content.Substring(firstIndex);
                    int lastIndex = lastContent.IndexOf(lastStr) + 2;

                    string replaceData = input.Content.Substring(firstIndex, lastIndex);
                    var postAttachmentFile = await this.postAttachmentFilesManager.CreateOneAsync(replaceData, postId);
                    var imageId = "{postAttachmentFileId:" + postAttachmentFile.Id.ToString() + "}";
                    input.Content = input.Content.Replace(replaceData, imageId);
                }
            }

            var entityInput = ObjectMapper.Map<PostCreateInput, Post>(input);
            EntityHelper.TrySetId(entityInput, () => postId, true);
            await this.postsRepository.InsertAsync(entityInput).ConfigureAwait(false);
            return ObjectMapper.Map<Post, Posts.Dtos.PostWithDetailsDto>(entityInput);
        }


        public async Task<Posts.Dtos.PostWithDetailsDto> UpdateAsync(Guid id,PostUpdateInput input)
        {
            var post = this.postsRepository.Where(x => x.Id == id).First();
            ObjectMapper.Map(input, post);
            List<string> deleteTargetList = new List<string>();
            await this.postAttachmentFilesManager.DeleteListByPostId(id);

            if (post.DisplayMode == DisplayMode.內文)
            {
                string firstStr = "<img src=\"";
                string lastStr = "\">";
                while (post.Content.Contains(firstStr))
                {
                    int firstIndex = post.Content.IndexOf(firstStr);
                    string lastContent = post.Content.Substring(firstIndex);
                    int lastIndex = lastContent.IndexOf(lastStr) + 2;

                    string replaceData = post.Content.Substring(firstIndex, lastIndex);
                    var postAttachmentFile = await this.postAttachmentFilesManager.CreateOneAsync(replaceData, id);
                    var imageId = "{postAttachmentFileId:" + postAttachmentFile.Id.ToString() + "}";
                    post.Content = post.Content.Replace(replaceData, imageId);
                }
            }
                      
            await this.postsRepository.UpdateAsync(post).ConfigureAwait(false);
            return ObjectMapper.Map<Post, Posts.Dtos.PostWithDetailsDto>(post);
        }

    }
}
