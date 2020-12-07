using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Localization;
using Microsoft.AspNetCore.Mvc.Razor.Internal;
using Microsoft.AspNetCore.Mvc.Rendering;
using Volo.Abp.AspNetCore.Mvc.UI.Bootstrap.TagHelpers.Form;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;
using Volo.Abp.LanguageManagement.Dto;
using Volo.Abp.LanguageManagement.Localization;

namespace Volo.Abp.LanguageManagement.Pages.LanguageManagement.Texts
{
    public class IndexModel: LanguageManagementPageModel
    {
        public List<SelectListItem> BaseCultureNameSelectItems { get; set; } = new List<SelectListItem>();

        public List<SelectListItem> TargetCultureNameSelectItems { get; set; } = new List<SelectListItem>();

        public List<SelectListItem> ResourceNameSelectItems { get; set; } = new List<SelectListItem>();

        public List<SelectListItem> GetOnlyEmptyValuesSelectItems { get; set; } = new List<SelectListItem>();
        
        [SelectItems(nameof(BaseCultureNameSelectItems))]
        public string BaseCultureName { get; set; }
        
        [SelectItems(nameof(TargetCultureNameSelectItems))]
        public string TargetCultureName { get; set; }
        
        [SelectItems(nameof(ResourceNameSelectItems))]
        public string ResourceName { get; set; }

        [DisplayName("TargetValue")]
        [SelectItems(nameof(GetOnlyEmptyValuesSelectItems))]
        public string GetOnlyEmptyValues { get; set; }

        public string Filter { get; set; }

        protected ILanguageAppService LanguageAppService { get; }

        public IndexModel(ILanguageAppService languageAppService)
        {
            LanguageAppService = languageAppService;
        }

        public virtual async Task OnGetAsync()
        {
            var languages = await LanguageAppService.GetAllListAsync();
            var recourses = await LanguageAppService.GetResourcesAsync();

            BaseCultureNameSelectItems = languages.Items.Select(l => new SelectListItem(l.DisplayName, l.CultureName, l.CultureName == BaseCultureName)).ToList();
            TargetCultureNameSelectItems = languages.Items.Select(l => new SelectListItem(l.DisplayName, l.CultureName, l.CultureName == TargetCultureName)).ToList();

            ResourceNameSelectItems = recourses.Select(l => new SelectListItem(l.Name, l.Name)).ToList();
            ResourceNameSelectItems.AddFirst(new SelectListItem("", ""));

            GetOnlyEmptyValuesSelectItems = new List<SelectListItem> { new SelectListItem(L["All"].Value, "false"), new SelectListItem(L["OnlyEmptyValues"].Value, "true") };

            BaseCultureName = CalculateBaseCultureName(languages.Items);
            TargetCultureName = CalculateTargetCultureName(languages.Items, BaseCultureName);
        }

        public virtual Task<IActionResult> OnPostAsync()
        {
            return Task.FromResult<IActionResult>(Page());
        }

        protected virtual string CalculateBaseCultureName(IReadOnlyList<LanguageDto> languages)
        {
            var currentUiCulture = CultureInfo.CurrentUICulture.Name;

            var language = languages.FirstOrDefault(l => l.UiCultureName == currentUiCulture);
            if (language != null)
            {
                return language.UiCultureName;
            }

            if (currentUiCulture.Contains("-"))
            {
                currentUiCulture = currentUiCulture.Substring(0, currentUiCulture.IndexOf('-'));
            }

            language = languages.FirstOrDefault(l => l.UiCultureName == currentUiCulture);
            if (language != null)
            {
                return language.UiCultureName;
            }

            language = languages.FirstOrDefault(l => l.IsDefaultLanguage);
            if (language != null)
            {
                return language.UiCultureName;
            }

            return "en";
        }

        protected virtual string CalculateTargetCultureName(IReadOnlyList<LanguageDto> languages, string baseCultureName)
        {
            var language = languages.FirstOrDefault(l => l.UiCultureName != baseCultureName && l.IsEnabled);
            if (language != null)
            {
                return language.UiCultureName;
            }

            return baseCultureName;
        }
    }
}