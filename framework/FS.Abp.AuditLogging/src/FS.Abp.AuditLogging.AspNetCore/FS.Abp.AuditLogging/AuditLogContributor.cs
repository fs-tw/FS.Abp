using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Auditing;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Http;
using Volo.Abp.Data;

namespace FS.Abp.AuditLogging
{
    public class AuditLogContributor : Volo.Abp.Auditing.AuditLogContributor
    {
        public override void PreContribute(AuditLogContributionContext context)
        {
            var httpContext = context.ServiceProvider.GetRequiredService<IHttpContextAccessor>().HttpContext;
            if (httpContext == null)
            {
                return;
            }
            if (httpContext.Request.Headers.ContainsKey(AuditLoggingConst.AbpRouteNameKey))
            {
                context.AuditInfo.SetProperty(AuditLoggingConst.AbpRouteName, httpContext.Request.Headers[AuditLoggingConst.AbpRouteNameKey].First());//.ExtraProperties.Add("AbpRouteName", httpContext.Request.Headers["__client-name"]);
            }
        }
    }
}
