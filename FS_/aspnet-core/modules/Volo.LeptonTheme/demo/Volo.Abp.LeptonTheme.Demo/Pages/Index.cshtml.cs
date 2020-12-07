using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Volo.Abp.LeptonTheme.Demo.Pages
{
    public class IndexModel : PageModel
    {
        public IActionResult OnGet()
        {
            return RedirectToPage("/Layouts/Application/Dashboard/Dashboard");
        }
    }
}
