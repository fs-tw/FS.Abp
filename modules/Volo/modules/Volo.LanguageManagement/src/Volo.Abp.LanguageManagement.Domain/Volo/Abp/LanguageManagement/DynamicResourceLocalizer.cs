using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using Volo.Abp.Caching;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Localization;

namespace Volo.Abp.LanguageManagement
{
    public class DynamicResourceLocalizer : IDynamicResourceLocalizer, ISingletonDependency
    {
        protected IServiceScopeFactory ServiceScopeFactory { get; }
        protected IDistributedCache<LanguageTextCacheItem> Cache { get; }

        public DynamicResourceLocalizer(IServiceScopeFactory serviceScopeFactory, IDistributedCache<LanguageTextCacheItem> cache)
        {
            ServiceScopeFactory = serviceScopeFactory;
            Cache = cache;
        }

        public virtual LocalizedString GetOrNull(LocalizationResource resource, string cultureName, string name)
        {
            var cacheItem = GetCacheItem(resource, cultureName);
            var value = cacheItem.Dictionary.GetOrDefault(name);
            if (value == null)
            {
                return null;
            }

            return new LocalizedString(name, value);
        }

        public virtual void Fill(LocalizationResource resource, string cultureName, Dictionary<string, LocalizedString> dictionary)
        {
            var cacheItem = GetCacheItem(resource, cultureName);

            foreach (var item in cacheItem.Dictionary)
            {
                dictionary[item.Key] = new LocalizedString(item.Key, item.Value);
            }
        }

        protected virtual LanguageTextCacheItem GetCacheItem(LocalizationResource resource, string cultureName)
        {
            return Cache.GetOrAdd(
                LanguageTextCacheItem.CalculateCacheKey(resource.ResourceName, cultureName),
                () => CreateCacheItem(resource, cultureName)
            );
        }

        protected virtual LanguageTextCacheItem CreateCacheItem(LocalizationResource resource, string cultureName)
        {
            var cacheItem = new LanguageTextCacheItem();

            using (var scope = ServiceScopeFactory.CreateScope())
            {
                var texts = scope.ServiceProvider
                    .GetRequiredService<ILanguageTextRepository>()
                    .GetList(resource.ResourceName, cultureName);

                foreach (var text in texts)
                {
                    cacheItem.Dictionary[text.Name] = text.Value;
                }
            }

            return cacheItem;
        }
    }
}
