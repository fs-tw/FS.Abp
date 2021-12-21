using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using Shouldly;
using Volo.CmsKit.Pages;
using Xunit;


namespace FS.CmsKitManagement.MultiLinguals
{
    public class MultiLinguals_Tests : CmsKitManagementApplicationTestBase
    {
        //private readonly ISampleAppService _sampleAppService;

        public MultiLinguals_Tests()
        {
            // _sampleAppService = GetRequiredService<ISampleAppService>();
        }
        [Fact]
        public async Task Should_Has_MultiLingual_In_Page()
        {
            var multiLingualCrudAppService = GetRequiredService<IMultiLingualCrudAppService>();
            var pageRepository = GetRequiredService<IPageRepository>();
            var options = GetRequiredService<IOptions<FS.Abp.EntityFeatures.EntityFeaturesOptions>>();

            await this.WithUnitOfWorkAsync(async () =>
            {
                var page = await pageRepository.GetBySlugAsync("further");

                var entityType = options.Value.GetOrDefault<MultiLingual>().GetOrDefault<Volo.CmsKit.Pages.Page>().EntityType;

                var multiLingualDto= await multiLingualCrudAppService.FindAsync(new Dtos.MultiLingualFindDto()
                {
                    EntityType = entityType,
                    EntityId = page.Id.ToString()
                });

                multiLingualDto.MultiLingualTranslations.Count.ShouldBeGreaterThan(0);
            });
        }

    }
}
