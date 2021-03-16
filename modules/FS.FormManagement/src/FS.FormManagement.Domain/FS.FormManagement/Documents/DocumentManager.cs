using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Users;

namespace FS.FormManagement.Documents
{
    public class DocumentManager : Volo.Abp.Domain.Services.DomainService
    {
        protected IDocumentsStore DocumentsStore => this.LazyServiceProvider.LazyGetRequiredService<IDocumentsStore>();


        public async Task CreateDocumentDefinition([NotNull] string no, [CanBeNull] string displayName = null)
        {
            await DocumentsStore.CreateDocumentDefinition(no, displayName);
        }

        public async Task NewVersionAsync(string documentDefinitionId, Guid? sourceVersionId = null, string Description = null)
        {

            return;
        }
        public async Task AcceptAsync(string versionDefinitionKey)
        {
            return;
        }
        public async Task RejectAsync(string versionDefinitionKey)
        {
            return;
        }
    }
}
