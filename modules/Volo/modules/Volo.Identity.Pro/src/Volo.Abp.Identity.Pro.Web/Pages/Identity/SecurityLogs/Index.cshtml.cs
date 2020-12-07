using System;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Volo.Abp.Identity.Web.Pages.Identity.SecurityLogs
{
    public class IndexModel : IdentityPageModel
    {
        [Display(Name = "SecurityLogs:StartTime")]
        [DataType(DataType.Date)]
        public DateTime? StartTime { get; set; }

        [Display(Name = "SecurityLogs:EndTime")]
        [DataType(DataType.Date)]
        public DateTime? EndTime { get; set; }

        [Display(Name = "SecurityLogs:Application")]
        public string ApplicationName { get; set; }

        [Display(Name = "SecurityLogs:Identity")]
        public string Identity { get; set; }

        [Display(Name = "SecurityLogs:Action")]
        public string Action { get; set; }

        [Display(Name = "SecurityLogs:UserName")]
        public string UserName { get; set; }

        [Display(Name = "SecurityLogs:Client")]
        public string ClientId { get; set; }

        [Display(Name = "SecurityLogs:CorrelationId")]
        public string CorrelationId { get; set; }

        public virtual Task<IActionResult> OnGetAsync()
        {
            return Task.FromResult<IActionResult>(Page());
        }

        public virtual Task<IActionResult> OnPostAsync()
        {
            return Task.FromResult<IActionResult>(Page());
        }
    }
}
