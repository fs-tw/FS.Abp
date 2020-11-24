using FS.Abp.CodingManagement.Coding;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FS.Cms.Storage
{
    public interface IStorageManager
    {
        Task<List<Codes>> GetFiles();
        Task CreateCodeFile(string FileName);
        Task DeleteCodeFile(string FileName);
    }
}