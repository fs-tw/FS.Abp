using System.Threading.Tasks;
using Volo.Abp.Caching;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities.Events;
using Volo.Abp.EventBus;

namespace Volo.Abp.LanguageManagement
{
    public class LanguageTextCacheInvalidator : ILocalEventHandler<EntityChangedEventData<LanguageText>>, ITransientDependency
    {
        protected IDistributedCache<LanguageTextCacheItem> Cache { get; }

        public LanguageTextCacheInvalidator(IDistributedCache<LanguageTextCacheItem> cache)
        {
            Cache = cache;
        }

        public virtual async Task HandleEventAsync(EntityChangedEventData<LanguageText> eventData)
        {
            await Cache.RemoveAsync(
                LanguageTextCacheItem.CalculateCacheKey(eventData.Entity.ResourceName,
                    eventData.Entity.CultureName)
            );
        }
    }
}
