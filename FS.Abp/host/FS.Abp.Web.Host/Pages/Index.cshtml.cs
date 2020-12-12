using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace FS.Abp.Pages
{
    public class IndexModel : AbpPageModel
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