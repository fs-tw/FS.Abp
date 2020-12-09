//using FS.Abp.CodingManagement.CodeSetting.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;
namespace FS.Cms.Tags
{
    public partial class TagAppService : CmsAppService
    {

        //public async Task TagGroupAddTags(Guid id,List<TagForCreateDto> tags) 
        //{
        //    var definition = await CodingStore.Codes
        //      .GetOrInsertDefinitionAsync(CmsDefinition.CmsTagDefinition, CmsDefinition.CmsTagDefinition);

        //    var groupCode = definition.Children.Where(x => x.Id == id).FirstOrDefault();
        //    if (groupCode == null) throw new UserFriendlyException("不存在Id為：" + id);

        //    var names = tags.Select(x=>x.Name).Distinct().ToList();

        //    foreach (var tagName in names) 
        //    {
        //        var check = groupCode.Children.Where(x => x.DisplayName == tagName).FirstOrDefault();
        //        if (check != null) continue;                
        //        CreateCodesModel codes = new CreateCodesModel();
        //        codes.No = tagName;
        //        codes.DisplayName = tagName;
        //        await CodingStore.CreateCodeSetting(definition.Id, groupCode.Id, codes);
        //    }

        //}

        //public async Task<TagGroupDto> TagGroupGetByIdAsync(Guid id) 
        //{
        //    var definition = await CodingStore.Codes
        //       .GetOrInsertDefinitionAsync(CmsDefinition.CmsTagDefinition, CmsDefinition.CmsTagDefinition);

        //    var checkExists = definition.Children.Where(x => x.Id == id).FirstOrDefault();
        //    if (checkExists == null) throw new UserFriendlyException("不存在Id為：" + id);

        //    TagGroupDto result = new TagGroupDto();
        //    result.Id = checkExists.Id;
        //    result.TagGroupName = checkExists.DisplayName;
        //    ObjectMapper.Map(checkExists.Children, result.Tags);
        //    return result;
        //}
        //public async Task<List<TagGroupDto>> TagGroupGetListAsync()
        //{
        //    var definition = await CodingStore.Codes
        //        .GetOrInsertDefinitionAsync(CmsDefinition.CmsTagDefinition, CmsDefinition.CmsTagDefinition);
        //    List<TagGroupDto> result = new List<TagGroupDto>();

        //    foreach (var item in definition.Children)
        //    {
        //        TagGroupDto group = new TagGroupDto();
        //        group.Id = item.Id;
        //        group.TagGroupName = item.DisplayName;
        //        ObjectMapper.Map(item.Children, group.Tags);
        //        result.Add(group);
        //    }

        //    return result;
        //}


        //public async Task TagGroupCreateAsync(TagGroupForCreateDto input)
        //{
        //    var definition = await CodingStore.Codes
        //        .GetOrInsertDefinitionAsync(CmsDefinition.CmsTagDefinition, CmsDefinition.CmsTagDefinition);

        //    var checkExists = definition.Children.Where(x => x.DisplayName == input.TagGroupName).FirstOrDefault();
        //    if (checkExists != null) throw new UserFriendlyException("已存在名為：" + input.TagGroupName);
        //    CreateCodesModel codes = new CreateCodesModel();
        //    ObjectMapper.Map(input, codes);
        //    await CodingStore.CreateCodeSetting(definition.Id, definition.Id, codes);
        //}


        //public async Task TagGroupUpdateAsync(Guid id, TagGroupForUpdateDto input)
        //{
        //    var definition = await CodingStore.Codes
        //        .GetOrInsertDefinitionAsync(CmsDefinition.CmsTagDefinition, CmsDefinition.CmsTagDefinition);

        //    var checkExists = definition.Children.Where(x => x.Id == id).FirstOrDefault();
        //    if (checkExists == null) throw new UserFriendlyException("不存在名為：" + input.TagGroupName);
        //    checkExists.DisplayName = input.TagGroupName;
        //    checkExists.No = input.TagGroupName;
        //    await this.CodingStore.Codes.UpdateAsync(checkExists);
        //}

        //public async Task TagGroupDelete(Guid id) 
        //{
        //    var definition = await CodingStore.Codes
        //        .GetOrInsertDefinitionAsync(CmsDefinition.CmsTagDefinition, CmsDefinition.CmsTagDefinition);

        //    var checkExists = definition.Children.Where(x => x.Id == id).FirstOrDefault();
        //    if (checkExists == null) throw new UserFriendlyException("不存在Id為：" + id);

        //    await this.CodingStore.Codes.DeleteAsync(checkExists).ConfigureAwait(false);

        //}

    }
}
