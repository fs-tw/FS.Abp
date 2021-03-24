using JetBrains.Annotations;
using System;
using System.Threading.Tasks;

namespace FS.FormManagement.Versions
{
    public interface IVersionsManager
    {
        Task AcceptAsync(string versionDefinitionKey);
        Task NewVersionAsync(string documentDefinitionId, Guid? sourceVersionId = null, string Description = null);
        Task RejectAsync(string versionDefinitionKey);
    }
}