using FS.Abp.CodingManagement.CodeSetting.Models;
using FS.Abp.CodingManagement.Coding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;
namespace FS.Cms.Definitions
{
    public partial class DefinitionsAppService : CmsAppService, ITagAppService
    {
       

        public async Task<List<TagDto>> TagGetListAsync()
        {
            var definition = await CodingStore.Codes
                .GetOrInsertDefinitionAsync(CmsDefinition.CmsTagDefinition, CmsDefinition.CmsTagDefinition);
            List<TagDto> result = new List<TagDto>();

            ObjectMapper.Map(definition.Children, result);
            return result;
        }

        //目前新增只到兩層
        public async Task TagCreateAsync(TagForCreateDto input) 
        {
            var definition = await CodingStore.Codes
                .GetOrInsertDefinitionAsync(CmsDefinition.CmsTagDefinition, CmsDefinition.CmsTagDefinition);
            CreateCodesModel codes = new CreateCodesModel();
            ObjectMapper.Map(input, codes);
            await CodingStore.CreateCodeSetting(definition.Id, definition.Id, codes);
        }


        //目前修改只到兩層
        public async Task TagUpdateAsync(TagForUpdateDto input) 
        {
            var definition = await CodingStore.Codes
                .GetOrInsertDefinitionAsync(CmsDefinition.CmsTagDefinition, CmsDefinition.CmsTagDefinition);
            var targetCode = definition.Children.Where(x => x.Id == input.Id).FirstOrDefault();
            if (targetCode == null) throw new UserFriendlyException("無此Tag！！");

            ObjectMapper.Map(input, targetCode);
            await CodingStore.Codes.UpdateAsync(targetCode).ConfigureAwait(false);

            foreach (var item in input.Tags) 
            {
                if (item.Id == null)
                {
                    //新增
                    Codes code = new Codes();
                    ObjectMapper.Map(item, code);
                    code.DefinitionId = definition.Id;
                    code.ParentId = targetCode.Id;
                    await CodingStore.Codes.InsertAsync(code).ConfigureAwait(false);
                }
                else 
                {
                    //修改
                    var child = targetCode.Children.Where(x => x.Id == item.Id).FirstOrDefault();
                    if (child == null) throw new UserFriendlyException("無此Tag Id："+child.Id);
                    ObjectMapper.Map(item, child);
                    await CodingStore.Codes.UpdateAsync(child).ConfigureAwait(false);
                }
                
            }
        }

        public async Task TageDeleteAsync(Guid id) 
        {
            var targetCode = CodingStore.Codes.Where(x => x.Id == id).FirstOrDefault();
            if (targetCode == null) throw new UserFriendlyException("無此Tag！！");
            else if (targetCode.ParentId == null) throw new UserFriendlyException("此code為definition 無法刪除");

            await CodingStore.Codes.DeleteAsync(id).ConfigureAwait(false);
        }
       
    }
}
