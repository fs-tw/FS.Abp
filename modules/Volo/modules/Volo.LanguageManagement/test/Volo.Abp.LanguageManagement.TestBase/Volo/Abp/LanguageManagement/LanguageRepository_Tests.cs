using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Shouldly;
using Volo.Abp.Modularity;
using Xunit;

namespace Volo.Abp.LanguageManagement
{
    public abstract class LanguageRepository_Tests<TStartupModule> : LanguageManagementTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
        protected readonly ILanguageRepository _languageRepository;

        protected LanguageRepository_Tests()
        {
            _languageRepository = ServiceProvider.GetRequiredService<ILanguageRepository>(); ;
        }

        [Fact]
        public async Task Should_Get_List_Of_Languages_Async()
        {
            var languages = await _languageRepository.GetListAsync(true);
            languages.Any().ShouldBeTrue();
        }
    }
}
