using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blazorise;
using Blazorise.DataGrid;
using Microsoft.AspNetCore.Components;
using Volo.Abp.Application.Dtos;

namespace Volo.Abp.Identity.Pro.Blazor.Pages.Identity
{
    public partial class SecurityLogManagement
    {
        [Inject] protected IIdentitySecurityLogAppService AppService { get; set; }

        protected int CurrentPage;
        protected string CurrentSorting;
        protected int? TotalCount;
        protected List<BlazoriseUI.BreadcrumbItem> BreadcrumbItems = new();
        protected virtual int PageSize { get; } = LimitedResultRequestDto.DefaultMaxResultCount;

        protected GetIdentitySecurityLogListInput Filter = new();

        protected IReadOnlyList<IdentitySecurityLogDto> Entities = Array.Empty<IdentitySecurityLogDto>();

        protected virtual async Task GetEntitiesAsync()
        {
            Filter.Sorting = CurrentSorting;
            Filter.SkipCount = CurrentPage * PageSize;
            Filter.MaxResultCount = PageSize;

            Filter.ApplicationName = Filter.ApplicationName?.Trim();
            Filter.Identity = Filter.Identity?.Trim();
            Filter.UserName = Filter.UserName?.Trim();
            Filter.ClientId = Filter.ClientId?.Trim();
            Filter.CorrelationId = Filter.CorrelationId?.Trim();

            var result = await AppService.GetListAsync(Filter);
            Entities = result.Items;

            TotalCount = (int?)result.TotalCount;

            StateHasChanged();
        }

        protected virtual async Task OnDataGridReadAsync(DataGridReadDataEventArgs<IdentitySecurityLogDto> e)
        {
            CurrentSorting = e.Columns
                .Where(c => c.Direction != SortDirection.None)
                .Select(c => c.Field + (c.Direction == SortDirection.Descending ? " DESC" : ""))
                .JoinAsString(",");
            CurrentPage = e.Page - 1;

            await GetEntitiesAsync();
        }

        protected override void OnInitialized()
        {
            base.OnInitialized();
            BreadcrumbItems.Add(new BlazoriseUI.BreadcrumbItem(L["Menu:IdentityManagement"]));
            BreadcrumbItems.Add(new BlazoriseUI.BreadcrumbItem(L["SecurityLogs"]));
        }
    }
}
