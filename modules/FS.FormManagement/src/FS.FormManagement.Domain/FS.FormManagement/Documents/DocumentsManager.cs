using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Users;

namespace FS.FormManagement.Documents
{
    public class DocumentsManager : Volo.Abp.Domain.Services.DomainService, IDocumentsManager
    {
        protected IDocumentsStore DocumentsStore => this.LazyServiceProvider.LazyGetRequiredService<IDocumentsStore>();


        public async Task CreateDocumentDefinition([NotNull] string no, [CanBeNull] string displayName = null)
        {
            //await DocumentsStore.CreateDocumentDefinition(no, displayName);
            var exist = await this.DocumentsStore.DocumentDefinition.FindAsync(x => x.No == no);
            if (exist != null)
                throw new Exception("已有此文件,no:" + no);
            var definitionId = this.GuidGenerator.Create();
            var versionId = this.GuidGenerator.Create();

            Documents.DocumentDefinition documentDefinition = new DocumentDefinition(definitionId, CurrentTenant.Id)
            {
                No = no,
                DisplayName = displayName,
                CurrentVersion = new Version(versionId, definitionId, CurrentTenant.Id)
                {
                    No = "0001"
                }
            };
            await this.DocumentsStore.DocumentDefinition.InsertAsync(documentDefinition);
        }

        public async Task NewVersionAsync(string documentDefinitionNo, Guid? sourceVersionId = null, string Description = null)
        {
            var definition = await this.DocumentsStore.DocumentDefinition.FindAsync(x => x.No == documentDefinitionNo);
            var newVersionId = GuidGenerator.Create();

            var maxNo = this.DocumentsStore.Version.Where(x => x.DocumentDefinitionId == definition.Id).Max(x => x.No);

            var next = Int32.Parse(maxNo) + 1;

            var version = new Version(newVersionId, definition.Id, CurrentTenant.Id)
            {
                PrevVersionId = definition.CurrentVersionId
            };
            definition.CurrentVersion = version;

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
