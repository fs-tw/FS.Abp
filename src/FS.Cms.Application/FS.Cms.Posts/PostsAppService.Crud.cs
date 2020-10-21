﻿using FS.Cms.Posts.Dtos;
using HtmlAgilityPack;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Users;

namespace FS.Cms.Posts
{
    public partial class PostsAppService : IPostCrudAppService
    {
        public override async Task<PagedResultDto<PostWithDetailsDto>> GetListAsync(PostGetListDto input)
        {
            var uer = currentUser.Id;
            var permission = await authorizationService.AuthorizeAsync("FS.Cms.Menu.前台內容管理.最新消息管理");
            var url = this.configuration["App:SelfUrl"];

            var query =  this.postsManager.CheckPublished_AtForPermission(input.BlogCodeId, permission.Succeeded);                
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

                if (item.DisplayMode == DisplayMode.內文)
                {
                    item.Content = item.Content.Replace("<img src='api", $"<img src='{url}/api");
                    item.Content = item.Content.Replace("<img src=\"api", $"<img src=\"{url}/api");
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

            var url = this.configuration["App:SelfUrl"];
            var post = this.postsRepository.WithDetails().Where(x => x.Id == id).First();           
            var output = ObjectMapper.Map<Post, Posts.Dtos.PostWithDetailsDto>(post);
            if (output.DisplayMode == DisplayMode.內文) 
            {
                output.Content = output.Content.Replace("<img src='api", $"<img src='{url}/api");
                output.Content = output.Content.Replace("<img src=\"api", $"<img src=\"{url}/api");
            }                
            return output;
        }


        private async Task<string> contentUrlToRelativeUrl(string content) 
        {
            var targetUrl = "api/themes-core/file";
            var htmlDoc = new HtmlDocument();
            htmlDoc.LoadHtml(content);
            var htmlNodes = htmlDoc.DocumentNode.SelectNodes("//img").ToList();
            foreach (var htmlNode in htmlNodes)
            {
                var imgUrl = htmlNode.Attributes["src"].Value;
                if (!imgUrl.StartsWith(targetUrl) && !imgUrl.StartsWith("data:image"))
                {
                    var firstIndex = imgUrl.IndexOf(targetUrl);
                    var newUrl = imgUrl.Substring(firstIndex);
                    content = content.Replace(imgUrl, newUrl);
                }
            }
            return content;
        }


        private async Task<string> contentBase64ToUrl(string content, Guid postId) 
        {
            string firstStr = "<img src=\"data";
            string lastStr = "\">";
            while (content.Contains(firstStr))
            {
                int firstIndex = content.IndexOf(firstStr);
                string lastContent = content.Substring(firstIndex);
                int lastIndex = lastContent.IndexOf(lastStr) + 2;
                string replaceData = content.Substring(firstIndex, lastIndex);
                var fileUrl = $"cms\\posts\\{postId}\\{guidGenerator.Create()}{checkFileType(replaceData)}";
                await this.fileManager.SaveBytesAsync(fileUrl, replaceData.Replace("\">", ""));
                var fileUrlOutput = fileUrl.Replace("\\", "%5C");
                content = content.Replace(replaceData, "<img src='api/themes-core/file/" + $"{fileUrlOutput}" + "'>");
            }
            return content;
        }
 

        public override async Task<Posts.Dtos.PostWithDetailsDto> CreateAsync(PostCreateDto input)
        {           
            Guid postId = guidGenerator.Create();
            if (input.DisplayMode == DisplayMode.內文)
            {
                input.Content = await this.contentBase64ToUrl(input.Content, postId);               
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

            if (post.DisplayMode == DisplayMode.內文)
            {
                post.Content = await this.contentUrlToRelativeUrl(post.Content);
                post.Content = await this.contentBase64ToUrl(post.Content, post.Id);               
            }
            post.TenantId = CurrentTenant.Id;
            await this.postsRepository.UpdateAsync(post).ConfigureAwait(false);
            return ObjectMapper.Map<Post, Posts.Dtos.PostWithDetailsDto>(post);
        }
        private string checkFileType(string input)
        {
            if (input.Contains("image/png")) return ".png";
            else if (input.Contains("image/gif")) return ".gif";
            else if (input.Contains("image/jpeg")) return ".jpg";
            else if (input.Contains("image/bmp")) return ".bmp";
            else return ".jpg";
        }

    }   
}
