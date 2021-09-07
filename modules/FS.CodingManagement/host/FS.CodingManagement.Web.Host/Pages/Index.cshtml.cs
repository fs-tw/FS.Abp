using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace FS.CodingManagement.Pages
{
    public class IndexModel : CodingManagementPageModel
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