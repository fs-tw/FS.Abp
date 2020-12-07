using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace Volo.Chat.Pages
{
    public class IndexModel : ChatPageModel
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