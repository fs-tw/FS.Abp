using System.Threading.Tasks;
using Shouldly;
using Volo.Abp.Modularity;
using Xunit;

namespace Volo.Abp.LanguageManagement
{
    public abstract class LanguageManagementDataSeeder_Tests<TStartupModule> : LanguageManagementTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
        private readonly ILanguageRepository _languageRepository;

        protected LanguageManagementDataSeeder_Tests()
        {
            _languageRepository = GetRequiredService<ILanguageRepository>();
        }

        [Fact]
        public async Task Should_Create_Language()
        {
            //Arrange
            var languages = await _languageRepository.GetListAsync();

            // Assert
            languages.ShouldContain(l => l.CultureName == "en-US" && l.IsEnabled);
            languages.ShouldContain(l => l.CultureName == "tr" && l.IsEnabled);
        }
    }
}
