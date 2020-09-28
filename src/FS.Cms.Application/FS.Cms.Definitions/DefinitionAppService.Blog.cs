using FS.Abp.CodingManagement.Coding;
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
                return new BlogDto() { CodesId = x.Id, DisplayName = x.DisplayName, Sequence = sequence, Url = url, ListStyle = listStyle };
            }).OrderBy(x => x.Sequence).ToList();

            return result;
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
                TenantId = CurrentTenant.Id
            };            
            await _codesTreeRepository.InsertAsync(codes, true);
            await this.settingManager.SetAsync(BlogDefinitionSetting.ListStyle, input.ListStyle, "Codes", codes.Id.ToString()).ConfigureAwait(false);
            await this.settingManager.SetAsync(BlogDefinitionSetting.Url, input.Url, "Codes", codes.Id.ToString()).ConfigureAwait(false);
            await this.settingManager.SetAsync(BlogDefinitionSetting.Sequence, input.Sequence.ToString(), "Codes", codes.Id.ToString()).ConfigureAwait(false);

            return new BlogDto { CodesId = codes.Id, DisplayName = codes.DisplayName, Url = input.Url, ListStyle = input.ListStyle, Sequence = input.Sequence };
        }

        public async Task<BlogDto> BlogUpdateAsync(Guid id, BlogUpdateInput input)
        {
            var entity = await this._codesTreeRepository.GetAsync(id);
            entity.DisplayName = input.DisplayName;
            await _codesTreeRepository.UpdateAsync(entity, true);
            await this.settingManager.SetAsync(BlogDefinitionSetting.ListStyle, input.ListStyle, "Codes", entity.Id.ToString()).ConfigureAwait(false);
            await this.settingManager.SetAsync(BlogDefinitionSetting.Url, input.Url, "Codes", entity.Id.ToString()).ConfigureAwait(false);
            await this.settingManager.SetAsync(BlogDefinitionSetting.Sequence, input.Sequence.ToString(), "Codes", entity.Id.ToString()).ConfigureAwait(false);
            return new BlogDto { CodesId = entity.Id, DisplayName = entity.DisplayName, Url = input.Url, ListStyle = input.ListStyle,Sequence = input.Sequence };
        }
    }
}
