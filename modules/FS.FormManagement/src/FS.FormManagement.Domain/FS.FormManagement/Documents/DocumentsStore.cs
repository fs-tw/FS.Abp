using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;

namespace FS.FormManagement.Documents
{
    public partial interface IDocumentsStore
    {
        Task CreateDocumentDefinition([NotNull] string no, [CanBeNull] string displayName=null);
    }
    public partial class DocumentsStore
    {
        public async Task CreateDocumentDefinition([NotNull] string no, [CanBeNull] string displayName=null)
        {
            var exist = await this.DocumentDefinition.FindAsync(x => x.No == no);
            if (exist != null)
                throw new Exception("已有此文件,no:" + no);

            Documents.DocumentDefinition documentDefinition = new DocumentDefinition()
            {
                No = no,
                DisplayName = displayName
            };
            Volo.Abp.Domain.Entities.EntityHelper.TrySetId(documentDefinition, () => this.GuidGenerator.Create());

            Documents.Version version = new Version()
            {
                DocumentDefinitionId = documentDefinition.Id,
                TenantId = CurrentTenant.Id,
                No = "0001"
            };
            Volo.Abp.Domain.Entities.EntityHelper.TrySetId(version, () => this.GuidGenerator.Create());

            await this.DocumentDefinition.InsertAsync(documentDefinition);
        }
    }
}
