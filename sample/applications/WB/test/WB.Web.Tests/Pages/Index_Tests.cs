using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace WB.Pages
{
    public class Index_Tests : WBWebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
