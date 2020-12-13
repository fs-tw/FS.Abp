namespace Volo.Chat.Users
{
    public class GetContactsInput
    {
        public string Filter { get; set; }

        public bool IncludeOtherContacts { get; set; }
    }
}