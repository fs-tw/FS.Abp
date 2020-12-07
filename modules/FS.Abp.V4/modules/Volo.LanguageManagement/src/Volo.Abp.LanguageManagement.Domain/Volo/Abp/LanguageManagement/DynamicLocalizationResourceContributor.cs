using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using Volo.Abp.Localization;

namespace Volo.Abp.LanguageManagement
{
    public class DynamicLocalizationResourceContributor : ILocalizationResourceContributor
    {
        protected LocalizationResource Resource;
        protected IDynamicResourceLocalizer DynamicResourceLocalizer;

        public void Initialize(LocalizationResourceInitializationContext context)
        {
            Resource = context.Resource;
            DynamicResourceLocalizer = context.ServiceProvider.GetRequiredService<IDynamicResourceLocalizer>();
        }

        public LocalizedString GetOrNull(string cultureName, string name)
        {
            return DynamicResourceLocalizer.GetOrNull(Resource, cultureName, name);
        }

        public void Fill(string cultureName, Dictionary<string, LocalizedString> dictionary)
        {
            DynamicResourceLocalizer.Fill(Resource, cultureName, dictionary);
        }
    }
}
