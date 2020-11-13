using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FS.YC.Api
{
    public interface ITestApi:Volo.Abp.IRemoteService,Volo.Abp.Application.Services.IApplicationService
    {
        Task<string> TestAsync();
    }
}
