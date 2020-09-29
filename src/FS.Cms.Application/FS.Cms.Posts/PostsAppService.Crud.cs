using FS.Cms.Posts.Dtos;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;

namespace FS.Cms.Posts
{
    public partial class PostsAppService : IPostCrudAppService
    {
        public override async Task<PagedResultDto<PostWithDetailsDto>> GetListAsync(PostGetListDto input)
        {
            var permission = await authorizationService.AuthorizeAsync("FS.Cms.Menu.前台內容管理.最新消息管理");

            var blogIds = this.postsRepository.Select(x => x.BlogCodeId).Distinct().ToList();
            var blogCodes = this.codesTreeRepository.Where(x => blogIds.Any(b => b == x.Id) && x.Enable == true).Select(x => x.Id).ToList();

            var query = this.postsRepository
                            .WithDetails()
                            .WhereIf(!permission.Succeeded, x => blogCodes.Any(b => x.BlogCodeId == b))
                            .WhereIf(input.BlogCodeId.HasValue, x => x.BlogCodeId == input.BlogCodeId)
                            .WhereIf(!permission.Succeeded, x => x.Published_At <= DateTime.Now && x.Published == true)
                            .OrderBy(x => x.Sequence);
                            //.OrderByDescending(x => x.LastModificationTime);


            var entities = await this.SearchedAndPagedAndSortedOperation.ListAsync(query, input).ConfigureAwait(false);

            var result = ObjectMapper.Map<List<Posts.Post>, List<PostWithDetailsDto>>(entities.Entities);
            foreach (var item in result)
            {
                var blogCode = this.codesTreeRepository.Where(x => x.Id == item.BlogCodeId).FirstOrDefault();
                if (blogCode.ParentId != null)
                {
                    item.BlogDisplayName = blogCode.DisplayName;
                }
                else
                {
                    item.BlogDisplayName = "不分類";
                }
            }
            return new PagedResultDto<PostWithDetailsDto>()
            {
                TotalCount = entities.TotalCount,
                Items = result
            };
        }

        public override async Task<PostWithDetailsDto> GetAsync(Guid id)
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
                    int lastIndex = lastContent.IndexOf(lastStr) + 1;
                    string replaceData = output.Content.Substring(firstIndex, lastIndex);
                    var guidStr = replaceData.Substring(firstStr.Length, 36);
                    var postAttachmentFile = this.postAttachmentFilesManager.GetByStrId(guidStr);
                    output.Content = output.Content.Replace(replaceData, postAttachmentFile.Content);
                }
            }
            return output;
        }

        public override async Task<Posts.Dtos.PostWithDetailsDto> CreateAsync(PostCreateDto input)
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

            var entityInput = ObjectMapper.Map<PostCreateDto, Post>(input);
            
            EntityHelper.TrySetId(entityInput, () => postId, true);
            entityInput.TenantId = CurrentTenant.Id;
            await this.postsRepository.InsertAsync(entityInput).ConfigureAwait(false);
            return ObjectMapper.Map<Post, Posts.Dtos.PostWithDetailsDto>(entityInput);
        }

        public override async Task<Posts.Dtos.PostWithDetailsDto> UpdateAsync(Guid id, PostUpdateDto input)
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
            post.TenantId = CurrentTenant.Id;
            await this.postsRepository.UpdateAsync(post).ConfigureAwait(false);
            return ObjectMapper.Map<Post, Posts.Dtos.PostWithDetailsDto>(post);
        }
    }
}
