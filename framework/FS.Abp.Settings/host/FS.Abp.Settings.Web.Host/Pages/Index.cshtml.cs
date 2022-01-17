using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace FS.Abp.Settings.Pages
{
    public class IndexModel : SettingsPageModel
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