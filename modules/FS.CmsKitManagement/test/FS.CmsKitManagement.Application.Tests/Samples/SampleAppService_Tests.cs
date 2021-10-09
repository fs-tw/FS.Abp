using System.Linq;
using System.Threading.Tasks;
using FS.CmsKitManagement.MultiLinguals;
using Microsoft.Extensions.Options;
using Shouldly;
using Xunit;

namespace FS.CmsKitManagement.Samples
{
    public class SampleAppService_Tests : CmsKitManagementApplicationTestBase
    {
        //private readonly ISampleAppService _sampleAppService;

        public SampleAppService_Tests()
        {
            // _sampleAppService = GetRequiredService<ISampleAppService>();
        }

        [Fact]
        public async Task Should_Has_MultiLingual_In_Page()
        {
            await this.WithUnitOfWorkAsync(async () =>
            {
                var options = GetRequiredService<IOptions<FS.Abp.EntityTypes.EntityTypeOption>>();

                var pageRepository = GetRequiredService<Volo.CmsKit.Pages.IPageRepository>();

                var page = await pageRepository.GetBySlugAsync("further");

                var multiLingualRepository = GetRequiredService<FS.CmsKitManagement.MultiLinguals.IMultiLingualRepository>();


                var multiLingual = (await multiLingualRepository.WithDetailsAsync()).Where(x => x.EntityId == page.Id.ToString()).SingleOrDefault();
            });

            //var result = await _sampleAppService.GetAsync();
            //result.Value.ShouldBe(42);
        }

        [Fact]
        public async Task Should_Get_EntityDto_With_Translation()
        {

            var multiLingualsManager = GetRequiredService<MultiLingualsManager>();

            var pageRepository = GetRequiredService<Volo.CmsKit.Pages.IPageRepository>();

            var objectMapper = GetRequiredService<Volo.Abp.ObjectMapping.IObjectMapper>();

            await this.WithUnitOfWorkAsync(async () =>
            {
                var page = await pageRepository.GetBySlugAsync("further");

                var translation = await multiLingualsManager.GetTranslationAsync<
                    Volo.CmsKit.Pages.Page,
                    FS.CmsKitManagement.Pages.PageTranslation>(page);

                var dto = objectMapper.Map<Volo.CmsKit.Pages.Page, Volo.CmsKit.Public.Pages.PageDto>(page);

                dto.Content = translation.Content;
                dto.Title = translation.Title;

                var dtoWithL = objectMapper.Map(translation, dto);

            });

        }
    }
}
