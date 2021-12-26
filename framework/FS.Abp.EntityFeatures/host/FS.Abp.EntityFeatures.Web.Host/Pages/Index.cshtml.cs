using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace FS.Abp.EntityFeatures.Pages
{
    public class IndexModel : EntityFeaturesPageModel
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