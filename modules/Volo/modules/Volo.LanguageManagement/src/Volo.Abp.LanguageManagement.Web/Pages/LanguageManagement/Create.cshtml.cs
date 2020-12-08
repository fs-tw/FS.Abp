using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Volo.Abp.AspNetCore.Mvc.UI.Bootstrap.TagHelpers.Form;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;
using Volo.Abp.LanguageManagement.Dto;
using Volo.Abp.ObjectExtending;

namespace Volo.Abp.LanguageManagement.Pages.LanguageManagement
{
    public class CreateModel: LanguageManagementPageModel
    {
        public List<SelectListItem> CultureSelectList { get; set; } = new List<SelectListItem>();

        public List<SelectListItem> UiCultureSelectList { get; set; } = new List<SelectListItem>();

        public List<SelectListItem> FlagSelectList { get; set; } = new List<SelectListItem>();

        protected ILanguageAppService LanguageAppService { get; }

        [BindProperty]
        public LanguageCreateModalView Language { get; set; }

        public CreateModel(ILanguageAppService languageAppService)
        {
            LanguageAppService = languageAppService;
        }

        public virtual Task OnGetAsync()
        {
            Language = new LanguageCreateModalView();

            var allCultures = CultureInfo.GetCultures(CultureTypes.AllCultures);

            var regions =  CultureInfo.GetCultures(CultureTypes.SpecificCultures)
                .Select(c => new RegionInfo(c.Name))
                .GroupBy(r => r.TwoLetterISORegionName)
                .Select(g => g.First())
                .ToList();

            foreach (var flagCode in LanguageManagementFlagCodeConsts.FlagCodes)
            {
                var region = regions.FirstOrDefault(r => flagCode.Equals(r.TwoLetterISORegionName, StringComparison.InvariantCultureIgnoreCase));

                if (region?.DisplayName != null)
                {
                    FlagSelectList.Add(new SelectListItem(region.DisplayName, flagCode));
                }
            }

            CultureSelectList = allCultures.Select(c => new SelectListItem(c.DisplayName, c.Name)).ToList();

            if (CultureSelectList.Any())
            {
                CultureSelectList.FirstOrDefault().Text = "";
                CultureSelectList.FirstOrDefault().Value = "";
            }

            UiCultureSelectList = CultureSelectList;

            return Task.CompletedTask;
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            var language = ObjectMapper.Map<LanguageCreateModalView, CreateLanguageDto>(Language);

            await LanguageAppService.CreateAsync(language);

            return NoContent();
        }

        public class LanguageCreateModalView : ExtensibleObject
        {
            [Required]
            [SelectItems(nameof(CultureSelectList))]
            public string CultureName { get; set; }

            [Required]
            [SelectItems(nameof(CultureSelectList))]
            public string UiCultureName { get; set; }

            [Required]
            public string DisplayName { get; set; }

            public string FlagIcon { get; set; }

            public bool IsEnabled { get; set; } = true;
        }
    }
}
