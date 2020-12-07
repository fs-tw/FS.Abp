using System.Linq;
using System.Threading.Tasks;
using Shouldly;
using Volo.Abp.Caching;
using Xunit;

namespace Volo.Abp.LanguageManagement
{
    public class LanguageManagementLanguageListCacheInvalidator_Tests : LanguageManagementDomainTestBase
    {
        private readonly ILanguageRepository _languageRepository;
        private readonly IDistributedCache<LanguageListCacheItem> _cache;
        private readonly DatabaseLanguageProvider _languageProvider;

        public LanguageManagementLanguageListCacheInvalidator_Tests()
        {
            _languageRepository = GetRequiredService<ILanguageRepository>();
            _cache = GetRequiredService<IDistributedCache<LanguageListCacheItem>>();
            _languageProvider = GetRequiredService<DatabaseLanguageProvider>();
        }

        [Fact]
        public async Task GetLanguages_Should_Cached()
        {
            // Act
            (await _cache.GetAsync(DatabaseLanguageProvider.CacheKey)).ShouldBeNull();
            await _languageProvider.GetLanguagesAsync();
            (await _cache.GetAsync(DatabaseLanguageProvider.CacheKey)).ShouldNotBeNull();
        }

        [Fact]
        public async Task Cache_Should_Invalidator_WhenLanguageChanged()
        {
            // Arrange
            // GetLanguagesAsync will cache language.
            await _languageProvider.GetLanguagesAsync();

            // Act
            var lang = (await _languageRepository.GetListAsync()).First();
            await _languageRepository.DeleteAsync(lang);

            // Assert
            (await _cache.GetAsync(DatabaseLanguageProvider.CacheKey)).ShouldBeNull();
        }

    }
}
