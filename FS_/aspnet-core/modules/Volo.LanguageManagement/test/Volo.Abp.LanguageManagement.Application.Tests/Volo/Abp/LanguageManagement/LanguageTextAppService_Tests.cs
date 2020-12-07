using System;
using System.Linq;
using System.Threading.Tasks;
using Shouldly;
using Volo.Abp.LanguageManagement.Dto;
using Xunit;

namespace Volo.Abp.LanguageManagement
{
    public class LanguageTextAppService_Tests : LanguageManagementApplicationTestBase
    {
        private readonly ILanguageTextAppService _languageTextAppService;
        private readonly ILanguageTextRepository _languageTextRepository;

        public LanguageTextAppService_Tests()
        {
            _languageTextAppService = GetRequiredService<ILanguageTextAppService>();
            _languageTextRepository = GetRequiredService<ILanguageTextRepository>();
        }

        [Fact]
        public async Task GetList()
        {
            // Arrange
            var input = new GetLanguagesTextsInput
            {
                MaxResultCount = 10,
                ResourceName = "LanguageManagement",
                BaseCultureName = "en",
                TargetCultureName = "tr"
            };

            // Act
            var list = await _languageTextAppService.GetListAsync(input);

            // Assert
            list.Items.Any().ShouldBeTrue();
            list.Items.ShouldContain(
                i => i.BaseCultureName == "en" &&
                     i.CultureName == "tr" &&
                     i.ResourceName == "LanguageManagement" &&
                     i.Name == "CreateNewLanguage" &&
                     i.Value == "Yeni Dil Yarat"
            );
        }

        [Fact]
        public async Task Update()
        {
            // Act
            await _languageTextAppService.UpdateAsync("LanguageManagement", "tr", "Yes", "Nayır");

            // Assert
            var updatedText = (await _languageTextRepository
                .GetListAsync())
                .FirstOrDefault(lt =>
                          lt.ResourceName == "LanguageManagement" &&
                          lt.CultureName == "tr" &&
                          lt.Name == "Yes" &&
                          lt.Value == "Nayır"
                );

            updatedText.ShouldNotBeNull();
        }

        [Fact]
        public async Task RestoreToDefaultAsync()
        {
            // Arrange
            var languageText =
                new LanguageText(Guid.NewGuid(), "LanguageManagement", "tr", "Yes", "Nayır");

            // Act
            await _languageTextAppService.RestoreToDefaultAsync(languageText.ResourceName, languageText.CultureName, languageText.Name);

            // Assert
            var result = (await _languageTextRepository.GetListAsync()).FirstOrDefault(lt =>
                lt.Name == languageText.Name && lt.CultureName == languageText.CultureName && lt.ResourceName == languageText.ResourceName);

            result.ShouldBeNull();
        }

        [Fact]
        public async Task Get()
        {
            // Arrange

            // Act
            var localizedText = await _languageTextAppService.GetAsync("LanguageManagement", "en", "Yes", "en");

            // Assert
            localizedText.ShouldNotBeNull();
        }
    }
}
