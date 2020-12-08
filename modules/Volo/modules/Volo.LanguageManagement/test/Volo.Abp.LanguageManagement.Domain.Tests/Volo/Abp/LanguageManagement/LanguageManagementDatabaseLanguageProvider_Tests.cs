using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Shouldly;
using Volo.Abp.Localization;
using Xunit;

namespace Volo.Abp.LanguageManagement
{
    public class LanguageManagementDatabaseLanguageProvider_Tests : LanguageManagementDomainTestBase
    {
        private readonly ILanguageProvider _languageProvider;

        public LanguageManagementDatabaseLanguageProvider_Tests()
        {
            _languageProvider = GetRequiredService<ILanguageProvider>();
        }

        [Fact]
        public void Services_Should_Replace()
        {
            _languageProvider.ShouldNotBeNull();
            _languageProvider.GetType().ShouldBe(typeof(DatabaseLanguageProvider));
        }

        [Fact]
        public async Task GetLanguagesAsync()
        {
            var lang = await _languageProvider.GetLanguagesAsync();
            lang.Count.ShouldBe(2);
        }
    }
}
