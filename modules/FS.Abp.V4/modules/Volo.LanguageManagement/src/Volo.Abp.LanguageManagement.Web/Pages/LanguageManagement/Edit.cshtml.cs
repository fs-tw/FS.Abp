using System;
using System.Collections.Generic;
using System.ComponentModel;
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
    public class EditModel: LanguageManagementPageModel
    {
        protected ILanguageAppService LanguageAppService { get; }

        [BindProperty]
        public LanguageEditModalView Language { get; set; }

        public List<SelectListItem> FlagSelectList { get; set; } = new List<SelectListItem>();

        [BindProperty(SupportsGet = true)]
        public Guid Id { get; set; }

        public EditModel(ILanguageAppService languageAppService)
        {
            LanguageAppService = languageAppService;
        }

        public virtual async Task OnGetAsync()
        {
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

            var language = await LanguageAppService.GetAsync(Id);
            Language = ObjectMapper.Map<LanguageDto, LanguageEditModalView>(language);
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            var language = ObjectMapper.Map<LanguageEditModalView, UpdateLanguageDto>(Language);

            await LanguageAppService.UpdateAsync(Language.Id, language);

            return NoContent();
        }

        public class LanguageEditModalView : ExtensibleObject
        {
            [HiddenInput]
            public Guid Id { get; set; }

            public string DisplayName { get; set; }

            public string FlagIcon { get; set; }

            public bool IsEnabled { get; set; }
        }
    }
}
