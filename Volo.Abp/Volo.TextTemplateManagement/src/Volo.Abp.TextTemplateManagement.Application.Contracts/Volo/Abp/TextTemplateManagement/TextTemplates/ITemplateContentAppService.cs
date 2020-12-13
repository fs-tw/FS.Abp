using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace Volo.Abp.TextTemplateManagement.TextTemplates
{
    public interface ITemplateContentAppService : IApplicationService
    {
        Task<TextTemplateContentDto> GetAsync(GetTemplateContentInput input);

        Task RestoreToDefaultAsync(RestoreTemplateContentInput input);

        Task<TextTemplateContentDto> UpdateAsync(UpdateTemplateContentInput input);
    }
}