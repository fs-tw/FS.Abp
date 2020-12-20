namespace FS.Theme
{
    public static class ThemeDbProperties
    {
        public static string DbTablePrefix { get; set; } = "Theme";

        public static string DbSchema { get; set; } = null;

        public const string ConnectionStringName = "Theme";
    }
}
