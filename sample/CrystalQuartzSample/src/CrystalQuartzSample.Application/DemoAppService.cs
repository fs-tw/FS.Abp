using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using CrystalQuartzSample.Localization;
using FS.Abp.Shared;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Auditing;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Identity;
using Volo.Abp.Users;

namespace CrystalQuartzSample
{
    /* Inherit your application services from this class.
     */
    public class DemoAppService : CrystalQuartzSampleAppService
    {
        public async Task PostSearchAsync(GetIdentityUsersInput input)
        {
            var identityUserAppService = this.LazyServiceProvider.LazyGetRequiredService<Volo.Abp.Identity.IdentityUserAppService>();
            var audit = this.LazyServiceProvider.LazyGetRequiredService<IAuditingManager>();
            var audithelper = this.LazyServiceProvider.LazyGetRequiredService<IAuditingHelper>();
            var userData = await identityUserAppService.GetListAsync(input);

            audit.CreateAuditLogAction<IAuditingManager>(audithelper,
                GetMethodInfoUtil.GetMethodInfo<GetIdentityUsersInput, Task<PagedResultDto<IdentityUserDto>>>(identityUserAppService.GetListAsync),
                new { datas = userData });

            //await audit.CreateAuditingScopeAsync("ClientName", async () =>
            // {

            // });

        }
    }
}
