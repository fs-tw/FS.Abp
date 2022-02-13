using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace FS.Entity.EntityDefaults.Pages;

public class IndexModel : EntityDefaultsPageModel
{
    public void OnGet()
    {

    }

    public async Task OnPostLoginAsync()
    {
        await HttpContext.ChallengeAsync("oidc");
    }
}
