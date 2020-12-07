using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Localization;
using Volo.Abp.AspNetCore.Components.WebAssembly;
using Volo.Abp.AuditLogging.Localization;
using Volo.Abp.BlazoriseUI;

namespace Volo.Abp.AuditLogging.Blazor.Pages.AuditLogging
{
    public partial class AuditLogsManagement
    {
        protected string SelectedTab = "AuditLogging";
        protected List<BreadcrumbItem> BreadcrumbItems = new List<BreadcrumbItem>();

        protected override void OnInitialized()
        {
            base.OnInitialized();
            BreadcrumbItems.Add(new BreadcrumbItem(L["AuditLogs"]));
        }
    }
}