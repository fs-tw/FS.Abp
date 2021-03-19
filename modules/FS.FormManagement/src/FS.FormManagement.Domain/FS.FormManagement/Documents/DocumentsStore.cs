using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;

namespace FS.FormManagement.Documents
{
    public partial interface IDocumentsStore
    {
        Task CreateDocumentDefinition([NotNull] string no, [CanBeNull] string displayName = null);
    }
    public partial class DocumentsStore
    {
        public async Task CreateDocumentDefinition([NotNull] string no, [CanBeNull] string displayName = null)
        {
            var exist = await this.DocumentDefinition.FindAsync(x => x.No == no);
            if (exist != null)
                throw new Exception("已有此文件,no:" + no);
            var definitionId = this.GuidGenerator.Create();
            var versionId = this.GuidGenerator.Create();

            Documents.DocumentDefinition documentDefinition = new DocumentDefinition(definitionId, CurrentTenant.Id)
            {
                No = no,
                DisplayName = displayName,
                CurrentVersion = new Version(versionId,definitionId, CurrentTenant.Id)
                {
                    No = "0001"
                }
            };
            await this.DocumentDefinition.InsertAsync(documentDefinition);

        }
    }
}
