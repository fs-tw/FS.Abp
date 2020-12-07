using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Volo.Saas.Host.Pages.Saas.Host.Editions
{
    public class IndexModel : SaasHostPageModel
    {
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