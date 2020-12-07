namespace Volo.FileManagement.Files
{
    public static class FileDescriptorConsts
    {
        public const string DefaultSorting = "Name asc";
        
        public static int MaxNameLength { get; set; } = 255;
        
        public static int MaxMimeTypeLength { get; set; } = 128;

        public static int MaxSizeLength = int.MaxValue;
    }
}