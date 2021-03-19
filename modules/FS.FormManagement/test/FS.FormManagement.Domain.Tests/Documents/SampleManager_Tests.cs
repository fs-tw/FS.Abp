using Shouldly;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace FS.FormManagement.Documents
{
    public class DocumentManager_Tests : FormManagementDomainTestBase
    {
        private readonly IDocumentsManager _documentManager;
        private readonly IDocumentsStore _documentsStore;

        public DocumentManager_Tests()
        {
            _documentManager = GetRequiredService<IDocumentsManager>();
            _documentsStore = GetRequiredService<IDocumentsStore>();

        }

        [Fact]
        public async Task Should_Create_DocumentDefinition_With_Init_Version_Async()
        {
            await this.WithUnitOfWorkAsync(async () =>
            {
                await _documentManager.CreateDocumentDefinition("fs", "Further Software");
            });

            await this.WithUnitOfWorkAsync(async () =>
            {
                var q = await _documentsStore.DocumentDefinition.WithDetailsAsync();


                var definition = q.Where(x => x.No == "fs").Single();
                definition.ShouldNotBeNull();
                definition.CurrentVersion.ShouldNotBeNull();
            });

        }
    }
}
