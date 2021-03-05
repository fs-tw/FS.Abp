using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace FS.Abp.File.Pages
{
    public class IndexModel : FilePageModel
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