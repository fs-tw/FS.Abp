using FS.CmsKitManagement.Contents;
using FS.CmsKitManagement.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Linq;
using System.Threading.Tasks;
using Xunit;
using Shouldly;
using Volo.CmsKit.Pages;

namespace FS.CmsKitManagement.Contents
{
    public class Contents_Tests : CmsKitManagementDomainTestBase
    {
        //private readonly SampleManager _sampleManager;

        public Contents_Tests()
        {
            //_sampleManager = GetRequiredService<SampleManager>();
        }
        //todo move to application
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
                    d.ContentProperties.Count.ShouldBeGreaterThan(0);
                });
            });
        }
        //todo move to application
        [Fact]
        public async Task Should_Has_EntityContentDefinition_And_EntityContent_In_Page()
        {
            var contentsStore = GetRequiredService<FS.CmsKitManagement.Contents.IContentsStore>();
            var pageRepository = GetRequiredService<IPageRepository>();

            await WithUnitOfWorkAsync(async () =>
            {
                var page = await pageRepository.GetBySlugAsync("further");

                var entityContentDefinition = (await contentsStore.ListEntityContentDefinitionAsync(page)).FirstOrDefault();

                var items = entityContentDefinition.EntityContents.OrderBy(x => x.Sequence).ToList();

                items.Count.ShouldBe(5);

                //contentDefinition.Count.ShouldBeGreaterThan(0);
                //contentDefinition.ForEach(d =>
                //{
                //    d.ContentProperties.Count.ShouldBeGreaterThan(0);
                //});
            });
        }
    }
}
