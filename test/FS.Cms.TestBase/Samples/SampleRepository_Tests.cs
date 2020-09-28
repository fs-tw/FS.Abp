using System.Threading.Tasks;
using Volo.Abp.Modularity;
using Xunit;
using FS.Abp.CodingManagement.Coding;
using Shouldly;

namespace FS.Cms.Samples
{
    /* Write your custom repository tests like that, in this project, as abstract classes.
     * Then inherit these abstract classes from EF Core & MongoDB test projects.
     * In this way, both database providers are tests with the same set tests.
     */
    public abstract class SampleRepository_Tests<TStartupModule> : CmsTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
        private readonly ICodesTreeRepository _codeRepository;

        protected SampleRepository_Tests()
        {
            _codeRepository = GetRequiredService<ICodesTreeRepository>();
        }

        [Fact]
        public async Task CmsBlogDefinition_Should_Exist_Test()
        {
            var definition = await _codeRepository.GetDefinitionAsync("CmsBlogDefinition");
            definition.Children.Count.ShouldBe(2);
        }
    }
}
