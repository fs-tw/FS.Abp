using System;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Volo.Abp.Account.Public.Web.Pages.Account
{
    public class SecurityLogsModel : AccountPageModel
    {
        [Display(Name = "MySecurityLogs:StartTime")]
        public DateTime? StartTime { get; set; }

        [Display(Name = "MySecurityLogs:EndTime")]
        public DateTime? EndTime { get; set; }

        [Display(Name = "MySecurityLogs:Action")]
        public string Action { get; set; }

        public virtual Task OnGetAsync()
        {
            return Task.FromResult<IActionResult>(Page());
        }

        public virtual Task<IActionResult> OnPostAsync()
        {
            return Task.FromResult<IActionResult>(Page());
        }

    }
}
