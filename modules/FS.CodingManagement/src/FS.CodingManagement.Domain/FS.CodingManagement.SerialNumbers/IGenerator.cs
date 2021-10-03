namespace FS.CodingManagement.SerialNumbers
{
    public interface IGenerator
    {
        string Create(Provider provider, SerialNumber serialNumber);
    }
}