using System.Collections.Generic;
using Volo.Abp.Account.ExternalProviders;

namespace Volo.Abp.Account
{
    public class AccountExternalProviderSettingsDto
    {
        public List<ExternalProviderSettings> Settings { get; set; }
    }
}
