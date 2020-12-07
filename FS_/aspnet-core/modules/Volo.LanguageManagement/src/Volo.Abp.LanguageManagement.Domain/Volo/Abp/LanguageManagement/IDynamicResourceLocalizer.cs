using System.Collections.Generic;
using Microsoft.Extensions.Localization;
using Volo.Abp.Localization;

namespace Volo.Abp.LanguageManagement
{
    public interface IDynamicResourceLocalizer
    {
        LocalizedString GetOrNull(LocalizationResource resource, string cultureName, string name);

        void Fill(LocalizationResource resource, string cultureName, Dictionary<string, LocalizedString> dictionary);
    }
}