using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace FS.Abp.EntityTypes.EntityType
{
    public class EntityDefinitionAppService_Tests : EntityTypesApplicationTestBase
    {
        private readonly IEntityDefinitionAppService _entityDefinitionAppService;

        public EntityDefinitionAppService_Tests()
        {
            _entityDefinitionAppService = GetRequiredService<IEntityDefinitionAppService>();
        }

        [Fact]
        public async Task GetAsync()
        {
            var t = _entityDefinitionAppService.Find("Volo.CmsKit.Pages.Page");
        }

    }
}
