using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;
namespace FS.Cms.Tags
{
    //public partial class TagAppService : CmsAppService
    //{


    //    public async Task PutTag(Guid id,TagForUpdateDto input) 
    //    {
    //        var definition = await CodingStore.Codes
    //          .GetOrInsertDefinitionAsync(CmsDefinition.CmsTagDefinition, CmsDefinition.CmsTagDefinition);
    //        var checkExists = definition.CodeList.Where(x => x.Id == id ).FirstOrDefault();
          
    //        if (checkExists == null) throw new UserFriendlyException(CmsDefinition.CmsTagDefinition + "下無此id" +id);
    //        var group = definition.Children.Where(x => x.Id == checkExists.ParentId).First();
    //        var checkName = group.Children.Where(x => x.DisplayName == input.Name).FirstOrDefault();
    //        if (checkName != null) throw new UserFriendlyException("不能有重複名稱！");

    //        checkExists.DisplayName = input.Name;
    //        checkExists.No = input.Name;

    //        await CodingStore.Codes.UpdateAsync(checkExists).ConfigureAwait(false);
    //    }

    //    public async Task TagDelete(Guid id)
    //    {
    //        var definition = await CodingStore.Codes
    //          .GetOrInsertDefinitionAsync(CmsDefinition.CmsTagDefinition, CmsDefinition.CmsTagDefinition);
    //        var checkExists = definition.CodeList.Where(x => x.Id == id).FirstOrDefault();

    //        if (checkExists == null) throw new UserFriendlyException(CmsDefinition.CmsTagDefinition + "下無此id" + id);
    //        var deleteTargetList = PostsStore.PostTagMap.Where(x => x.TagCodeId == checkExists.Id).ToList();

    //        foreach (var target in deleteTargetList) 
    //        {
    //            await PostsStore.PostTagMap.DeleteAsync(target).ConfigureAwait(false);
    //        }
    //        await this.CodingStore.Codes.DeleteAsync(checkExists).ConfigureAwait(false);           
    //    }

    //}
}
