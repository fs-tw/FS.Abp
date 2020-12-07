using System.Text.RegularExpressions;
using Volo.Abp.Reflection;

namespace Volo.Abp.Identity
{
    public static class IdentityPermissions
    {
        public const string GroupName = "AbpIdentity";

        public const string SettingManagement = GroupName + ".SettingManagement";

        public static class Roles
        {
            public const string Default = GroupName + ".Roles";
            public const string Create = Default + ".Create";
            public const string Update = Default + ".Update";
            public const string Delete = Default + ".Delete";
            public const string ManagePermissions = Default + ".ManagePermissions";
            public const string ViewChangeHistory = "AuditLogging.ViewChangeHistory:Volo.Abp.Identity.IdentityRole";
        }

        public static class Users
        {
            public const string Default = GroupName + ".Users";
            public const string Create = Default + ".Create";
            public const string Update = Default + ".Update";
            public const string Delete = Default + ".Delete";
            public const string ManagePermissions = Default + ".ManagePermissions";
            public const string ViewChangeHistory = "AuditLogging.ViewChangeHistory:Volo.Abp.Identity.IdentityUser";
        }

        public static class ClaimTypes
        {
            public const string Default = GroupName + ".ClaimTypes";
            public const string Create = Default + ".Create";
            public const string Update = Default + ".Update";
            public const string Delete = Default + ".Delete";
        }

        public static class UserLookup
        {
            public const string Default = GroupName + ".UserLookup";
        }

        public static class OrganizationUnits
        {
            public const string Default = GroupName + ".OrganizationUnits";
            public const string ManageOU = Default + ".ManageOU";
            public const string ManageRoles = Default + ".ManageRoles";
            public const string ManageUsers = Default + ".ManageMembers";
        }

        public static class SecurityLogs
        {
            public const string Default = GroupName + ".SecurityLogs";
        }

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(IdentityPermissions));
        }
    }
}
