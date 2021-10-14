using FS.CmsKitManagement.Contents;
using FS.CmsKitManagement.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Linq;
using System.Threading.Tasks;
using Xunit;
using Shouldly;

namespace FS.CmsKitManagement.Contents
{
    public class Contents_Tests : CmsKitManagementDomainTestBase
    {
        //private readonly SampleManager _sampleManager;

        public Contents_Tests()
        {
            //_sampleManager = GetRequiredService<SampleManager>();
        }

        [Fact]
        public async Task Should_Has_ContentDefinition_In_PageType()
        {
            var contentsStore = GetRequiredService<FS.CmsKitManagement.Contents.IContentsStore>();

            await WithUnitOfWorkAsync(async () =>
            {
                var contentDefinition = await contentsStore.ListContentDefinitionAsync<Volo.CmsKit.Pages.Page>();

                contentDefinition.Count.ShouldBeGreaterThan(0);
                contentDefinition.ForEach(d =>
                {
                    d.ContentTypes.Count.ShouldBeGreaterThan(0);
                });
            });



        }
    }
}
