using FS.Coding.Codes;
using Shouldly;
using System.Threading.Tasks;
using Xunit;
using FS.CodingManagement;
using System.Linq;
using MediatR;

namespace FS.CodingManagement
{
    public class DefaultData_Tests : CodingManagementApplicationTestBase
    {
        private readonly ICodesStore _codesStore;
        private readonly ICodingTreeRepository _codingTreeRepository;
        private readonly IMediator _mediator;

        public DefaultData_Tests()
        {
            _codesStore = GetRequiredService<ICodesStore>();
            _mediator = GetRequiredService<IMediator>();
            _codingTreeRepository = GetRequiredService<ICodingTreeRepository>();
        }

        [Fact]
        public async Task DefaultDataAsync()
        {

            var no = "Taichung";
            var assetDatas = await _codingTreeRepository.FindByNoAsync(no);
            assetDatas.No.ShouldBe("Taichung");
            var noArray = assetDatas.Children.ToList().Select(x => x.No);
            noArray.ShouldContain("South");
            noArray.ShouldContain("North");

        }
    }
}
