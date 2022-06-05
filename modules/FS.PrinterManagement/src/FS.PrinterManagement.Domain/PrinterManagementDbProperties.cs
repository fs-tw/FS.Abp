namespace FS.PrinterManagement
{
    public static class PrinterManagementDbProperties
    {
        public static string DbTablePrefix { get; set; } = "PrinterManagement";

        public static string DbSchema { get; set; } = null;

        public const string ConnectionStringName = "PrinterManagement";
    }
}
