using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Options;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.LanguageManagement.Dto;
using Volo.Abp.Localization;
using Volo.Abp.ObjectExtending;
using Volo.Abp.SettingManagement;

namespace Volo.Abp.LanguageManagement
{
    [Authorize(LanguageManagementPermissions.Languages.Default)]
    public class LanguageAppService : LanguageAppServiceBase, ILanguageAppService
    {
        protected ISettingManager SettingManager { get; }
        protected ILanguageRepository LanguageRepository { get; }
        protected AbpLocalizationOptions AbpLocalizationOptions { get; }

        public LanguageAppService(
            ISettingManager settingManager,
            IOptions<AbpLocalizationOptions> abpLocalizationOptions,
            ILanguageRepository languageRepository)
        {
            SettingManager = settingManager;
            LanguageRepository = languageRepository;
            AbpLocalizationOptions = abpLocalizationOptions.Value;
        }

        public virtual async Task<ListResultDto<LanguageDto>> GetAllListAsync()
        {
            var languages = await LanguageRepository.GetListAsync();
            var defaultLanguage = await FindDefaultLanguage(languages);

            var languageDtos = ObjectMapper.Map<List<Language>, List<LanguageDto>>(languages);

            if (defaultLanguage != null)
            {
                var defaultLanguageDto = languageDtos.Find(
                    l => l.CultureName == defaultLanguage.CultureName &&
                         l.UiCultureName == defaultLanguage.CultureName
                );

                if (defaultLanguageDto != null)
                {
                    defaultLanguageDto.IsDefaultLanguage = true;
                }
            }

            return new ListResultDto<LanguageDto>(languageDtos);
        }

        public async Task<PagedResultDto<LanguageDto>> GetListAsync(GetLanguagesTextsInput input)
        {
            var languages = await LanguageRepository.GetListAsync(input.Sorting,input.MaxResultCount,input.SkipCount,input.Filter);
            var totalCount = await LanguageRepository.GetCountAsync(input.Filter);
            var defaultLanguage = await FindDefaultLanguage(languages);

            var languageDtos = ObjectMapper.Map<List<Language>, List<LanguageDto>>(languages);

            if (defaultLanguage != null)
            {
                var defaultLanguageDto = languageDtos.Find(
                    l => l.CultureName == defaultLanguage.CultureName &&
                         l.UiCultureName == defaultLanguage.CultureName
                );

                if (defaultLanguageDto != null)
                {
                    defaultLanguageDto.IsDefaultLanguage = true;
                }
            }

            return new PagedResultDto<LanguageDto>(totalCount,languageDtos);
        }

        [Authorize(LanguageManagementPermissions.Languages.Delete)]
        public virtual async Task DeleteAsync(Guid id)
        {
            await LanguageRepository.DeleteAsync(id);
        }

        [Authorize(LanguageManagementPermissions.Languages.ChangeDefault)]
        public virtual async Task SetAsDefaultAsync(Guid id)
        {
            var language = await LanguageRepository.GetAsync(id);
            await SettingManager.SetForCurrentTenantAsync(
                LocalizationSettingNames.DefaultLanguage,
                $"{language.CultureName};{language.UiCultureName}"
            );
        }

        [Authorize(LanguageManagementPermissions.Languages.Create)]
        public virtual async Task<LanguageDto> CreateAsync(CreateLanguageDto input)
        {
            var language = new Language(
                GuidGenerator.Create(),
                input.CultureName,
                input.UiCultureName,
                input.DisplayName,
                input.FlagIcon,
                input.IsEnabled
            );

            input.MapExtraPropertiesTo(language);

            language = await LanguageRepository.InsertAsync(language);

            return ObjectMapper.Map<Language, LanguageDto>(language);
        }

        public virtual async Task<LanguageDto> GetAsync(Guid id)
        {
            var language = await LanguageRepository.GetAsync(id);

            var languageDto = ObjectMapper.Map<Language, LanguageDto>(language);

            languageDto.IsDefaultLanguage = await IsDefaultLanguage(language);

            return languageDto;
        }

        [Authorize(LanguageManagementPermissions.Languages.Edit)]
        public virtual async Task<LanguageDto> UpdateAsync(Guid id, UpdateLanguageDto input)
        {
            var language = await LanguageRepository.GetAsync(id);

            language.SetDisplayName(input.DisplayName);
            language.FlagIcon = input.FlagIcon;
            language.IsEnabled = input.IsEnabled;

            input.MapExtraPropertiesTo(language);

            await LanguageRepository.UpdateAsync(language);

            return ObjectMapper.Map<Language, LanguageDto>(language);
        }

        public virtual Task<List<LanguageResourceDto>> GetResourcesAsync()
        {
            var list = AbpLocalizationOptions.Resources
                .Values
                .Select(r => new LanguageResourceDto {Name = r.ResourceName})
                .ToList();

            return Task.FromResult(list);
        }

        public virtual async Task<List<CultureInfoDto>> GetCulturelistAsync()
        {
            //return CultureInfo.GetCultures(CultureTypes.AllCultures).ToList(); // See https://github.com/dotnet/corefx/issues/38579

            return await Task.FromResult(CultureInfo.GetCultures(CultureTypes.AllCultures).Select(c=> new CultureInfoDto
            {
                DisplayName = c.DisplayName,
                Name = c.Name
            }).ToList());
        }

        public virtual Task<List<string>> GetFlagListAsync()
        {
            var regions =  CultureInfo.GetCultures(CultureTypes.SpecificCultures)
            .Select(c => new RegionInfo(c.Name))
            .GroupBy(r => r.TwoLetterISORegionName)
            .Select(g => g.First())
            .ToList();

            var flags = new List<string>();
            foreach (var flagCode in LanguageManagementFlagCodeConsts.FlagCodes)
            {
                var region = regions.FirstOrDefault(r => flagCode.Equals(r.TwoLetterISORegionName, StringComparison.InvariantCultureIgnoreCase));

                if (region?.DisplayName != null)
                {
                    flags.Add(flagCode);
                }
            }

            return Task.FromResult(flags);
        }

        protected virtual async Task<Language> FindDefaultLanguage(List<Language> languages)
        {
            var settingValue = await SettingManager.GetOrNullForCurrentTenantAsync(LocalizationSettingNames.DefaultLanguage);
            if (settingValue.IsNullOrEmpty())
            {
                return null;
            }

            var (cultureName, uiCultureName) = LocalizationSettingHelper.ParseLanguageSetting(settingValue);
            return languages.FindByCulture(cultureName, uiCultureName);
        }

        protected virtual async Task<bool> IsDefaultLanguage(Language language)
        {
            var settingValue = await SettingManager.GetOrNullForCurrentTenantAsync(LocalizationSettingNames.DefaultLanguage);
            if (settingValue.IsNullOrEmpty())
            {
                return false;
            }

            var (cultureName, uiCultureName) = LocalizationSettingHelper.ParseLanguageSetting(settingValue);

            return language.CultureName == cultureName && language.UiCultureName == uiCultureName;
        }
    }
}
