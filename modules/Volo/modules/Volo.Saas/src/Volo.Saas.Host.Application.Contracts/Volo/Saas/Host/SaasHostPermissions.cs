using Volo.Abp.Reflection;

namespace Volo.Saas.Host
{
    public class SaasHostPermissions
    {
        public const string GroupName = "Saas";

        public static class Tenants
        {
            public const string Default = GroupName + ".Tenants";
            public const string Create = Default + ".Create";
            public const string Update = Default + ".Update";
            public const string Delete = Default + ".Delete";
            public const string ManageFeatures = Default + ".ManageFeatures";
            public const string ManageConnectionStrings = Default + ".ManageConnectionStrings";
            public const string ViewChangeHistory = "AuditLogging.ViewChangeHistory:Volo.Saas.Tenant";
        }

        public static class Editions
        {
            public const string Default = GroupName + ".Editions";
            public const string Create = Default + ".Create";
            public const string Update = Default + ".Update";
            public const string Delete = Default + ".Delete";
            public const string ManageFeatures = Default + ".ManageFeatures";
            public const string ViewChangeHistory = "AuditLogging.ViewChangeHistory:Volo.Saas.Edition";
        }

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(SaasHostPermissions));
        }
    }
}