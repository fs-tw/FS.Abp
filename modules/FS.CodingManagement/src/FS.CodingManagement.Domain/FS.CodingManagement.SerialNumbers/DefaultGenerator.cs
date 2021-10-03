namespace FS.CodingManagement.SerialNumbers
{
    public class DefaultGenerator : IGenerator, Volo.Abp.DependencyInjection.ITransientDependency
    {
        public string Create(Provider provider, SerialNumber serialNumber)
        {
            return serialNumber.Value.ToString().PadLeft(provider.Length, '0');
        }
    }
}
