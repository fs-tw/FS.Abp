namespace FS.Abp.Authentication
{
    public static class AuthenticationDbProperties
    {
        public static string DbTablePrefix { get; set; } = "Authentication";

        public static string DbSchema { get; set; } = null;

        public const string ConnectionStringName = "Authentication";
    }
}
