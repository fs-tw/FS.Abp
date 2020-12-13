using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Saas.Host.Dtos;

namespace Volo.Saas.Host
{
    [Controller]
    [RemoteService(Name = SaasHostRemoteServiceConsts.RemoteServiceName)]
    [Area("saas")]
    [ControllerName("Edition")]
    [Route("/api/saas/editions")]
    public class EditionController : AbpController, IEditionAppService
    {
        protected IEditionAppService Service { get; }

        public EditionController(IEditionAppService service)
        {
            Service = service;
        }

        [HttpGet]
        [Route("{id}")]
        public virtual Task<EditionDto> GetAsync(Guid id)
        {
            return Service.GetAsync(id);
        }

        [HttpGet]
        public virtual Task<PagedResultDto<EditionDto>> GetListAsync(GetEditionsInput input)
        {
            return Service.GetListAsync(input);
        }

        [HttpPost]
        public virtual Task<EditionDto> CreateAsync(EditionCreateDto input)
        {
            return Service.CreateAsync(input);
        }

        [HttpPut]
        [Route("{id}")]
        public virtual Task<EditionDto> UpdateAsync(Guid id, EditionUpdateDto input)
        {
            return Service.UpdateAsync(id, input);
        }

        [HttpDelete]
        [Route("{id}")]
        public virtual Task DeleteAsync(Guid id)
        {
            return Service.DeleteAsync(id);
        }

        [HttpGet]
        [Route("statistics/usage-statistic")]
        public virtual Task<GetEditionUsageStatisticsResult> GetUsageStatistics()
        {
            return Service.GetUsageStatistics();
        }
    }
}
