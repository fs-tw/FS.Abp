using Volo.Abp.Data;

namespace Volo.Abp.LanguageManagement
{
    public static class LanguageManagementDbProperties
    {
        public static string DbTablePrefix { get; set; } = AbpCommonDbProperties.DbTablePrefix;

        public static string DbSchema { get; set; } = AbpCommonDbProperties.DbSchema;

        public const string ConnectionStringName = "AbpLanguageManagement";
    }
}
