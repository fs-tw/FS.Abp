using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace FS.CmsKitManagement.Pages
{
    public class IndexModel : CmsKitManagementPageModel
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