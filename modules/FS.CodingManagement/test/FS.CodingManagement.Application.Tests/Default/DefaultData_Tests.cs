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
        public async Task Create_Default_Coding()
        {
            var no = "Taichung";
            var trees = (await _codingTreeRepository.GetListAsync()).SingleOrDefault(x => x.No==no);

            trees.ShouldNotBeNull();

            trees.No.ShouldBe(no);

            trees.Children.Any(x => x.No=="South").ShouldBeTrue();

            trees.Children.Any(x => x.No=="North").ShouldBeTrue();
        }
    }
}
