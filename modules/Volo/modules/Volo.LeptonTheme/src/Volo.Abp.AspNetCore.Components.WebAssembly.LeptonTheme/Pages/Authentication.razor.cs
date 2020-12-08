using Microsoft.AspNetCore.Components;
using Volo.Abp.LeptonTheme.Management.Localization;

namespace Volo.Abp.AspNetCore.Components.WebAssembly.LeptonTheme.Pages
{
    public partial class Authentication
    {
        [Parameter]
        public string Action { get; set; }

        public Authentication()
        {
            LocalizationResource = typeof(LeptonThemeManagementResource);
        }
    }
}
