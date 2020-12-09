using FS.Abp.CodingManagement.Coding;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FS.Cms.Tags
{
    public interface ITagAppService
    {
        Task<List<TagGroupDto>> TagGroupGetListAsync();
        Task TagGroupCreateAsync(TagGroupForCreateDto input);
        Task TagGroupUpdateAsync(Guid id, TagGroupForUpdateDto input);
        Task TagGroupDelete(Guid id);
        Task<TagGroupDto> TagGroupGetByIdAsync(Guid id);
        Task TagGroupAddTags(Guid id, List<TagForCreateDto> tags);

        Task PutTag(Guid id, TagForUpdateDto input);
        Task TagDelete(Guid id);
    }

 

}