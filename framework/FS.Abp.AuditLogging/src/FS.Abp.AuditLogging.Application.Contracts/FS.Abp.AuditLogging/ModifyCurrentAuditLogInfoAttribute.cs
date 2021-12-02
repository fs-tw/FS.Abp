using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Aspects;
using Volo.Abp.Auditing;
using Volo.Abp.DependencyInjection;
using Volo.Abp.DynamicProxy;

namespace FS.Abp.AuditLogging
{
    public class ModifyCurrentAuditLogInfoAttribute : Attribute
    {
        public string ApplicationName { get; set; }
        public string ClientName { get; set; }
        public List<string> Comments { get; set; }
    }
    public class ModifyCurrentAuditLogInterceptor : AbpInterceptor, ITransientDependency
    {
        private readonly IServiceScopeFactory _serviceScopeFactory;
        public ModifyCurrentAuditLogInterceptor(IServiceScopeFactory serviceScopeFactory)
        {
            _serviceScopeFactory = serviceScopeFactory;
        }
        public override async Task InterceptAsync(IAbpMethodInvocation invocation)
        {
            //if (AbpCrossCuttingConcerns.IsApplied(invocation.TargetObject, AbpCrossCuttingConcerns.Auditing))
            {
                using (var serviceScope = _serviceScopeFactory.CreateScope())
                {
                    var attribute = TypeDescriptor.GetAttributes(invocation.Method.DeclaringType).OfType<ModifyCurrentAuditLogInfoAttribute>().FirstOrDefault();
                    if (attribute != null)
                    {
                        var auditingManager = serviceScope.ServiceProvider.GetRequiredService<IAuditingManager>();
                        if (auditingManager.Current?.Log != null)
                        {
                            auditingManager.Current.Log.ApplicationName = attribute.ApplicationName;
                            auditingManager.Current.Log.ClientName = attribute.ClientName;
                            auditingManager.Current.Log.Comments.AddRange(attribute.Comments ?? new List<string>());
                        }

                    }
                }
            }
            await invocation.ProceedAsync();

        }


    }
}
