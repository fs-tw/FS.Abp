namespace FS.Abp.SyncTable;

public static class SyncTableDbProperties
{
    public static string DbTablePrefix { get; set; } = "SyncTable";

    public static string DbSchema { get; set; } = null;

    public const string ConnectionStringName = "SyncTable";
}
