using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace CrystalQuartzSample.Pages
{
    public class Index_Tests : CrystalQuartzSampleWebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
