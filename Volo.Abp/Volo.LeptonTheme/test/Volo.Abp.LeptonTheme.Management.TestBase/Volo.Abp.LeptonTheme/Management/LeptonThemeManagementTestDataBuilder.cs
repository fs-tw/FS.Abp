using Volo.Abp.DependencyInjection;
using Volo.Abp.Guids;

namespace Volo.Abp.LeptonTheme.Management
{
    public class LeptonThemeManagementTestDataBuilder : ITransientDependency
    {
        private readonly IGuidGenerator _guidGenerator;
        private LeptonThemeManagementTestData _testData;

        public LeptonThemeManagementTestDataBuilder(
            IGuidGenerator guidGenerator,
            LeptonThemeManagementTestData testData)
        {
            _guidGenerator = guidGenerator;
            _testData = testData;
        }

        public void Build()
        {
            
        }
    }
}