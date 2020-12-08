using System.Threading.Tasks;
using Volo.Abp.Caching;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities.Events;
using Volo.Abp.EventBus;

namespace Volo.Abp.LanguageManagement
{
    public class LanguageListCacheInvalidator : ILocalEventHandler<EntityChangedEventData<Language>>, ITransientDependency
    {
        protected IDistributedCache<LanguageListCacheItem> Cache { get; }

        public LanguageListCacheInvalidator(IDistributedCache<LanguageListCacheItem> cache)
        {
            Cache = cache;
        }

        public virtual async Task HandleEventAsync(EntityChangedEventData<Language> eventData)
        {
            await Cache.RemoveAsync(DatabaseLanguageProvider.CacheKey);
        }
    }
}