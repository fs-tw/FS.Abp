using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Primitives;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;
using Volo.Abp.AspNetCore.Components.Notifications;
using Volo.Abp.Localization;
using Volo.Abp.TextTemplateManagement.TextTemplates;

namespace Volo.Abp.TextTemplateManagement.Blazor.Pages.TextTemplateManagement
{
    public partial class TextTemplateContentManagement
    {
        protected string TemplateDefinitionName;
        protected string SelectedBaseCulture;
        protected string SelectedTargetCulture;
        protected string BaseContent;
        protected string TargetContent;
        protected IReadOnlyList<LanguageInfo> Languages;

        [Inject]
        protected ILanguageProvider LanguageProvider { get; set; }

        [Inject]
        protected ITemplateContentAppService TemplateContentAppService { get; set; }

        [Inject]
        protected NavigationManager NavigationManager { get; set; }

        [Inject]
        protected IUiNotificationService UINotificationService { get; set; }

        protected override async Task OnInitializedAsync()
        {
            var uri = new Uri(NavigationManager.Uri);
            if (QueryHelpers.ParseQuery(uri.Query).TryGetValue("name", out var values))
            {
                if (!StringValues.IsNullOrEmpty(values))
                {
                    TemplateDefinitionName = values[0];
                }
                else
                {
                    NavigateToTemplateListing();
                }
            }
            else
            {
                NavigateToTemplateListing();
            }

            Languages = await LanguageProvider.GetLanguagesAsync();

            var isSelected = false;
            foreach (var language in Languages)
            {
                if(language.CultureName == CultureInfo.CurrentUICulture.Name)
                {
                    SelectedBaseCulture = language.CultureName;
                }

                if(!isSelected && language.CultureName != CultureInfo.CurrentUICulture.Name)
                {
                    SelectedTargetCulture = language.CultureName;
                    isSelected = true;
                }

                if(!string.IsNullOrEmpty(SelectedTargetCulture) && !string.IsNullOrEmpty(SelectedBaseCulture))
                {
                    break;
                }
            }

            await RefillContentsAsync();
        }

        protected virtual void NavigateToTemplateListing()
        {
            NavigationManager.NavigateTo("/text-templates");
        }

        protected virtual async void OnBaseCultureChanged(string selectedCulture)
        {
            SelectedBaseCulture = selectedCulture;
            BaseContent = await GetContentAsync(SelectedBaseCulture);
            StateHasChanged();
        }

        protected virtual async void OnTargetCultureChanged(string selectedCulture)
        {
            SelectedTargetCulture = selectedCulture;
            TargetContent = await GetContentAsync(SelectedTargetCulture);
            StateHasChanged();
        }

        protected virtual async Task<string> GetContentAsync(string culture)
        {
            var template = await TemplateContentAppService.GetAsync(new GetTemplateContentInput
            {
                CultureName = culture,
                TemplateName = TemplateDefinitionName
            });
            return template.Content;
        }

        protected virtual async Task SaveContentAsync()
        {
            await TemplateContentAppService.UpdateAsync(new UpdateTemplateContentInput
            {
                Content = TargetContent,
                CultureName = SelectedTargetCulture,
                TemplateName = TemplateDefinitionName
            });
            await UINotificationService.Success(L["Success"]);
            await RefillContentsAsync();
        }

        protected virtual async Task RestoreToDefaultAsync()
        {
            await TemplateContentAppService.RestoreToDefaultAsync(new RestoreTemplateContentInput
            {
                CultureName = SelectedTargetCulture,
                TemplateName = TemplateDefinitionName
            });

            await UINotificationService.Success(L["Success"]);
            await RefillContentsAsync();
            StateHasChanged();
        }

        protected virtual async Task RefillContentsAsync()
        {
            BaseContent = await GetContentAsync(SelectedBaseCulture);
            TargetContent = await GetContentAsync(SelectedTargetCulture);
        }
    }
}
