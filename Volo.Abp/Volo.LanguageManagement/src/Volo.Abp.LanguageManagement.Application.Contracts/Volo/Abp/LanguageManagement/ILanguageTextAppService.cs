using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.LanguageManagement.Dto;

namespace Volo.Abp.LanguageManagement
{
    public interface ILanguageTextAppService : IApplicationService
    {
        Task<PagedResultDto<LanguageTextDto>> GetListAsync(GetLanguagesTextsInput input);

        Task<LanguageTextDto> GetAsync(string resourceName, string cultureName, string name, string baseCultureName);

        Task UpdateAsync(string resourceName, string cultureName, string name,  string value);

        Task RestoreToDefaultAsync(string resourceName, string cultureName, string name);
    }
}