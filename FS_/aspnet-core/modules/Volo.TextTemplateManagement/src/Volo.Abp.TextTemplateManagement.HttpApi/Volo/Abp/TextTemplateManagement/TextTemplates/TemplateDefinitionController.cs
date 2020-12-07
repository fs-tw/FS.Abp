using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.TextTemplateManagement.Authorization;

namespace Volo.Abp.TextTemplateManagement.TextTemplates
{
    [RemoteService(Name = TextTemplateManagementRemoteServiceConsts.RemoteServiceName)]
    [Area("textTemplateManagement")]
    [ControllerName("TextTemplateDefinitions")]
    [Route("api/text-template-management/template-definitions")]
    [Authorize(TextTemplateManagementPermissions.TextTemplates.Default)]
    public class TemplateDefinitionController : AbpController, ITemplateDefinitionAppService
    {
        private readonly ITemplateDefinitionAppService _templateDefinitionAppService;

        public TemplateDefinitionController(ITemplateDefinitionAppService templateDefinitionAppService)
        {
            _templateDefinitionAppService = templateDefinitionAppService;
        }

        [HttpGet]
        public virtual async Task<PagedResultDto<TemplateDefinitionDto>> GetListAsync(GetTemplateDefinitionListInput input)
        {
            return await _templateDefinitionAppService.GetListAsync(input);
        }

        [HttpGet]
        [Route("{name}")]
        public virtual async Task<TemplateDefinitionDto> GetAsync(string name)
        {
            return await _templateDefinitionAppService.GetAsync(name);
        }
    }
}