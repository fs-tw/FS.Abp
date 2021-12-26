namespace FS.Abp.Metadata
{
    public static class MetadataDbProperties
    {
        public static string DbTablePrefix { get; set; } = "Metadata";

        public static string DbSchema { get; set; } = null;

        public const string ConnectionStringName = "Metadata";
    }
}
