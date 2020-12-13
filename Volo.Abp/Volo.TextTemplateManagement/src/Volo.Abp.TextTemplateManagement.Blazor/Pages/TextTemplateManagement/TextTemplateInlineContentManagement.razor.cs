using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Primitives;
using System;
using System.Threading.Tasks;
using Volo.Abp.AspNetCore.Components.Notifications;
using Volo.Abp.TextTemplateManagement.TextTemplates;

namespace Volo.Abp.TextTemplateManagement.Blazor.Pages.TextTemplateManagement
{
    public partial class TextTemplateInlineContentManagement
    {
        protected string TemplateContent;
        protected string TemplateDefinitionName;

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
            await GetContentAsync();
        }

        protected virtual async Task GetContentAsync()
        {
            var templateInlineContentDto = await TemplateContentAppService.GetAsync(new GetTemplateContentInput
            {
                CultureName = null,
                TemplateName = TemplateDefinitionName
            });

            TemplateContent = templateInlineContentDto.Content;
        }

        protected virtual void NavigateToTemplateListing()
        {
            NavigationManager.NavigateTo("/text-templates");
        }

        protected virtual async Task SaveContentAsync()
        {
            await TemplateContentAppService.UpdateAsync(new UpdateTemplateContentInput
            {
                TemplateName = TemplateDefinitionName,
                Content = TemplateContent,
                CultureName = null
            });

            NavigateToTemplateListing();
        }

        protected virtual async Task RestoreToDefaultAsync()
        {
            await TemplateContentAppService.RestoreToDefaultAsync(new RestoreTemplateContentInput
            {
                TemplateName = TemplateDefinitionName,
                CultureName = null
            });

            await UINotificationService.Success(L["Success"]);
            await GetContentAsync();
        }

        protected virtual void NavigateToContentManagement()
        {
            NavigationManager.NavigateTo($"/text-templates/contents?name={TemplateDefinitionName}");
        }
    }
}
