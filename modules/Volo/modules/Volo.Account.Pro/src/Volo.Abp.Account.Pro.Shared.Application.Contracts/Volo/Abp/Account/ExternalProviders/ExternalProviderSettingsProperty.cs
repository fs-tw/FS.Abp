using System;

namespace Volo.Abp.Account.ExternalProviders
{
    [Serializable]
    public class ExternalProviderSettingsProperty : NameValue<string>
    {
        public ExternalProviderSettingsProperty()
        {

        }

        public ExternalProviderSettingsProperty(string name, string value)
            : base(name, value)
        {

        }
    }
}
