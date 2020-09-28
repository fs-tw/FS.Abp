using FS.Abp.CodingManagement.Coding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FS.Cms.Definition
{
    public partial class DefinitionAppService : CmsAppService, IDefinitionAppService
    {
        public async Task<List<string>> BlogAsync()
        {
            var definition = await _codesService.GetDefinitionAsync("CmsDefinition");
            var blogs =definition.CodeList.Where(c => c.Parent.No == "News");
            return blogs.Select(x => x.DisplayName).ToList();
        }
        public async Task BlogCreateAsync(string displayName)
        {
            var definition = await _codesService.GetDefinitionAsync("CmsDefinition");
            Codes codes = new Codes()
            {
                ParentId = definition.Id,
                DisplayName = displayName,
                No = displayName
            };
            await _codesTreeRepository.InsertAsync(codes, true);
        }
        public async Task BlogDeleteAsync(Guid id)
        {
            await _codesTreeRepository.DeleteAsync(id, true);
        }

    }
}
