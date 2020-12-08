using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.DependencyInjection;
using Volo.Abp.LanguageManagement.Dto;

namespace Volo.Abp.LanguageManagement
{
    [RemoteService(Name = LanguageManagementRemoteServiceConsts.RemoteServiceName)]
    [Area("languageManagement")]
    [ControllerName("LanguageTexts")]
    [Route("api/language-management/language-texts")]
    public class LanguageTextController : AbpController, ILanguageTextAppService
    {
        protected ILanguageTextAppService LanguageTextAppService { get; }

        public LanguageTextController(ILanguageTextAppService languageTextAppService)
        {
            LanguageTextAppService = languageTextAppService;
        }

        [HttpGet]
        public virtual Task<PagedResultDto<LanguageTextDto>> GetListAsync(GetLanguagesTextsInput input)
        {
            return LanguageTextAppService.GetListAsync(input);
        }

        [HttpGet]
        [Route("{resourceName}/{cultureName}/{name}")]
        public virtual Task<LanguageTextDto> GetAsync(string resourceName, string cultureName, string name, string baseCultureName)
        {
            return LanguageTextAppService.GetAsync(resourceName, cultureName, name, baseCultureName);
        }

        [HttpPut]
        [Route("{resourceName}/{cultureName}/{name}")]
        public virtual async Task UpdateAsync(string resourceName, string cultureName, string name, string value)
        {
            await LanguageTextAppService.UpdateAsync(resourceName, cultureName, name, value);
        }

        [HttpPut]
        [Route("{resourceName}/{cultureName}/{name}/restore")]
        public virtual async Task RestoreToDefaultAsync(string resourceName, string cultureName, string name)
        {
            await LanguageTextAppService.RestoreToDefaultAsync(resourceName, cultureName, name);
        }
    }
}
