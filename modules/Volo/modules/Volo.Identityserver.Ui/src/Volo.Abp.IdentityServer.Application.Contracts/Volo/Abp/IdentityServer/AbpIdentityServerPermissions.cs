using Volo.Abp.Reflection;

namespace Volo.Abp.IdentityServer
{
    public class AbpIdentityServerPermissions
    {
        public const string GroupName = "IdentityServer";

        public static class ApiScope
        {
            public const string Default = GroupName + ".ApiScope";
            public const string Delete = Default + ".Delete";
            public const string Update = Default + ".Update";
            public const string Create = Default + ".Create";
            public const string ViewChangeHistory = "AuditLogging.ViewChangeHistory:Volo.Abp.IdentityServer.ApiScopes.ApiScope";
        }

        public static class IdentityResource
        {
            public const string Default = GroupName + ".IdentityResource";
            public const string Delete = Default + ".Delete";
            public const string Update = Default + ".Update";
            public const string Create = Default + ".Create";
            public const string ViewChangeHistory = "AuditLogging.ViewChangeHistory:Volo.Abp.IdentityServer.IdentityResources.IdentityResource";
        }

        public static class ApiResource
        {
            public const string Default = GroupName + ".ApiResource";
            public const string Delete = Default + ".Delete";
            public const string Update = Default + ".Update";
            public const string Create = Default + ".Create";
            public const string ViewChangeHistory = "AuditLogging.ViewChangeHistory:Volo.Abp.IdentityServer.ApiResources.ApiResource";
        }

        public static class Client
        {
            public const string Default = GroupName + ".Client";
            public const string Delete = Default + ".Delete";
            public const string Update = Default + ".Update";
            public const string Create = Default + ".Create";
            public const string ManagePermissions = Default + ".ManagePermissions";
            public const string ViewChangeHistory = "AuditLogging.ViewChangeHistory:Volo.Abp.IdentityServer.Clients.Client";
        }

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(AbpIdentityServerPermissions));
        }
    }
}
