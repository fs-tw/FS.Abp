using Volo.Abp.Application.Dtos;

namespace Volo.Abp.TextTemplateManagement.TextTemplates
{
    public class GetTemplateDefinitionListInput : PagedAndSortedResultRequestDto
    {
        public string FilterText { get; set; }
    }
}