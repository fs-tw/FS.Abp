using JetBrains.Annotations;
using Microsoft.Extensions.Localization;

namespace Volo.Abp.Account.Admin.Web.Pages.Account.Components.AccountSettingGroup
{
    public static class ExternalLoginProviderLocalizationHelper
    {
        public static string Localize(
            [CanBeNull] IStringLocalizer localizer,
            [NotNull] string key,
            [NotNull] string defaultValue)
        {
            if (localizer == null)
            {
                return defaultValue;
            }

            var result = localizer[key];
            if (result.ResourceNotFound)
            {
                return defaultValue;
            }

            return result.Value;
        }
    }
}
