using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace FS.Abp.EntityTypes.Pages
{
    public class IndexModel : EntityTypesPageModel
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