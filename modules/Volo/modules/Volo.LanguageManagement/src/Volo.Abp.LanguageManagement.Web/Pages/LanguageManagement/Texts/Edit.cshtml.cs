using System.ComponentModel;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.Bootstrap.TagHelpers.Form;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace Volo.Abp.LanguageManagement.Pages.LanguageManagement.Texts
{
    public class EditModel: LanguageManagementPageModel
    {
        [BindProperty]
        public EditLanguageTextModalView LanguageTextToEdit { get; set; }

        [BindProperty(SupportsGet = true)]
        public string Name { get; set; }

        [BindProperty(SupportsGet = true)]
        public string ResourceName { get; set; }

        [BindProperty(SupportsGet = true)]
        public string TargetCultureName { get; set; }

        [BindProperty(SupportsGet = true)]
        public string BaseCultureName { get; set; }

        protected ILanguageTextAppService LanguageTextAppService { get; }

        public EditModel(ILanguageTextAppService languageTextAppService)
        {
            LanguageTextAppService = languageTextAppService;
        }

        public virtual async Task OnGetAsync()
        {
            var languageText = await LanguageTextAppService.GetAsync(
                ResourceName,
                TargetCultureName,
                Name, BaseCultureName);

            LanguageTextToEdit = new EditLanguageTextModalView
            {
                BaseCultureName = languageText.BaseCultureName,
                BaseCultureValue = languageText.BaseValue,
                Name = languageText.Name,
                ResourceName = languageText.ResourceName,
                TargetCultureName = languageText.CultureName,
                TargetCultureValue = languageText.Value
            };
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            ValidateModel();

            if (LanguageTextToEdit.RestoreToDefault)
            {
                await LanguageTextAppService.RestoreToDefaultAsync(LanguageTextToEdit.ResourceName, LanguageTextToEdit.TargetCultureName, LanguageTextToEdit.Name);

                return NoContent();
            }

            await LanguageTextAppService.UpdateAsync(LanguageTextToEdit.ResourceName, LanguageTextToEdit.TargetCultureName, LanguageTextToEdit.Name, LanguageTextToEdit.TargetCultureValue);

            return NoContent();
        }

        public class EditLanguageTextModalView
        {
            [HiddenInput]
            public string Name { get; set; }

            [HiddenInput]
            public string ResourceName { get; set; }

            [HiddenInput]
            public string BaseCultureName { get; set; }

            [HiddenInput]
            public string TargetCultureName { get; set; }

            [TextArea(Rows = 4)]
            public string BaseCultureValue { get; set; }

            [TextArea(Rows = 4)]
            public string TargetCultureValue { get; set; }
            
            [HiddenInput]
            public bool RestoreToDefault { get; set; } = false;
        }
    }
}