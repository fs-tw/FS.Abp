using JetBrains.Annotations;

namespace FS.Coding.SerialNumbers
{
    public class ProviderOptions
    {
        public static string DefaultProviderName = "Default";
        [NotNull]
        public ProviderDictionary Providers { get; } = new ProviderDictionary();
    }
}
