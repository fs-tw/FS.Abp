using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.LanguageManagement.Dto;

namespace Volo.Abp.LanguageManagement
{
    public interface ILanguageAppService : 
        ICrudAppService<LanguageDto, Guid, GetLanguagesTextsInput, CreateLanguageDto, UpdateLanguageDto>
    {
        Task<ListResultDto<LanguageDto>> GetAllListAsync();

        Task SetAsDefaultAsync(Guid id);

        Task<List<LanguageResourceDto>> GetResourcesAsync();

        Task<List<CultureInfoDto>> GetCulturelistAsync();

        Task<List<string>> GetFlagListAsync();
    }
}