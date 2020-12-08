using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Localization;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.LanguageManagement.Dto;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace Volo.Abp.LanguageManagement
{
    [Authorize(LanguageManagementPermissions.LanguageTexts.Default)]
    public class LanguageTextAppService : LanguageAppServiceBase, ILanguageTextAppService
    {
        protected ILanguageTextRepository LanguageTextRepository { get; }
        protected IStringLocalizerFactory LocalizerFactory { get; }
        protected AbpLocalizationOptions AbpLocalizationOptions { get; }

        public LanguageTextAppService(ILanguageTextRepository languageTextRepository, IOptions<AbpLocalizationOptions> abpLocalizationOptions, IStringLocalizerFactory localizerFactory)
        {
            LanguageTextRepository = languageTextRepository;
            LocalizerFactory = localizerFactory;
            AbpLocalizationOptions = abpLocalizationOptions.Value;
        }

        public virtual Task<PagedResultDto<LanguageTextDto>> GetListAsync(GetLanguagesTextsInput input)
        {
            var languageTexts = new List<LanguageTextDto>();

            foreach (var resourceName in GetResourceNames(input))
            {
                languageTexts.AddRange(GetLocalizationsFromResource(input, resourceName));
            }

            var filteredQuery = languageTexts
                .AsQueryable()
                .WhereIf(
                    !input.Filter.IsNullOrWhiteSpace(),
                    l =>
                        (l.Name != null && l.Name.IndexOf(input.Filter, StringComparison.OrdinalIgnoreCase) >= 0) ||
                        (l.BaseValue != null && l.BaseValue.IndexOf(input.Filter, StringComparison.OrdinalIgnoreCase) >= 0) ||
                        (!input.GetOnlyEmptyValues && l.Value != null && l.Value.IndexOf(input.Filter, StringComparison.InvariantCultureIgnoreCase) >= 0)
                );

            var languagesTextDtos = filteredQuery
                .OrderBy(input.Sorting ?? $"{nameof(LanguageTextDto.Name)} ASC")
                .PageBy(input)
                .ToList();

            return Task.FromResult(new PagedResultDto<LanguageTextDto>(
                filteredQuery.Count(),
                languagesTextDtos
            ));
        }

        protected virtual List<string> GetResourceNames(GetLanguagesTextsInput input)
        {
            var resourceNames = new List<string>();

            if (string.IsNullOrWhiteSpace(input.ResourceName))
            {
                resourceNames.AddRange(
                    AbpLocalizationOptions
                        .Resources
                        .Values
                        .Select(l => l.ResourceName)
                );
            }
            else
            {
                resourceNames.Add(input.ResourceName);
            }

            return resourceNames;
        }

        public virtual Task<LanguageTextDto> GetAsync(string resourceName, string cultureName, string name, string baseCultureName)
        {
            var localizer = GetLocalizer(resourceName);

            var languageTextDto = new LanguageTextDto
            {
                Name = name,
                ResourceName = resourceName,
                CultureName = cultureName,
                BaseCultureName = baseCultureName
            };

            using (CultureHelper.Use(CultureInfo.GetCultureInfo(baseCultureName)))
            {
                languageTextDto.BaseValue = baseCultureName != null
                    ? localizer.GetAllStrings(false).FirstOrDefault(lt => lt.Name == name)?.Value ?? ""
                    : "";
            }

            using (CultureHelper.Use(CultureInfo.GetCultureInfo(cultureName)))
            {
                languageTextDto.Value = localizer.GetAllStrings(false).FirstOrDefault(lt => lt.Name == name)?.Value ?? "";
            }

            return Task.FromResult(languageTextDto);
        }

        [Authorize(LanguageManagementPermissions.LanguageTexts.Edit)]
        public virtual async Task UpdateAsync(string resourceName, string cultureName, string name, string value)
        {
            value ??= "";

            using (CultureHelper.Use(CultureInfo.GetCultureInfo(cultureName)))
            {
                var localizerValue = GetLocalizer(resourceName)
                                         .GetAllStrings(false)
                                         .FirstOrDefault(lt => lt.Name == name)?.Value ?? "";

                if (localizerValue == value)
                {
                    return;
                }
            }

            var text = (await LanguageTextRepository.GetListAsync()).FirstOrDefault(l =>
                l.CultureName == cultureName && l.ResourceName == resourceName &&
                l.Name == name);

            if (text == null)
            {
                await LanguageTextRepository.InsertAsync(
                    new LanguageText(GuidGenerator.Create(), resourceName, cultureName, name, value, CurrentTenant?.Id)
                );
            }
            else
            {
                text.Value = value;
                await LanguageTextRepository.UpdateAsync(text);
            }
        }

        public virtual async Task RestoreToDefaultAsync(string resourceName, string cultureName, string name)
        {
            var text = (await LanguageTextRepository.GetListAsync()).FirstOrDefault(l =>
                l.CultureName == cultureName && l.ResourceName == resourceName &&
                l.Name == name);

            if (text == null)
            {
                return;
            }

            await LanguageTextRepository.DeleteAsync(text);
        }

        protected virtual List<LanguageTextDto> GetLocalizationsFromResource(
            GetLanguagesTextsInput input,
            string resourceName)
        {
            var localizer = GetLocalizer(resourceName);

            List<LocalizedString> baseLocalizedStrings;
            List<LocalizedString> targetLocalizedStrings;

            using (CultureHelper.Use(CultureInfo.GetCultureInfo(input.BaseCultureName)))
            {
                baseLocalizedStrings = localizer
                    .GetAllStrings(includeParentCultures: true, includeBaseLocalizers: false)
                    .ToList();
            }

            using (CultureHelper.Use(CultureInfo.GetCultureInfo(input.TargetCultureName)))
            {
                targetLocalizedStrings = localizer
                    .GetAllStrings(includeParentCultures: false, includeBaseLocalizers: false)
                    .ToList();
            }

            var languageTextDtos = new List<LanguageTextDto>();

            foreach (var baseLocalizedString in baseLocalizedStrings)
            {
                var target = targetLocalizedStrings.FirstOrDefault(l => l.Name == baseLocalizedString.Name);

                if (input.GetOnlyEmptyValues)
                {
                    if (!string.IsNullOrEmpty(target?.Value))
                    {
                        continue;
                    }
                }

                languageTextDtos.Add(
                    new LanguageTextDto
                    {
                        BaseCultureName = input.BaseCultureName,
                        CultureName = input.TargetCultureName,
                        Name = baseLocalizedString.Name,
                        BaseValue = baseLocalizedString.Value,
                        ResourceName = resourceName,
                        Value = target?.Value ?? ""
                    }
                );
            }

            return languageTextDtos;
        }

        protected virtual IStringLocalizer GetLocalizer(LocalizationResource resource)
        {
            return LocalizerFactory.Create(resource.ResourceType);
        }

        protected virtual IStringLocalizer GetLocalizer(string recourseName)
        {
            return GetLocalizer(GetLocalizationResource(recourseName));
        }

        protected virtual LocalizationResource GetLocalizationResource(string resourceName)
        {
            var resource = AbpLocalizationOptions.Resources
                .Values
                .FirstOrDefault(r => r.ResourceName == resourceName);

            if (resource == null)
            {
                throw new AbpException($"Resource not found: {resourceName}");
            }

            return resource;
        }
    }
}
