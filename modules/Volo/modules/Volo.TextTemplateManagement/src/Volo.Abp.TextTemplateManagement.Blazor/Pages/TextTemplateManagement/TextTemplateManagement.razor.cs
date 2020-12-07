using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blazorise;
using Blazorise.DataGrid;
using Microsoft.AspNetCore.Components;
using Volo.Abp.Application.Dtos;
using Volo.Abp.TextTemplateManagement.Authorization;
using Volo.Abp.TextTemplateManagement.TextTemplates;
using Volo.Abp.BlazoriseUI.Components;

namespace Volo.Abp.TextTemplateManagement.Blazor.Pages.TextTemplateManagement
{
    public partial class TextTemplateManagement
    {
        protected int CurrentPage;
        protected string CurrentSorting;
        protected int? TotalCount;
        protected string UpdatePolicyName;
        protected DataGridEntityActionsColumn<TemplateDefinitionDto> EntityActionsColumn;
        protected List<BlazoriseUI.BreadcrumbItem> BreadcrumbItems = new List<BlazoriseUI.BreadcrumbItem>();
        private string _filter = null;

        protected string Filter
        {
            get => string.IsNullOrWhiteSpace(_filter) ? string.Empty : _filter;
            set => _filter = string.IsNullOrWhiteSpace(value) ? string.Empty : value.Trim();
        }

        protected virtual int PageSize { get; } = LimitedResultRequestDto.DefaultMaxResultCount;

        protected IReadOnlyList<TemplateDefinitionDto> TemplateDefinitions;

        [Inject]
        protected ITemplateDefinitionAppService TemplateDefinitionAppService { get; set; }

        [Inject]
        protected ITemplateContentAppService TemplateContentAppService { get; set; }

        [Inject]
        protected NavigationManager NavigationManager { get; set; }

        public TextTemplateManagement()
        {
            UpdatePolicyName = TextTemplateManagementPermissions.TextTemplates.EditContents;
        }

        protected async override Task OnInitializedAsync()
        {
            await SetBreadcrumbItemsAsync();
            await GetEntitiesAsync();
        }

        protected virtual async Task GetEntitiesAsync()
        {
            var input = await CreateGetTemplateDefinitionListInputAsync();
            var result = await TemplateDefinitionAppService.GetListAsync(input);
            TemplateDefinitions = result.Items;
        }

        protected virtual async Task OnDataGridReadAsync(DataGridReadDataEventArgs<TemplateDefinitionDto> e)
        {
            CurrentSorting = e.Columns
                .Where(c => c.Direction != SortDirection.None)
                .Select(c => c.Field + (c.Direction == SortDirection.Descending ? " DESC" : ""))
                .JoinAsString(",");
            CurrentPage = e.Page - 1;

            await GetEntitiesAsync();
        }

        protected virtual Task<GetTemplateDefinitionListInput> CreateGetTemplateDefinitionListInputAsync()
        {
            var input = new GetTemplateDefinitionListInput
            {
                Sorting = CurrentSorting,
                SkipCount = CurrentPage * PageSize,
                MaxResultCount = PageSize,
                FilterText = Filter
            };

            return Task.FromResult(input);
        }

        protected virtual async Task FilterChangedAsync(string filter)
        {
            Filter = filter;
            await GetEntitiesAsync();
        }

        protected virtual void NavigateToEdit(TemplateDefinitionDto templateDefinition)
        {
            var baseRoute = templateDefinition.IsInlineLocalized
                ? "/text-templates/contents/inline?name="
                : "/text-templates/contents?name=";

            NavigationManager.NavigateTo($"{baseRoute}{templateDefinition.Name}");
        }

        protected virtual ValueTask SetBreadcrumbItemsAsync()
        {
            BreadcrumbItems.Add(new BlazoriseUI.BreadcrumbItem(L["Menu:TextTemplates"]));
            return ValueTask.CompletedTask;
        }
    }
}