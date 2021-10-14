using FS.Abp.EntityTypes;
using FS.CmsKit.Pages;
using FS.CmsKitManagement.MultiLinguals;
using Microsoft.Extensions.Options;
using Shouldly;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.ObjectMapping;
using Volo.CmsKit.Pages;
using Xunit;

namespace FS.CmsKitManagement.MultiLinguals
{
    public class MultiLinguals_Tests : CmsKitManagementDomainTestBase
    {
        //private readonly SampleManager _sampleManager;

        public MultiLinguals_Tests()
        {
            //_sampleManager = GetRequiredService<SampleManager>();
        }

        [Fact]
        public async Task Should_Has_MultiLingual_In_Page()
        {
            var multiLingualsStore = GetRequiredService<IMultiLingualsStore>();
            var objectMapper = GetRequiredService<IObjectMapper>();
            var options = GetRequiredService<IOptions<EntityTypeOptions>>();
            var pageRepository = GetRequiredService<IPageRepository>();

            await this.WithUnitOfWorkAsync(async () =>
            {
                var page = await pageRepository.GetBySlugAsync("further");

                var multiLingualRepository = GetRequiredService<IMultiLingualRepository>();


                var multiLingual = (await multiLingualRepository.WithDetailsAsync())
                    .Where(x => x.EntityId == page.Id.ToString())
                    .SingleOrDefault();

                var translation = await multiLingual.GetOrDefaultTranslationAsync<Page, PageTranslation>(multiLingualsStore, page, "en");

                translation.Content.ShouldBe("further content");
            });
        }
    }
}
