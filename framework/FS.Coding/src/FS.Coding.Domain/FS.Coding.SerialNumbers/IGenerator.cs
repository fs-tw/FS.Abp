using FS.Coding.SerialNumbers;

namespace FS.Coding.SerialNumbers
{
    public interface IGenerator
    {
        string Create(Provider provider, SerialNumber serialNumber);
    }
}