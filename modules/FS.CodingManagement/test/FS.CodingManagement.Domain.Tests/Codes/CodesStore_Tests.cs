using FS.Coding.Codes;
using Shouldly;
using System.Threading.Tasks;
using Xunit;

namespace FS.CodingManagement.Codes
{
    public class ICodesStore_Tests : CodingManagementDomainTestBase
    {
        private readonly ICodesStore _codesStore;

        public ICodesStore_Tests()
        {
            _codesStore = GetRequiredService<ICodesStore>();
        }

        [Fact]
        public async Task Method1Async()
        {
            var _str = await _codesStore.GetCodeValueAsync<string>("FS_Str");
            var _int = await _codesStore.GetCodeValueAsync<int>("FS_Int");
            var _decimal = await _codesStore.GetCodeValueAsync<decimal>("FS_Decimal");
            var _bool = await _codesStore.GetCodeValueAsync<bool>("FS_Bool");
            _str.ShouldNotBeNull();
            _int.ShouldNotBe(0);
            _decimal.ShouldNotBe(0);
            _bool.ShouldNotBe(false);
        }
    }
}
