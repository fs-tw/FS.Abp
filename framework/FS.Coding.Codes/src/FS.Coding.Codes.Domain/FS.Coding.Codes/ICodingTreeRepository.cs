using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FS.Coding.Codes
{
    public partial interface ICodingTreeRepository : 
        EasyAbp.Abp.Trees.ITreeRepository<FS.Coding.Codes.Coding>
    {
        Task<FS.Coding.Codes.Coding> FindByNoAsync(string no);
    }
}
