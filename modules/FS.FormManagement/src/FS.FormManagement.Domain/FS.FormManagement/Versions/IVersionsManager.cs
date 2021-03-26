using JetBrains.Annotations;
using System;
using System.Threading.Tasks;

namespace FS.FormManagement.Versions
{
    public interface IVersionsManager
    {
        Task<VersionDefinition> Commit<TEntity>(string entityKey = null)
           where TEntity : IVersion;
    }
}