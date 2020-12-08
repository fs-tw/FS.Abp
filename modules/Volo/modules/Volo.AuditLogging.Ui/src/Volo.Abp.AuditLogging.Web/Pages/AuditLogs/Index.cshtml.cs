using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Localization;
using Microsoft.AspNetCore.Mvc.Razor.Internal;
using Microsoft.AspNetCore.Mvc.Rendering;
using Volo.Abp.AspNetCore.Mvc.UI.Bootstrap.TagHelpers.Form;
using Volo.Abp.Auditing;
using Volo.Abp.AuditLogging.Localization;

namespace Volo.Abp.AuditLogging.Web.Pages.AuditLogs
{
    public class IndexModel : AuditLogsPageModel
    {
        public List<SelectListItem> SelectListHttpStatusCode { get; set; }

        public List<SelectListItem> SelectListHttpMethod { get; set; }

        public List<SelectListItem> SelectListHasException { get; set; }

        [SelectItems(nameof(SelectListHttpMethod))]
        public string HttpMethod { get; set; }

        public string UserName { get; set; }

        public string ApplicationName { get; set; }

        public string CorrelationId { get; set; }

        public string UrlFilter { get; set; }

        [SelectItems(nameof(SelectListHttpStatusCode))]
        public int? HttpStatusCode { get; set; }

        [SelectItems(nameof(SelectListHasException))]
        public string HasException { get; set; }

        public int? MaxExecutionDuration { get; set; }

        public int? MinExecutionDuration { get; set; }

        public string EntityChangeStartTime { get; set; }

        public string EntityChangeEndTime { get; set; }

        public string EntityChangeEntityTypeFullName { get; set; }

        public int? EntityChangeChangeType { get; set; }

        public List<SelectListItem> EntityChangeChangeTypeList { get; set; }

        [RazorInject]
        public IHtmlLocalizer<AuditLoggingResource> L { get; set; }

        protected IHtmlHelper HtmlHelper { get; }

        public IndexModel(IHtmlHelper htmlHelper)
        {
            HtmlHelper = htmlHelper;
        }

        public virtual void OnGet()
        {
            FillHttpStatusCodeSelectList();
            FillHttpMethodSelectList();
            FillHasExceptionSelectList();
            FillEntityChangeTypeSelectList();
        }

        public virtual Task<IActionResult> OnPostAsync()
        {
            return Task.FromResult<IActionResult>(Page());
        }

        protected virtual void FillHttpStatusCodeSelectList()
        {
            SelectListHttpStatusCode = HtmlHelper.GetEnumSelectList(typeof(HttpStatusCode)).ToList();
            foreach (var selectOption in SelectListHttpStatusCode)
            {
                selectOption.Text = selectOption.Value + " - " + Regex.Replace(selectOption.Text, "([A-Z])", " $1").Trim(); ;
            }

            SelectListHttpStatusCode.AddFirst(new SelectListItem("", ""));
        }

        protected virtual void FillHttpMethodSelectList()
        {
            SelectListHttpMethod = new List<SelectListItem> {
                new SelectListItem("", ""),
                new SelectListItem("GET", "GET"),
                new SelectListItem("POST", "POST"),
                new SelectListItem("DELETE", "DELETE"),
                new SelectListItem("PUT", "PUT"),
                new SelectListItem("HEAD", "HEAD"),
                new SelectListItem("CONNECT", "CONNECT"),
                new SelectListItem("OPTIONS", "OPTIONS"),
                new SelectListItem("TRACE", "TRACE")
            };
        }

        protected virtual void FillHasExceptionSelectList()
        {
            SelectListHasException = new List<SelectListItem> {
                new SelectListItem("", ""),
                new SelectListItem(L["Yes"].Value, "true"),
                new SelectListItem(L["No"].Value, "false")
            };
        }

        protected virtual void FillEntityChangeTypeSelectList()
        {
            var enumList = Enum.GetValues(typeof(EntityChangeType))
                                .Cast<EntityChangeType>()
                                .Select(
                                    x => new SelectListItem(x.ToString(), ((int)x).ToString())
                                    );

            var selectListItems = new List<SelectListItem> { new SelectListItem("", "") };
            selectListItems.AddRange(enumList);

            EntityChangeChangeTypeList = selectListItems;
        }
    }
}