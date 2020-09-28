using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FS.Cms.Definition
{
    public interface IDefinitionAppService : IBlogAppService
    {
    }
    public interface IBlogAppService
    {
        Task<List<BlogDto>> BlogGetListAsync();
        Task<BlogDto> BlogGetAsync(Guid id);
        Task<BlogDto> BlogCreateAsync(BlogCreateInput input);
        Task<BlogDto> BlogUpdateAsync(Guid id, BlogUpdateInput input);
        Task BlogDeleteAsync(Guid id);
    }
}