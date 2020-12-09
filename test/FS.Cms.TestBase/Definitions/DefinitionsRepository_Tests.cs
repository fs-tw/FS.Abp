using System.Threading.Tasks;
using Volo.Abp.Modularity;
using Xunit;
using FS.Abp.CodingManagement.Coding;
using Shouldly;
using FS.Cms.Posts;

namespace FS.Cms.Definitions
{
    /* Write your custom repository tests like that, in this project, as abstract classes.
     * Then inherit these abstract classes from EF Core & MongoDB test projects.
     * In this way, both database providers are tests with the same set tests.
     */
    public abstract class DefinitionsRepository_Tests<TStartupModule> : CmsTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
        //private readonly ICodesTreeRepository _codeRepository;
        private readonly IPostRepository _postRepository;

        protected DefinitionsRepository_Tests()
        {
            //_codeRepository = GetRequiredService<ICodesTreeRepository>();
            _postRepository = GetRequiredService<IPostRepository>();
        }

        [Fact]
        public async Task CmsBlogDefinition_Should_Exist_Test()
        {
            //var definition = await _codeRepository.GetDefinitionAsync("CmsBlogDefinition");
            //definition.Children.Count.ShouldBe(2);
        }


     
    }
}
