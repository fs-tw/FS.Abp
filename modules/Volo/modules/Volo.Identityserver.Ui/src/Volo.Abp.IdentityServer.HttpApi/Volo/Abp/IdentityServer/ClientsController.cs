using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Auditing;
using Volo.Abp.IdentityServer.Client;
using Volo.Abp.IdentityServer.Client.Dtos;

namespace Volo.Abp.IdentityServer
{
    [RemoteService(Name = IdentityServerRemoteServiceConsts.RemoteServiceName)]
    [Area("identityServer")]
    [Controller]
    [ControllerName("Clients")]
    [Route("api/identity-server/clients")]
    [DisableAuditing]
    public class ClientsController : AbpController, IClientAppService
    {
        protected IClientAppService ClientAppService { get; }

        public ClientsController(IClientAppService clientAppService)
        {
            ClientAppService = clientAppService;
        }

        [HttpGet]
        public virtual Task<PagedResultDto<ClientWithDetailsDto>> GetListAsync(GetClientListInput input)
        {
            return ClientAppService.GetListAsync(input);
        }

        [HttpGet]
        [Route("{id}")]
        public virtual Task<ClientWithDetailsDto> GetAsync(Guid id)
        {
            return ClientAppService.GetAsync(id);
        }

        [HttpPost]
        public virtual Task<ClientWithDetailsDto> CreateAsync(CreateClientDto input)
        {
            return ClientAppService.CreateAsync(input);
        }

        [HttpPut]
        [Route("{id}")]
        public virtual Task<ClientWithDetailsDto> UpdateAsync(Guid id, UpdateClientDto input)
        {
            return ClientAppService.UpdateAsync(id, input);
        }

        [HttpDelete]
        public virtual Task DeleteAsync(Guid id)
        {
            return ClientAppService.DeleteAsync(id);
        }
    }
}
