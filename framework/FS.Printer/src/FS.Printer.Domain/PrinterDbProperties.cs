namespace FS.Printer;

public static class PrinterDbProperties
{
    public static string DbTablePrefix { get; set; } = "Printer";

    public static string DbSchema { get; set; } = null;

    public const string ConnectionStringName = "Printer";
}
