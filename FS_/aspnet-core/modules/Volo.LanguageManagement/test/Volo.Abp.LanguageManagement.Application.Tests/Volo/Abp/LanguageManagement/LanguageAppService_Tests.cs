using System;
using System.Linq;
using System.Threading.Tasks;
using Shouldly;
using Volo.Abp.LanguageManagement.Dto;
using Volo.Abp.Localization;
using Volo.Abp.SettingManagement;
using Xunit;

namespace Volo.Abp.LanguageManagement
{
    public class LanguageAppService_Tests : LanguageManagementApplicationTestBase
    {
        private readonly ILanguageAppService _languageAppService;
        private readonly ILanguageRepository _languageRepository;
        private readonly ISettingManager _settingManager;

        public LanguageAppService_Tests()
        {
            _languageAppService = GetRequiredService<ILanguageAppService>();
            _languageRepository = GetRequiredService<ILanguageRepository>();
            _settingManager = GetRequiredService<ISettingManager>();
        }

        [Theory]
        [InlineData(true)]
        [InlineData(false)]
        public async Task CreateAsync(bool isEnabled)
        {
            var output = await _languageAppService.CreateAsync(
                new CreateLanguageDto
                {
                    CultureName = "ko",
                    UiCultureName = "ko",
                    IsEnabled = isEnabled,
                    DisplayName = "Korean",
                    FlagIcon = "ko"
                }
            );

            output.CultureName.ShouldBe("ko");
            output.UiCultureName.ShouldBe("ko");
            output.IsEnabled.ShouldBe(isEnabled);
            output.DisplayName.ShouldBe("Korean");
            output.FlagIcon.ShouldBe("ko");
            output.Id.ShouldNotBe(Guid.Empty);

            var language = await _languageRepository.GetAsync(output.Id);
            language.CultureName.ShouldBe("ko");
            language.UiCultureName.ShouldBe("ko");
            language.IsEnabled.ShouldBe(isEnabled);
            language.DisplayName.ShouldBe("Korean");
            language.FlagIcon.ShouldBe("ko");
        }

        [Fact]
        public async Task GetListAsync()
        {
            // Arrange

            // Act
            var list1 = await _languageAppService.GetAllListAsync();

            // Assert
            var count = await _languageRepository.GetCountAsync();

            list1.Items.Count.ShouldBe((int)count);
        }

        [Fact]
        public async Task GetAsync()
        {
            // Arrange
            var inputId = Guid.NewGuid();
            var cultureName = "cultureName";
            await _languageRepository.InsertAsync(new Language(inputId, cultureName));

            // Act
            var language = await _languageAppService.GetAsync(inputId);

            // Assert
            language.CultureName.ShouldBe(cultureName);
        }

        [Fact]
        public async Task SetAsDefaultAsync()
        {
            // Arrange
            var aLanguage = await _languageRepository.InsertAsync(new Language(new Guid(), "tr", "tr"));

            // Act
            await _languageAppService.SetAsDefaultAsync(aLanguage.Id);

            // Assert
            var settingValue = await _settingManager.GetOrNullForCurrentTenantAsync(LocalizationSettingNames.DefaultLanguage);
            var (cultureName, uiCultureName) = LocalizationSettingHelper.ParseLanguageSetting(settingValue);

            cultureName.ShouldBe(aLanguage.CultureName);
            uiCultureName.ShouldBe(aLanguage.UiCultureName);
        }

        [Fact]
        public async Task UpdateAsync()
        {
            // Arrange
            var languageToUpdate = (await _languageRepository.GetListAsync()).FirstOrDefault();
            var newFlagIcon = "newFlagIcon";

            // Act
            var updatedLanguage = await _languageAppService.UpdateAsync(languageToUpdate.Id, new UpdateLanguageDto()
            {
                DisplayName = languageToUpdate.DisplayName,
                FlagIcon = newFlagIcon,
                IsEnabled = languageToUpdate.IsEnabled
            });

            // Assert
            updatedLanguage.FlagIcon.ShouldBe(newFlagIcon);
        }


        [Fact]
        public async Task DeleteAsync()
        {
            // Arrange
            var languageToDelete = (await _languageRepository.GetListAsync()).FirstOrDefault();

            // Act
            languageToDelete.ShouldNotBeNull();

            await _languageAppService.DeleteAsync(languageToDelete.Id);

            (await _languageRepository.FindAsync(languageToDelete.Id)).ShouldBeNull();
        }

        [Fact]
        public async Task GetFlagListAsync()
        {
            var list1 = await _languageAppService.GetFlagListAsync();

            list1.ShouldNotBeEmpty();
        }
    }
}
