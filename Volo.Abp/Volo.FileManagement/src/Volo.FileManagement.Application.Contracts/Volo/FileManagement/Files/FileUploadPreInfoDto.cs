namespace Volo.FileManagement.Files
{
    public class FileUploadPreInfoDto
    {
        public string FileName { get; set; }

        public bool DoesExist { get; set; }

        public bool HasValidName { get; set; }
    }
}