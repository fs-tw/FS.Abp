using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace FS.Abp.Coding
{
    public partial interface ICodesTreeRepository : 
        EasyAbp.Abp.Trees.ITreeRepository<Codes>
    {
        Task<List<Codes>> GetDefinitionsAsync(
               bool includeDetails = true,
               CancellationToken cancellationToken = default);

        Task<Codes> GetDefinitionAsync(
            string definitionNo,
            bool includeDetails = true,
            CancellationToken cancellationToken = default);

        Task<Codes> GetWithDescendantsAsync(
                    string no,
                    CancellationToken cancellationToken = default);

        Task<Codes> GetOrInsertDefinitionAsync(
            string no,
            string displayName = null,
            string description = null,
            bool autoSave = true,
            bool includeDetails = true,
            CancellationToken cancellationToken = default);
    }
}
