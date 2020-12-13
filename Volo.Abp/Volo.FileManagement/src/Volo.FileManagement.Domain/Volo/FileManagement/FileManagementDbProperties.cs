namespace Volo.FileManagement
{
    public static class FileManagementDbProperties
    {
        public static string DbTablePrefix { get; set; } = "Fm";

        public static string DbSchema { get; set; } = null;

        public const string ConnectionStringName = "FileManagement";
    }
}
