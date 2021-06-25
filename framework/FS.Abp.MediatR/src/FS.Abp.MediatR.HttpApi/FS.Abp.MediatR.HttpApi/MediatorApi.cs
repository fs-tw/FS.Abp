using FS.Abp.MediatR;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Abp.MediatR.HttpApi
{
    [Area("mediator")]
    [RemoteService(true)]
    [ControllerName("FS(mediator)")]
    [Route("api/mediator")]
    public class MediatorApi : AbpController
    {
        protected IMediator Mediator => this.LazyServiceProvider.LazyGetRequiredService<IMediator>();

        [Route("query")]
        [HttpPost]
        public async Task<object> Query(IQuery request)
        {
            return await this.Mediator.Send(request);

        }

        [Route("command")]
        [HttpPost]
        public async Task<object> Command(ICommand request)
        {
            return await this.Mediator.Send(request);
        }

 
    }
}
