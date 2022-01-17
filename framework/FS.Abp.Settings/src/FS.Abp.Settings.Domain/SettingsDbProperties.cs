namespace FS.Abp.Settings
{
    public static class SettingsDbProperties
    {
        public static string DbTablePrefix { get; set; } = "Settings";

        public static string DbSchema { get; set; } = null;

        public const string ConnectionStringName = "Settings";
    }
}
