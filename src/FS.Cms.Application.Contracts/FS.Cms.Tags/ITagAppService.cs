using FS.Abp.CodingManagement.Coding;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FS.Cms.Tags
{
    public interface ITagAppService
    {
        Task<List<TagGroupDto>> TagGroupGetListAsync();
    }

 

}