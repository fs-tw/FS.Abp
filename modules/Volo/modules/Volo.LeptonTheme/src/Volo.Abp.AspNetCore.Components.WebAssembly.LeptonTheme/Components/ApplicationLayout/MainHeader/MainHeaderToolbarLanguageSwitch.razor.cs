using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.JSInterop;
using Volo.Abp.Localization;

namespace Volo.Abp.AspNetCore.Components.WebAssembly.LeptonTheme.Components.ApplicationLayout.MainHeader
{
    public partial class MainHeaderToolbarLanguageSwitch
    {
        private IReadOnlyList<LanguageInfo> OtherLanguages { get; set; }
        private LanguageInfo CurrentLanguage { get; set; }

        protected async override Task OnInitializedAsync()
        {
            var selectedLanguageName = await JsRuntime.InvokeAsync<string>(
                "localStorage.getItem",
                "Abp.SelectedLanguage"
            );

            OtherLanguages = await LanguageProvider.GetLanguagesAsync();

            if (!OtherLanguages.Any())
            {
                return;
            }

            if (!selectedLanguageName.IsNullOrWhiteSpace())
            {
                CurrentLanguage = OtherLanguages.FirstOrDefault(l => l.UiCultureName == selectedLanguageName);
            }

            if (CurrentLanguage == null)
            {
                CurrentLanguage = OtherLanguages.FirstOrDefault(l => l.UiCultureName == CultureInfo.CurrentUICulture.Name);
            }

            if (CurrentLanguage == null)
            {
                CurrentLanguage = OtherLanguages.FirstOrDefault();
            }

            OtherLanguages = OtherLanguages.Where(l => l != CurrentLanguage).ToImmutableList();
        }

        private async Task ChangeLanguageAsync(LanguageInfo language)
        {
            await JsRuntime.InvokeVoidAsync(
                "localStorage.setItem",
                "Abp.SelectedLanguage", language.UiCultureName
            );

            await JsRuntime.InvokeVoidAsync("location.reload");
        }
    }
}
