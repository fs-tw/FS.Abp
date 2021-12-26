using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace FS.Abp.Metadata.Pages
{
    public class IndexModel : MetadataPageModel
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