using FS.Abp.Shared;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using System;
using System.Reflection;
using Volo.Abp.Timing;

namespace Volo.Abp.Auditing
{
    public static class IAuditingManagerExtension
    {
        public static async Task CreateAuditingScopeAsync(this IAuditingManager manager, string clientName, Func<Task> action)
        {
            using (var auditingScope = manager.BeginScope())
            {
                manager.Current.Log.ClientName = clientName;
                try
                {
                    await action.Invoke();
                }
                catch (Exception ex)
                {
                    manager.Current.Log.Exceptions.Add(ex);
                    throw;
                }
                finally
                {
                    await auditingScope.SaveAsync();

                }
            }
        }

        public static void CreateAuditLogAction<T>(this IAuditingManager manager,
            IAuditingHelper auditingHelper, MethodInfo methodInfo,
            object logData)
        {
            if (manager.Current == null) return;
            var log = manager.Current.Log;
            var data = new Dictionary<string, object>();
            foreach (PropertyDescriptor propertyDescriptor in TypeDescriptor.GetProperties(logData))
            {
                object obj = propertyDescriptor.GetValue(logData);
                data.Add(propertyDescriptor.Name, obj);
            }

            var auditLogAction = auditingHelper.CreateAuditLogAction(log, methodInfo.DeclaringType, methodInfo, data);

            log.Actions.Add(auditLogAction);

        }

    }
    
}
