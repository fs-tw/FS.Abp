using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace FS.Theme.Pages
{
    public class IndexModel : ThemePageModel
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