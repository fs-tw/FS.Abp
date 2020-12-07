namespace Volo.Abp.Account
{
    public class ProfilePictureInput
    {
        public ProfilePictureType Type { get; set; }

        public byte[] ImageContent { get; set; }
    }
}