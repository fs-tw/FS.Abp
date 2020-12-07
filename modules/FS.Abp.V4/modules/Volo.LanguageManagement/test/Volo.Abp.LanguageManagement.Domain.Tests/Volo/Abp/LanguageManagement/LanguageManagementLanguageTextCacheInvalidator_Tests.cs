using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Castle.DynamicProxy.Generators;
using Microsoft.Extensions.Options;
using Shouldly;
using Volo.Abp.Caching;
using Volo.Abp.Localization;
using Xunit;

namespace Volo.Abp.LanguageManagement
{
    public class LanguageManagementLanguageTextCacheInvalidator_Tests : LanguageManagementDomainTestBase
    {
        private readonly ILanguageTextRepository _languageTextRepository;
        private readonly IDistributedCache<LanguageTextCacheItem> _cache;
        private readonly IDynamicResourceLocalizer _dynamicResourceLocalizer;
        private readonly AbpLocalizationOptions _abpLocalizationOptions;

        public LanguageManagementLanguageTextCacheInvalidator_Tests()
        {
            _languageTextRepository = GetRequiredService<ILanguageTextRepository>();
            _cache = GetRequiredService<IDistributedCache<LanguageTextCacheItem>>();
            _dynamicResourceLocalizer = GetRequiredService<IDynamicResourceLocalizer>();
            _abpLocalizationOptions = GetRequiredService<IOptions<AbpLocalizationOptions>>().Value;
        }


        [Fact]
        public async Task Cache_Should_Invalidator_WhenLanguageTextChanged()
        {
            // Arrange
            var resource = _abpLocalizationOptions.Resources.Values.First(x => x.ResourceName == "LanguageManagement");
            var text = await _languageTextRepository.InsertAsync(
                new LanguageText(Guid.NewGuid(), "LanguageManagement", "en", "Invalidator", "Invalidator"));

            // GetOrNull will cache LanguageText
            _dynamicResourceLocalizer.GetOrNull(resource, "en", "Invalidator");
            (await _cache.GetAsync(LanguageTextCacheItem.CalculateCacheKey(resource.ResourceName, "en"))).ShouldNotBeNull();

            // Act
            await _languageTextRepository.DeleteAsync(text.Id);

            // Assert
            (await _cache.GetAsync(LanguageTextCacheItem.CalculateCacheKey(resource.ResourceName, "en"))).ShouldBeNull();

        }

    }
}
