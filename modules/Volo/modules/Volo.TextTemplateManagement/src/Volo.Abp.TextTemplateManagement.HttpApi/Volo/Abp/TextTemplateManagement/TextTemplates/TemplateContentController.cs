using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.TextTemplateManagement.Authorization;

namespace Volo.Abp.TextTemplateManagement.TextTemplates
{
    [RemoteService(Name = TextTemplateManagementRemoteServiceConsts.RemoteServiceName)]
    [Area("textTemplateManagement")]
    [ControllerName("TextTemplateContents")]
    [Route("api/text-template-management/template-contents")]
    [Authorize(TextTemplateManagementPermissions.TextTemplates.Default)]
    public class TemplateContentController : AbpController, ITemplateContentAppService
    {
        private readonly ITemplateContentAppService _appService;

        public TemplateContentController(ITemplateContentAppService appService)
        {
            _appService = appService;
        }

        [HttpGet]
        public virtual async Task<TextTemplateContentDto> GetAsync(GetTemplateContentInput input)
        {
            return await _appService.GetAsync(input);
        }

        [HttpPut]
        [Route("restore-to-default")]
        [Authorize(TextTemplateManagementPermissions.TextTemplates.EditContents)]
        public virtual async Task RestoreToDefaultAsync(RestoreTemplateContentInput input)
        {
            await _appService.RestoreToDefaultAsync(input);
        }

        [HttpPut]
        public virtual async Task<TextTemplateContentDto> UpdateAsync(UpdateTemplateContentInput input)
        {
            return await _appService.UpdateAsync(input);
        }
    }
}