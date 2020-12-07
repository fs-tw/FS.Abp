namespace Volo.Abp.Account
{
    public class ProfilePictureSourceDto
    {
        public ProfilePictureType Type { get; set; }

        public string Source { get; set; }

        public byte[] FileContent { get; set; }
    }
}