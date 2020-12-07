using Volo.Abp.Reflection;

namespace Volo.Abp.AuditLogging
{
    public class AbpAuditLoggingPermissions
    {
        public const string GroupName = "AuditLogging";

        public class AuditLogs
        {
            public const string Default = GroupName + ".AuditLogs";
        }

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(AbpAuditLoggingPermissions));
        }
    }
}
