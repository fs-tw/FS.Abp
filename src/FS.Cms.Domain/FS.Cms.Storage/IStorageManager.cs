using FS.Abp.CodingManagement.Coding;
using FS.Abp.Core.Files;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FS.Cms.Storage
{
    public interface IStorageManager
    {
        Task<List<Codes>> GetFiles();
        Task CreateCodeFile(FileChangedEvent input);
        Task DeleteCodeFile(string FileName);
    }
}