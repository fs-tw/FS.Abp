using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Caching;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Localization;
using Volo.Abp.ObjectMapping;

namespace Volo.Abp.LanguageManagement
{
    [Dependency(ReplaceServices = true)]
    public class DatabaseLanguageProvider : ILanguageProvider, ITransientDependency
    {
        public const string CacheKey = "AllLanguages";

        protected ILanguageRepository LanguageRepository { get; }
        protected IObjectMapper<LanguageManagementDomainModule> ObjectMapper { get; }
        protected IDistributedCache<LanguageListCacheItem> Cache { get; }

        public DatabaseLanguageProvider(
            ILanguageRepository languageRepository, 
            IObjectMapper<LanguageManagementDomainModule> objectMapper,
            IDistributedCache<LanguageListCacheItem> cache)
        {
            LanguageRepository = languageRepository;
            ObjectMapper = objectMapper;
            Cache = cache;
        }

        public virtual async Task<IReadOnlyList<LanguageInfo>> GetLanguagesAsync()
        {
            var cacheItem = await Cache.GetOrAddAsync(CacheKey, async () =>
            {
                var languages = await LanguageRepository.GetListAsync(isEnabled: true);
                return new LanguageListCacheItem(
                    ObjectMapper.Map<List<Language>, List<LanguageInfo>>(languages)
                );
            });

            return cacheItem.Languages;
        }
    }
}
