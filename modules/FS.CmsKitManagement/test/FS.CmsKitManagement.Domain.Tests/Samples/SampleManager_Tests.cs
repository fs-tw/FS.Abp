using FS.CmsKitManagement.Contents;
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

        [Fact]
        public async Task ShouldGetContentsEntityTypeOptions()
        {
            var options = GetRequiredService<IOptions<FS.CmsKitManagement.EntityType.EntityTypeOptions>>();

            var entityEntityTypeOptions = options.Value.GetOrNull<FS.CmsKitManagement.Contents.ContentDefinition>();

            //var interfaceOptions= GetRequiredService<IOptions<IEntityTypeOptions<ContentsEntityTypeDefinition>>>();

        }

        [Fact]
        public async Task ShouldGetEntityTypeStore()
        {
            var entityTypeStore = GetRequiredService<
                FS.CmsKitManagement.EntityType.IEntityTypeStore<FS.CmsKitManagement.Contents.ContentDefinition, Volo.CmsKit.Blogs.BlogPost>>();


            await WithUnitOfWorkAsync(async () =>
            {
                var query=await entityTypeStore.GetQueryableAsync();
                var list = query.ToList();
            });

            // var entityEntityTypeOptions = options.Value.GetOrNull<FS.CmsKitManagement.Contents.ContentDefinition>();

            //var interfaceOptions= GetRequiredService<IOptions<IEntityTypeOptions<ContentsEntityTypeDefinition>>>();

        }
    }
}
