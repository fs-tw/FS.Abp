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
        public async Task DefaultDataValidationAsync()
        {

            var no = "Taichung";
            var parent = await _codingTreeRepository.FindByNoAsync(no);
            var children = await _codingTreeRepository.FindByNoAsync("South");
            var children2 = await _codingTreeRepository.FindByNoAsync("North");
            children.ParentId.ShouldBe(parent.Id);
            children2.ParentId.ShouldBe(parent.Id);


        }

        [Fact]
        public async Task TreeDataValidationAsync()
        {

            var no = "Taichung";
            var parent = await _codingTreeRepository.FindByNoAsync(no);
            var assetDatas = await _codingTreeRepository.GetChildrenAsync(parent.Id);
            parent.No.ShouldBe("Taichung");
            assetDatas.Count.ShouldBeGreaterThan(0);
            

        }
    }
}
