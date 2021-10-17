using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using Shouldly;
using Xunit;


namespace FS.CmsKitManagement.Contents
{
    public class SampleAppService_Tests : CmsKitManagementApplicationTestBase
    {
        //private readonly ISampleAppService _sampleAppService;

        public SampleAppService_Tests()
        {
            // _sampleAppService = GetRequiredService<ISampleAppService>();
        }

        [Fact]
        public async Task Should_Has_EntityContentDefinition()
        {
            var contentsAppservice = GetRequiredService<FS.CmsKitManagement.Contents.IEntityContentDefinitionCrudAppService>();
            var datas = await contentsAppservice.GetListAsync(new Dtos.EntityContentDefinitionGetListDto());
        }
    }
}
