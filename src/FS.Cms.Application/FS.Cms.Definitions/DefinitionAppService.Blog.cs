using FS.Abp.CodingManagement.Coding;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static FS.Cms.Core.CmsSettingNames;

namespace FS.Cms.Definitions
{
    public partial class DefinitionsAppService : CmsAppService, IBlogAppService
    {
        public async Task<List<BlogDto>> BlogGetListAsync()
        {
            var permission = await authorizationService.AuthorizeAsync("FS.Cms.Menu.前台內容管理.最新消息管理");
            var definition = await CodingStore.Codes.GetDefinitionAsync(CmsDefinition.CmsBlogDefinition);
            var blogs = definition.CodeList;

            var result = blogs.Select(x =>
            {
                var sequence = 0;
                var listStyle = "";
                var url = "";
                var iconUrl = "";
                using (currentCodes.Change(x.Id))
                {
                    sequence = this.blogDefinitionSettingFactory.Value.Sequence;
                    listStyle = (this.blogDefinitionSettingFactory.Value.ListStyle ??= "");
                    url = (this.blogDefinitionSettingFactory.Value.Url ??= "");
                    iconUrl = (this.blogDefinitionSettingFactory.Value.IconUrl ??= "");
                }
                return new BlogDto() { 
                    CodesId = x.Id, 
                    DisplayName = x.DisplayName,
                    Description = x.Description,
                    Sequence = sequence, 
                    Url = url, 
                    ListStyle = listStyle,
                    Enable = x.Enable,
                    IconUrl = iconUrl
                };
            })
            .WhereIf(!permission.Succeeded,x=>x.Enable == true)
            .OrderBy(x => x.Sequence).ToList();

            if (permission.Succeeded  || definition.Enable != false) 
            {
              var definitionBlogData =  new BlogDto() { CodesId = definition.Id, DisplayName = "不分類", Sequence = 0, Url = "", ListStyle = "", Enable = definition.Enable };
              result = new List<BlogDto>() { definitionBlogData }.Concat(result).ToList();
                
            }
            
            return result;
        }

        public async Task<BlogDto> BlogGetAsync(Guid id)
        {
            var entity= await this.CodingStore.Codes.GetAsync(id);
            
            var sequence = 0;
            var listStyle = "";
            var url = "";
            var iconUrl = "";
            using (currentCodes.Change(entity.Id))
            {
                sequence = this.blogDefinitionSettingFactory.Value.Sequence;
                listStyle = (this.blogDefinitionSettingFactory.Value.ListStyle ??= "");
                url = (this.blogDefinitionSettingFactory.Value.Url ??= "");
                iconUrl = (this.blogDefinitionSettingFactory.Value.IconUrl ??= "");
            }

            BlogDto result = new BlogDto()
            {
                CodesId = entity.Id,
                DisplayName = entity.DisplayName,
                Description = entity.Description,
                Sequence = sequence,
                Enable = entity.Enable,
                ListStyle = listStyle,
                Url = url,
                IconUrl = iconUrl
            };
            
            return result;
        }

        public async Task BlogDeleteAsync(Guid id)
        {
            var blogCode = await this.CodingStore.Codes.GetAsync(id);
            var posts = this.postsRepository.Where(x => x.BlogCodeId == id).ToList();
            foreach (var post in posts)
            {
                post.BlogCodeId = blogCode.ParentId.Value;
                await this.postsRepository.UpdateAsync(post).ConfigureAwait(false);
            }
            await this.CodingStore.Codes.DeleteAsync(id, true);
        }

        public async Task<BlogDto> BlogCreateAsync(BlogCreateInput input)
        {
            var definition = await CodingStore.Codes.GetDefinitionAsync(CmsDefinition.CmsBlogDefinition);
            Codes codes = new Codes()
            {
                ParentId = definition.Id,
                DefinitionId = definition.Id,
                DisplayName = input.DisplayName,
                Description = input.Description,
                No = input.DisplayName,
                Enable = input.Enable,
                TenantId = CurrentTenant.Id
            };            
            await CodingStore.Codes.InsertAsync(codes, true);
            await this.settingManager.SetAsync(BlogDefinitionSetting.ListStyle, input.ListStyle, "Codes", codes.Id.ToString()).ConfigureAwait(false);
            await this.settingManager.SetAsync(BlogDefinitionSetting.Url, input.Url, "Codes", codes.Id.ToString()).ConfigureAwait(false);
            await this.settingManager.SetAsync(BlogDefinitionSetting.Sequence, input.Sequence.ToString(), "Codes", codes.Id.ToString()).ConfigureAwait(false);
            await this.settingManager.SetAsync(BlogDefinitionSetting.IconUrl, input.IconUrl, "Codes", codes.Id.ToString()).ConfigureAwait(false);

            return new BlogDto { CodesId = codes.Id, DisplayName = codes.DisplayName, Description = codes.Description, Url = input.Url, ListStyle = input.ListStyle, Sequence = input.Sequence, Enable = input.Enable, IconUrl = input.IconUrl };
        }

        public async Task<BlogDto> BlogUpdateAsync(Guid id, BlogUpdateInput input)
        {
            var entity = await this.CodingStore.Codes.GetAsync(id);
            entity.DisplayName = input.DisplayName;
            entity.Description = input.Description;
            entity.Enable = input.Enable;
            await CodingStore.Codes.UpdateAsync(entity, true);
            await this.settingManager.SetAsync(BlogDefinitionSetting.ListStyle, input.ListStyle, "Codes", entity.Id.ToString()).ConfigureAwait(false);
            await this.settingManager.SetAsync(BlogDefinitionSetting.Url, input.Url, "Codes", entity.Id.ToString()).ConfigureAwait(false);
            await this.settingManager.SetAsync(BlogDefinitionSetting.Sequence, input.Sequence.ToString(), "Codes", entity.Id.ToString()).ConfigureAwait(false);
            await this.settingManager.SetAsync(BlogDefinitionSetting.IconUrl, input.IconUrl, "Codes", entity.Id.ToString()).ConfigureAwait(false);
            return new BlogDto { CodesId = entity.Id, DisplayName = entity.DisplayName, Description = entity.Description, Url = input.Url, ListStyle = input.ListStyle,Sequence = input.Sequence, Enable = input.Enable, IconUrl = input.IconUrl };
        }
    }
}
