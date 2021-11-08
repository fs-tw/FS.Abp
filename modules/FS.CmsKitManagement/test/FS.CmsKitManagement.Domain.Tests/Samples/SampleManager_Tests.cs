using FS.CmsKitManagement.Contents;
using FS.CmsKitManagement.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace FS.CmsKitManagement.Samples
{
    public class SampleManager_Tests : CmsKitManagementDomainTestBase
    {
        //private readonly SampleManager _sampleManager;

        public SampleManager_Tests()
        {
            //_sampleManager = GetRequiredService<SampleManager>();
        }

        //[Fact]
        //public async Task ShouldGetContentsEntityTypeStore()
        //{
        //    var store = GetRequiredService<IEntityTypeDefinitionStore>();

        //    var result = store.GetList();

        //    var t = store.FindEntityTypeFromEntity<Volo.CmsKit.Blogs.BlogPost>();

        //}

        //[Fact]
        //public async Task ShouldGetEntityTypeRepository()
        //{
        //    var blogPostContentDefinitionRepository = GetRequiredService<
        //        IEntityTypeRepository<
        //            FS.CmsKitManagement.Contents.ContentDefinition,
        //            Volo.CmsKit.Blogs.BlogPost>>();
        //    var blogContentDefinitionRepository = GetRequiredService<
        //        IEntityTypeRepository<
        //            FS.CmsKitManagement.Contents.ContentDefinition,
        //            Volo.CmsKit.Blogs.Blog>>();

        //    await WithUnitOfWorkAsync(async () =>
        //    {
        //        ContentDefinition entity = new ContentDefinition();

        //        entity.DisplayName = "YinChang";

        //        await blogContentDefinitionRepository.InsertAsync(entity);
        //    });

        //    await WithUnitOfWorkAsync(async () =>
        //    {
        //        var query1 = await blogContentDefinitionRepository.GetPagedListAsync(0, 100, "Id", true);
        //        var list1 = query1.ToList();

        //        var t = await blogContentDefinitionRepository.FindAsync(x => x.DisplayName == "YinChang");

        //        var query2 = await blogPostContentDefinitionRepository.GetPagedListAsync(0, 100, "Id", true);
        //        var list2 = query2.ToList();
        //    });



        //}
    }
}
