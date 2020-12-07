namespace Volo.Abp.TextTemplateManagement
{
    public static class TextTemplateManagementDbProperties
    {
        public static string DbTablePrefix { get; set; } = "Abp";

        public static string DbSchema { get; set; } = null;

        public const string ConnectionStringName = "TextTemplateManagement";
    }
}
