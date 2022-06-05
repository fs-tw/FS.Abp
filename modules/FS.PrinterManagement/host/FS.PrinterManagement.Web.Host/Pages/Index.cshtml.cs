using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace FS.PrinterManagement.Pages
{
    public class IndexModel : PrinterManagementPageModel
    {
        public void OnGet()
        {
            
        }

        public async Task OnPostLoginAsync()
        {
            await HttpContext.ChallengeAsync("oidc");
        }
    }
}