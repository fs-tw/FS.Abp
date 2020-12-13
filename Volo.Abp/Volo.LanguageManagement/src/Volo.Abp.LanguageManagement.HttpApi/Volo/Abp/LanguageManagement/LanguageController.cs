using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.LanguageManagement.Dto;

namespace Volo.Abp.LanguageManagement
{
    [RemoteService(Name = LanguageManagementRemoteServiceConsts.RemoteServiceName)]
    [Area("languageManagement")]
    [ControllerName("Languages")]
    [Route("api/language-management/languages")]
    public class LanguageController : AbpController, ILanguageAppService
    {
        protected ILanguageAppService LanguageAppService { get; }

        public LanguageController(ILanguageAppService languageAppService)
        {
            LanguageAppService = languageAppService;
        }

        [HttpGet]
        [Route("all")]
        public virtual async Task<ListResultDto<LanguageDto>> GetAllListAsync()
        {
            return await LanguageAppService.GetAllListAsync();
        }

        [HttpGet]
        public virtual async Task<PagedResultDto<LanguageDto>> GetListAsync(GetLanguagesTextsInput input)
        {
            return await LanguageAppService.GetListAsync(input);
        }

        [HttpGet]
        [Route("{id}")]
        public virtual async Task<LanguageDto> GetAsync(Guid id)
        {
            return await LanguageAppService.GetAsync(id);
        }

        [HttpPost]
        public virtual async Task<LanguageDto> CreateAsync(CreateLanguageDto input)
        {
            return await LanguageAppService.CreateAsync(input);
        }

        [HttpPut]
        [Route("{id}")]
        public virtual async Task<LanguageDto> UpdateAsync(Guid id, UpdateLanguageDto input)
        {
            return await LanguageAppService.UpdateAsync(id, input);
        }

        [HttpDelete]
        [Route("{id}")]
        public virtual async Task DeleteAsync(Guid id)
        {
            await LanguageAppService.DeleteAsync(id);
        }

        [HttpPut]
        [Route("{id}/set-as-default")]
        public virtual async Task SetAsDefaultAsync(Guid id)
        {
            await LanguageAppService.SetAsDefaultAsync(id);
        }

        [HttpGet]
        [Route("resources")]
        public virtual Task<List<LanguageResourceDto>> GetResourcesAsync()
        {
            return LanguageAppService.GetResourcesAsync();
        }

        [HttpGet]
        [Route("culture-list")]
        public virtual Task<List<CultureInfoDto>> GetCulturelistAsync()
        {
            return LanguageAppService.GetCulturelistAsync();
        }

        [HttpGet]
        [Route("flag-list")]
        public virtual Task<List<string>> GetFlagListAsync()
        {
            return LanguageAppService.GetFlagListAsync();
        }
    }
}
