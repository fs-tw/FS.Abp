using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FS.Cms.Definition
{
    public interface IDefinitionAppService
    {
        Task<List<string>> BlogAsync();

        Task BlogCreateAsync(string displayName);

        Task BlogDeleteAsync(Guid id);
    }
}