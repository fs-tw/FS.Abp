using AutoFilterer.Enums;
using AutoFilterer.Types;

namespace FS.Abp.AuditLogging.Filters
{
    public class AuditLogActionFilter:FilterBase
    {
        public AuditLogActionFilter() { }
        public AuditLogActionFilter(string serviceName, string methodName)
        {
            ServiceName = serviceName;
            MethodName = methodName;
        }
        public string ServiceName { get; set; }
        public string MethodName { get; set; }
        public override CombineType CombineWith => CombineType.And;
    }
}

