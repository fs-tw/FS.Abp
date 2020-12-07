using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Volo.Abp.AspNetCore.Mvc.UI.Bootstrap.TagHelpers.Form;
using Volo.Abp.Localization;
using Volo.Abp.TextTemplateManagement.TextTemplates;

namespace Volo.Abp.TextTemplateManagement.Web.Pages.TextTemplates.Contents
{
    public class IndexModel : TextTemplateManagementPageModel
    {
        [BindProperty(SupportsGet = true)] 
        public string TemplateDefinitionName { get; set; }

        public List<SelectListItem> BaseCultureNameSelectItems { get; set; } = new List<SelectListItem>();

        public List<SelectListItem> TargetCultureNameSelectItems { get; set; } = new List<SelectListItem>();

        [SelectItems(nameof(BaseCultureNameSelectItems))]
        public string BaseCultureName { get; set; }

        [SelectItems(nameof(TargetCultureNameSelectItems))]
        public string TargetCultureName { get; set; }
        
        [TextArea(Rows = 10)]
        public string BaseContent { get; set; }

        [BindProperty]
        [TextArea(Rows = 10)]
        [Required]
        public string TargetContent { get; set; }

        public TemplateDefinitionDto TemplateDefinition { get; protected set; }

        private readonly ILanguageProvider _languageProvider;
        private readonly ITemplateDefinitionAppService _templateDefinitionAppService;

        public IndexModel(
            ILanguageProvider languageProvider, ITemplateDefinitionAppService templateDefinitionAppService)
        {
            _languageProvider = languageProvider;
            _templateDefinitionAppService = templateDefinitionAppService;
        }

        public async Task OnGetAsync()
        {
            TemplateDefinition = await _templateDefinitionAppService.GetAsync(TemplateDefinitionName);

            await SetCultureNameSelectLists();
        }

        protected virtual async Task<IActionResult> SetCultureNameSelectLists()
        {
            var languages = await _languageProvider.GetLanguagesAsync();

            BaseCultureNameSelectItems = 
                languages.Select(l => 
                    new SelectListItem(l.DisplayName, l.CultureName, l.CultureName == CultureInfo.CurrentUICulture.Name)
                ).ToList();

            bool isSelected = false;
            foreach (var l in languages)
            {
                TargetCultureNameSelectItems.Add(new SelectListItem(l.DisplayName, l.CultureName, !isSelected && l.CultureName != CultureInfo.CurrentUICulture.Name));
                isSelected = true;
            }

            return Page();
        }
        
        public virtual Task<IActionResult> OnPostAsync()
        {
            return Task.FromResult<IActionResult>(Page());
        }
    }
}