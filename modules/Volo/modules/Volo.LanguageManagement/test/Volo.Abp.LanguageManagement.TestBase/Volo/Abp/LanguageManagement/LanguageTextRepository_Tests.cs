using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Shouldly;
using Volo.Abp.Modularity;
using Xunit;

namespace Volo.Abp.LanguageManagement
{
    public abstract class LanguageTextRepository_Tests<TStartupModule> : LanguageManagementTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
        protected readonly ILanguageTextRepository _languageTextRepository;

        protected LanguageTextRepository_Tests()
        {
            _languageTextRepository = ServiceProvider.GetRequiredService<ILanguageTextRepository>();
        }

        [Fact]
        public async Task GetListAsync()
        {
            (await _languageTextRepository.GetListAsync()).Any().ShouldBeFalse();

            await _languageTextRepository.InsertAsync(
                new LanguageText(Guid.NewGuid(), "LanguageManagement", "tr", "Tes", "Nayır"));

            (await _languageTextRepository.GetListAsync()).Any().ShouldBeTrue();
        }
    }
}
