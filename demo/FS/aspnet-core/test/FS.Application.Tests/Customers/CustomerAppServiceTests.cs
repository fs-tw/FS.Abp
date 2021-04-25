using Shouldly;
using System.Threading.Tasks;
using Volo.Abp.Identity;
using Xunit;

namespace FS.Samples
{
    /* This is just an example test class.
     * Normally, you don't test code of the modules you are using
     * (like IIdentityUserAppService here).
     * Only test your own application services.
     */
    public class CustomerAppServiceTests : FSApplicationTestBase
    {
        private readonly FS.Customers.ICustomerCrudAppService _customerCrudAppService;

        public CustomerAppServiceTests()
        {
            _customerCrudAppService = GetRequiredService<FS.Customers.ICustomerCrudAppService>();
        }

        //[Fact]
        //public async Task Should_Search_By_Discriminator()
        //{
        //    await this.WithUnitOfWorkAsync(async () =>
        //    {
        //        var input = new FS.Customers.Dtos.CustomerGetListDto()
        //        {
        //            Discriminator ="Enterprise"
        //        };
        //        var result = await _customerCrudAppService.GetListAsync(input);
        //        result.TotalCount.ShouldBe(1);

        //        input.Discriminator = "Personal";
        //        result = await _customerCrudAppService.GetListAsync(input);
        //        result.TotalCount.ShouldBe(1);

        //        input.Discriminator = "Customer";
        //        result = await _customerCrudAppService.GetListAsync(input);
        //        result.TotalCount.ShouldBe(2);

        //    });
        //}
    }
}
