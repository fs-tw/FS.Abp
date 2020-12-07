using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.Bootstrap.TagHelpers.Form;
using Volo.Abp.TextTemplateManagement.TextTemplates;

namespace Volo.Abp.TextTemplateManagement.Web.Pages.TextTemplates.Contents
{
    public class InlineContentModel : TextTemplateManagementPageModel
    {
        [BindProperty(SupportsGet = true)] 
        public string TemplateDefinitionName { get; set; }

        [BindProperty]
        [TextArea(Rows = 10)]
        [Required]
        public string TemplateContent { get; set; }

        private readonly ITemplateContentAppService _templateContentAppService;
        private readonly ITemplateDefinitionAppService _templateDefinitionAppService;

        public TemplateDefinitionDto TemplateDefinition { get; protected set; }

        public InlineContentModel(
            ITemplateContentAppService templateContentAppService, 
            ITemplateDefinitionAppService templateDefinitionAppService)
        {
            _templateContentAppService = templateContentAppService;
            _templateDefinitionAppService = templateDefinitionAppService;
        }

        public virtual async Task<IActionResult> OnGetAsync()
        {
            TemplateDefinition = await _templateDefinitionAppService.GetAsync(TemplateDefinitionName);

            var templateContentDto = await _templateContentAppService.GetAsync(
                new GetTemplateContentInput()
                {
                    CultureName = null,
                    TemplateName = TemplateDefinitionName
                });

            TemplateContent = templateContentDto.Content;

            return Page();
        }

        public virtual Task<IActionResult> OnPostAsync()
        {
            return Task.FromResult<IActionResult>(Page());
        }
    }
}