using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace FS.LineNotify.Pages
{
    public class IndexModel : LineNotifyPageModel
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