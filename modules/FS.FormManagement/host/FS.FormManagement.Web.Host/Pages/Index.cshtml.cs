using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace FS.FormManagement.Pages
{
    public class IndexModel : FormManagementPageModel
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