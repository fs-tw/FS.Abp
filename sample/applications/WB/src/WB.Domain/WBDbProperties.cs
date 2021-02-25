namespace WB
{
    public static class WBDbProperties
    {
        public static string DbTablePrefix { get; set; } = "WB";

        public static string DbSchema { get; set; } = null;

        public const string ConnectionStringName = "Default";
    }
}
