using FS.Abp.CodingManagement.Coding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FS.Cms.Definition
{
    public partial class DefinitionAppService : CmsAppService, IBlogAppService
    {
        public async Task<List<BlogDto>> BlogGetListAsync()
        {
            var definition = await _codesService.GetDefinitionAsync("CmsDefinition");
            var blogs = definition.CodeList.Where(c => c.Parent.No == "News");
            return blogs.Select(x => new BlogDto() { CodesId = x.Id, DisplayName = x.DisplayName }).ToList();
        }

        public async Task<BlogDto> BlogGetAsync(Guid id)
        {
            var entity= await this._codesTreeRepository.GetAsync(id);
            BlogDto result = new BlogDto()
            {
                CodesId = entity.Id,
                DisplayName = entity.DisplayName
            };
            return result;
        }

        public async Task BlogCreateAsync(BlogCreateInput input)
        {
            var definition = await _codesService.GetDefinitionAsync("CmsDefinition");
            Codes codes = new Codes()
            {
                ParentId = definition.Id,
                DisplayName = input.DisplayName,
                No = input.DisplayName
            };
            await _codesTreeRepository.InsertAsync(codes, true);
        }

        public async Task BlogUpdateAsync(Guid id, BlogUpdateInput input)
        {
            var entity = await this._codesTreeRepository.GetAsync(id);
            entity.DisplayName = input.DisplayName;
            await _codesTreeRepository.UpdateAsync(entity, true);
        }

        public async Task BlogDeleteAsync(Guid id)
        {
            await _codesTreeRepository.DeleteAsync(id, true);
        }
    }
}
