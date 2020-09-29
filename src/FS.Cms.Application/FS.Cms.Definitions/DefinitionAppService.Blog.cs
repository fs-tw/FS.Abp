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
            var definition = await _codesService.GetDefinitionAsync("CmsBlogDefinition");
            var blogs = definition.CodeList;

            var result = blogs.Select(x =>
            {
                var sequence = 0;
                var listStyle = "";
                var url = "";
                using (currentCodes.Change(x.Id))
                {
                    sequence = this.blogDefinitionSettingFactory.Value.Sequence;
                    listStyle = (this.blogDefinitionSettingFactory.Value.ListStyle ??= "");
                    url = (this.blogDefinitionSettingFactory.Value.Url ??= "");
                }
                return new BlogDto() { CodesId = x.Id, DisplayName = x.DisplayName, Sequence = sequence, Url = url, ListStyle = listStyle,Enable = x.Enable };
            })
            .WhereIf(!permission.Succeeded,x=>x.Enable == true)
            .ToList();

            if (permission.Succeeded  || definition.Enable != false) 
            {
              var definitionBlogData =  new BlogDto() { CodesId = definition.Id, DisplayName = "不分類", Sequence = 0, Url = "", ListStyle = "", Enable = definition.Enable };
              result.Add(definitionBlogData);
            }

            return result.OrderBy(x => x.Sequence).ToList();
        }

        public async Task<BlogDto> BlogGetAsync(Guid id)
        {
            var entity= await this._codesTreeRepository.GetAsync(id);
            
            var sequence = 0;
            var listStyle = "";
            var url = "";
            using (currentCodes.Change(entity.Id))
            {
                sequence = this.blogDefinitionSettingFactory.Value.Sequence;
                listStyle = (this.blogDefinitionSettingFactory.Value.ListStyle ??= "");
                url = (this.blogDefinitionSettingFactory.Value.Url ??= "");
            }

            BlogDto result = new BlogDto()
            {
                CodesId = entity.Id,
                DisplayName = entity.DisplayName,
                Sequence = sequence,
                Enable = entity.Enable,
                ListStyle = listStyle,
                Url = url
            };
            
            return result;
        }

        public async Task BlogDeleteAsync(Guid id)
        {
            var blogCode = await _codesTreeRepository.GetAsync(id);
            var posts = this.postsRepository.Where(x => x.BlogCodeId == id).ToList();
            foreach (var post in posts)
            {
                post.BlogCodeId = blogCode.ParentId.Value;
                await this.postsRepository.UpdateAsync(post).ConfigureAwait(false);
            }
            await _codesTreeRepository.DeleteAsync(id, true);
        }

        public async Task<BlogDto> BlogCreateAsync(BlogCreateInput input)
        {
            var definition = await _codesService.GetDefinitionAsync("CmsBlogDefinition");
            Codes codes = new Codes()
            {
                ParentId = definition.Id,
                DefinitionId = definition.Id,
                DisplayName = input.DisplayName,
                No = input.DisplayName,
                Enable = input.Enable,
                TenantId = CurrentTenant.Id
            };            
            await _codesTreeRepository.InsertAsync(codes, true);
            await this.settingManager.SetAsync(BlogDefinitionSetting.ListStyle, input.ListStyle, "Codes", codes.Id.ToString()).ConfigureAwait(false);
            await this.settingManager.SetAsync(BlogDefinitionSetting.Url, input.Url, "Codes", codes.Id.ToString()).ConfigureAwait(false);
            await this.settingManager.SetAsync(BlogDefinitionSetting.Sequence, input.Sequence.ToString(), "Codes", codes.Id.ToString()).ConfigureAwait(false);

            return new BlogDto { CodesId = codes.Id, DisplayName = codes.DisplayName, Url = input.Url, ListStyle = input.ListStyle, Sequence = input.Sequence, Enable = input.Enable };
        }

        public async Task<BlogDto> BlogUpdateAsync(Guid id, BlogUpdateInput input)
        {
            var entity = await this._codesTreeRepository.GetAsync(id);
            entity.DisplayName = input.DisplayName;
            entity.Enable = input.Enable;
            await _codesTreeRepository.UpdateAsync(entity, true);
            await this.settingManager.SetAsync(BlogDefinitionSetting.ListStyle, input.ListStyle, "Codes", entity.Id.ToString()).ConfigureAwait(false);
            await this.settingManager.SetAsync(BlogDefinitionSetting.Url, input.Url, "Codes", entity.Id.ToString()).ConfigureAwait(false);
            await this.settingManager.SetAsync(BlogDefinitionSetting.Sequence, input.Sequence.ToString(), "Codes", entity.Id.ToString()).ConfigureAwait(false);
            return new BlogDto { CodesId = entity.Id, DisplayName = entity.DisplayName, Url = input.Url, ListStyle = input.ListStyle,Sequence = input.Sequence, Enable = input.Enable };
        }
    }
}
