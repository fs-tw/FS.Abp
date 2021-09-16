using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FS.CodingManagement.Codes
{
    public partial interface ICodingTreeRepository : 
        EasyAbp.Abp.Trees.ITreeRepository<FS.CodingManagement.Codes.Coding>
    {
        Task<Coding> FindByNoAsync(string no);
    }
}
