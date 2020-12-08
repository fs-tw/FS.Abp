namespace Volo.Saas
{
    public static class SaasDbProperties
    {
        public static string DbTablePrefix { get; set; } = "Saas";

        public static string DbSchema { get; set; } = null;

        public const string ConnectionStringName = "Saas";
    }
}
