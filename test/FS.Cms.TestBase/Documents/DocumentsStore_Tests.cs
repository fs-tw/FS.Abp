using System.Threading.Tasks;
using Volo.Abp.Modularity;
using Xunit;
//using FS.Abp.CodingManagement.Coding;
using Shouldly;
using FS.Cms.Posts;
using FS.Cms.Documents;

namespace FS.Cms.Posts
{
    public abstract class DocumentsStore_Tests<TStartupModule> : CmsTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {

        private readonly IDocumentsStore _documentsStore;

        protected DocumentsStore_Tests()
        {
            _documentsStore = GetRequiredService<IDocumentsStore>();
        }

        [Fact(Skip ="待完成")]
        public async Task Should_Has_Datas()
        {
            //assert
            (await this._documentsStore.Document.GetCountAsync().ConfigureAwait(false)).ShouldBeGreaterThan(0);
            (await this._documentsStore.DocumentDefinition.GetCountAsync().ConfigureAwait(false)).ShouldBeGreaterThan(0);
        }
    }
}
