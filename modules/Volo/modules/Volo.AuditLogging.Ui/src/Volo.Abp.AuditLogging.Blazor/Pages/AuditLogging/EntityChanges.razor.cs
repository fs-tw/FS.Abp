using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Blazorise;
using Blazorise.DataGrid;
using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Localization;
using Newtonsoft.Json;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Auditing;
using Volo.Abp.AuditLogging.Localization;

namespace Volo.Abp.AuditLogging.Blazor.Pages.AuditLogging
{
    public partial class EntityChanges
    {
        protected int CurrentPage;
        protected string CurrentSorting;
        protected int? TotalCount;
        protected virtual int PageSize { get; } = LimitedResultRequestDto.DefaultMaxResultCount;
        
        [Inject]
        protected IAuditLogsAppService AppService { get; set; }
       
        protected GetEntityChangesDto Filter = new GetEntityChangesDto();

        protected EntityChangeType? NullEntityChangeValue = null;
        
        protected IReadOnlyList<EntityChangeDto> EntityChangeList;

        protected Modal DetailModal;

        protected List<EntityChangeWithUsernameDto> EntityHistories;

        protected Dictionary<Guid, bool> EntityChangesPanelStatus;
        
        protected virtual async Task GetEntitiesAsync()
        {
            Filter.Sorting = CurrentSorting;
            Filter.SkipCount = CurrentPage * PageSize;
            Filter.MaxResultCount = PageSize;

            Filter.EntityTypeFullName = Filter.EntityTypeFullName?.Trim();
            
            var result = await AppService.GetEntityChangesAsync(Filter);
            EntityChangeList = result.Items;
            
            TotalCount = (int?) result.TotalCount;
            
            StateHasChanged();
        }
        
        protected virtual async Task OnDataGridReadAsync(DataGridReadDataEventArgs<EntityChangeDto> e)
        {
            CurrentSorting = e.Columns
                .Where(c => c.Direction != SortDirection.None)
                .Select(c => c.Field + (c.Direction == SortDirection.Descending ? " DESC" : ""))
                .JoinAsString(",");
            CurrentPage = e.Page - 1;

            await GetEntitiesAsync();
        }

        protected virtual List<EntityChangeType> GetEntityChangeTypeList()
        {
            return Enum.GetValues(typeof(EntityChangeType)).Cast<EntityChangeType>().Distinct().ToList();
        }
        
        protected virtual async Task OpenDetailModalAsync(Guid id)
        {
            EntityChangesPanelStatus = new Dictionary<Guid, bool>();
            
            var entityChange = await AppService.GetEntityChangeWithUsernameAsync(id);
            
            EntityHistories = new List<EntityChangeWithUsernameDto>
            {
                entityChange
            };
            
            DetailModal.Show();
        }
        
        protected virtual async Task OpenDetailModalAsync(string entityTypeFullName, string entityId)
        {
            EntityChangesPanelStatus = new Dictionary<Guid, bool>();
            
            EntityHistories = await AppService.GetEntityChangesWithUsernameAsync(new EntityChangeFilter
            {
                EntityTypeFullName = entityTypeFullName,
                EntityId = entityId
            });
            
            DetailModal.Show();
        }
        
        protected virtual Task CloseDetailModalAsync()
        {
            DetailModal.Hide();
            return Task.CompletedTask;
        }
    }
} 