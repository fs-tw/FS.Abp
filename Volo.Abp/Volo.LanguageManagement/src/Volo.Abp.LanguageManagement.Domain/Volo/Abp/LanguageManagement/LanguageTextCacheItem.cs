using System;
using System.Collections.Generic;
using Volo.Abp.Caching;

namespace Volo.Abp.LanguageManagement
{
    [CacheName("Volo.Abp.LanguageManagement.Texts")]
    [Serializable]
    public class LanguageTextCacheItem
    {
        public Dictionary<string, string> Dictionary { get; set; }

        public LanguageTextCacheItem()
        {
            Dictionary = new Dictionary<string, string>();
        }

        public static string CalculateCacheKey(string resourceName, string cultureName)
        {
            return resourceName + "_" + cultureName;
        }
    }
}