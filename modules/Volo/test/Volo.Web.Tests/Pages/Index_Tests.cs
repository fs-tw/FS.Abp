using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace Volo.Pages
{
    public class Index_Tests : VoloWebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
