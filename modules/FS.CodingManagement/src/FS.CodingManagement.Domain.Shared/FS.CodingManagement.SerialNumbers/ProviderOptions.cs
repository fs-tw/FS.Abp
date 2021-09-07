using JetBrains.Annotations;

namespace FS.CodingManagement.SerialNumbers
{
    public class ProviderOptions
    {
        [NotNull]
        public ProviderDictionary Providers { get; } = new ProviderDictionary();
    }
}
