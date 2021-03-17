using JetBrains.Annotations;
using System;
using System.Threading.Tasks;

namespace FS.FormManagement.Documents
{
    public interface IDocumentsManager
    {
        Task AcceptAsync(string versionDefinitionKey);
        Task CreateDocumentDefinition([NotNull] string no, [CanBeNull] string displayName = null);
        Task NewVersionAsync(string documentDefinitionId, Guid? sourceVersionId = null, string Description = null);
        Task RejectAsync(string versionDefinitionKey);
    }
}