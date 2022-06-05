namespace FS.Printer.Printing;

public static class PrintingDbProperties
{
    public static string DbTablePrefix { get; set; } = "Printing";

    public static string DbSchema { get; set; } = null;

    public const string ConnectionStringName = "Printing";
}
