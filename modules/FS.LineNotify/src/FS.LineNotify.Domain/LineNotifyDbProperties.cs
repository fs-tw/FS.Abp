namespace FS.LineNotify
{
    public static class LineNotifyDbProperties
    {
        public static string DbTablePrefix { get; set; } = "LineNotify";

        public static string DbSchema { get; set; } = null;

        public const string ConnectionStringName = "LineNotify";
    }
}
