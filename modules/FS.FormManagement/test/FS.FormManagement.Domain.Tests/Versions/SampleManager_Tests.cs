using Shouldly;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace FS.FormManagement.Versions
{
    public class DocumentManager_Tests : FormManagementDomainTestBase
    {
        private readonly IVersionsManager _documentManager;
        private readonly IVersionsStore _documentsStore;

        public DocumentManager_Tests()
        {
            _documentManager = GetRequiredService<IVersionsManager>();
            _documentsStore = GetRequiredService<IVersionsStore>();

        }

        [Fact]
        public async Task Should_Create_DocumentDefinition_With_Init_Version_Async()
        {
            await this.WithUnitOfWorkAsync(async () =>
            {
                //await _documentManager.CreateDocumentDefinition("fs", "Further Software");
            });

            await this.WithUnitOfWorkAsync(async () =>
            {
                //var q = await _documentsStore.DocumentDefinition.WithDetailsAsync();


                //var definition = q.Where(x => x.EntityType == "fs").Single();
                //definition.ShouldNotBeNull();
                //definition.CurrentVersion.ShouldNotBeNull();
            });

        }
    }
}
