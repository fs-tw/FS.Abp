using Shouldly;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace FS.FormManagement.Versions
{
    public class DocumentManager_Tests : FormManagementDomainTestBase
    {
        //private readonly IVersionsManager _versionsManager;
        private readonly IVersionsStore _versionsStore;
        private readonly FS.FormManagement.Forms.IFormsStore _formsStore;

        public DocumentManager_Tests()
        {
            //_versionsManager = GetRequiredService<IVersionsManager>();
            _versionsStore = GetRequiredService<IVersionsStore>();
            _formsStore = GetRequiredService<FS.FormManagement.Forms.IFormsStore>();

        }

        [Fact]
        public async Task Should_Create_DocumentDefinition_With_Init_Version_Async()
        {
            //System.Guid? firstVersionId = null;
            //await this.WithUnitOfWorkAsync(async () =>
            //{
            //    FS.FormManagement.Forms.Formal f = new Forms.Formal()
            //    {
            //        No = "yinchang",
            //        DisplayName = "yinchang"
            //    };
            //    Volo.Abp.Domain.Entities.EntityHelper.TrySetId(f, () => System.Guid.NewGuid());

            //    await _formsStore.Formal.InsertAsync(f);
            //});

            //await this.WithUnitOfWorkAsync(async () =>
            //{
            //    var definition = await _versionsStore.Commit<FS.FormManagement.Forms.Formal>("yinchang");
            //    firstVersionId = definition.CurrentVersionId;
            //});

            //await this.WithUnitOfWorkAsync(async () =>
            //{
            //    var definition = await _versionsStore.Commit<FS.FormManagement.Forms.Formal>("yinchang");
            //    definition.Versions.Count.ShouldBe(2);
            //});

            //await this.WithUnitOfWorkAsync(async () =>
            //{
            //    var definition = await _versionsStore.ResetAsync<FS.FormManagement.Forms.Formal>(firstVersionId.Value,"yinchang");

            //});

            //await this.WithUnitOfWorkAsync(async () =>
            //{
            //    var definition = await _versionsStore.GetAsync<FS.FormManagement.Forms.Formal>("yinchang");
            //    definition.CurrentVersionId.ShouldBe(firstVersionId);

            //});

        }
    }
}
