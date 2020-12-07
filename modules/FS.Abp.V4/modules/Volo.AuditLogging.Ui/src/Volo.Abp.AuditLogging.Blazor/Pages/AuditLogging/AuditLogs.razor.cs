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
using Volo.Abp.AuditLogging.Localization;

namespace Volo.Abp.AuditLogging.Blazor.Pages.AuditLogging
{
    public partial class AuditLogs
    {
        protected int CurrentPage;
        protected string CurrentSorting;
        protected int? TotalCount;
        protected virtual int PageSize { get; } = LimitedResultRequestDto.DefaultMaxResultCount;
        
        [Inject]
        protected IAuditLogsAppService AppService { get; set; }

        protected Modal DetailModal;

        protected const string DetailModalDefaultTabName = "Overall";
        
        protected string DetailModalSelectedTab = DetailModalDefaultTabName;
        
        protected AuditLogDto AuditLogDetail = new AuditLogDto();

        protected Dictionary<Guid, bool> AuditLogDetailActionPanelStatus;
        protected Dictionary<Guid, bool> AuditLogDetailEntityChangesPanelStatus;
        
        protected GetAuditLogListDto Filter = new GetAuditLogListDto();

        protected IReadOnlyList<AuditLogDto> AuditLogList;
        
        // Those nullable variables are created for null SelectItem
        // TODO: Find a better way
        protected readonly bool? NullBoolValue = null;

        protected readonly HttpStatusCode? NullStatusCodeValue = null;

        protected readonly string NullStringValue = null;
        
        protected virtual async Task GetEntitiesAsync()
        {
            Filter.Sorting = CurrentSorting;
            Filter.SkipCount = CurrentPage * PageSize;
            Filter.MaxResultCount = PageSize;

            Filter.UserName = Filter.UserName?.Trim();
            Filter.Url = Filter.Url?.Trim();
            Filter.ApplicationName = Filter.ApplicationName?.Trim();
            Filter.CorrelationId = Filter.CorrelationId?.Trim();
            
            var result = await AppService.GetListAsync(Filter);
            AuditLogList = result.Items;
            
            TotalCount = (int?) result.TotalCount;
            
            StateHasChanged();
        }
        
        protected virtual async Task OnDataGridReadAsync(DataGridReadDataEventArgs<AuditLogDto> e)
        {
            CurrentSorting = e.Columns
                .Where(c => c.Direction != SortDirection.None)
                .Select(c => c.Field + (c.Direction == SortDirection.Descending ? " DESC" : ""))
                .JoinAsString(",");
            CurrentPage = e.Page - 1;

            await GetEntitiesAsync();
        }
        
        protected virtual List<string> GetHttpMethods()
        {
            return new List<string>
            {
                "GET",
                "POST",
                "DELETE",
                "PUT",
                "HEAD",
                "CONNECT",
                "OPTIONS",
                "TRACE",
            };
        }

        protected virtual List<HttpStatusCode> GetHttpStatusCodeList()
        {
            return Enum.GetValues(typeof(HttpStatusCode)).Cast<HttpStatusCode>().Distinct().ToList();
        }

        protected virtual string GetHttpStatusCodeText(HttpStatusCode statusCode)
        {
            return $"{(int) statusCode} - {Regex.Replace(statusCode.ToString(), "([A-Z])", " $1")}";
        }

        protected virtual Color GetHttpStatusCodeBadgeColor(int? statusCode)
        {
            if (statusCode is null)
            {
                return Color.Primary;
            }
            
            if (statusCode >= 200 && statusCode < 300)
            {
                return Color.Success;
            }
            
            if (statusCode >= 300 && statusCode < 400)
            {
                return Color.Warning;
            }
            
            if (statusCode >= 400 && statusCode < 600)
            {
                return Color.Danger;
            }

            return Color.Primary;
        }
        
        protected virtual Color GetHttpMethodBadgeColor(string method)
        {
            return method switch
            {
                "GET" => Color.Dark,
                "POST" => Color.Success,
                "DELETE" => Color.Danger,
                "PUT" => Color.Warning,
                _ => Color.None
            };
        }

        protected virtual async Task OpenDetailModalAsync(Guid id)
        {
            DetailModalSelectedTab = DetailModalDefaultTabName;
            
            AuditLogDetailActionPanelStatus = new Dictionary<Guid, bool>();
            AuditLogDetailEntityChangesPanelStatus = new Dictionary<Guid, bool>();
            AuditLogDetail = await AppService.GetAsync(id);
            
            DetailModal.Show();
        }
        
        protected virtual Task CloseDetailModalAsync()
        {
            DetailModal.Hide();
            return Task.CompletedTask;
        }
        
        protected virtual string SerializeDictionary(Dictionary<string, object> dictionary)
        {
            return JsonConvert.SerializeObject(dictionary, Formatting.Indented);
        }
    }
} 