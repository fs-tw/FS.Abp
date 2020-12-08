using System;
using System.Collections.Generic;
using Volo.Abp.Caching;
using Volo.Abp.Localization;

namespace Volo.Abp.LanguageManagement
{
    [Serializable]
    [CacheName("Volo.Abp.LanguageList")]
    public class LanguageListCacheItem
    {
        public List<LanguageInfo> Languages { get; set; }

        public LanguageListCacheItem()
        {
            
        }

        public LanguageListCacheItem(List<LanguageInfo> languages)
        {
            Languages = languages;
        }
    }
}