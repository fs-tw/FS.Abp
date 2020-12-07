using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Volo.Abp.TextTemplateManagement.TextTemplates
{
    public interface ITemplateDefinitionAppService : IApplicationService
    {
        Task<PagedResultDto<TemplateDefinitionDto>> GetListAsync(GetTemplateDefinitionListInput input);

        Task<TemplateDefinitionDto> GetAsync(string name);
    }
}