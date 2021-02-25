using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace FS.Wbm.Pages
{
    public class IndexModel : WbmPageModel
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