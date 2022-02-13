using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace FS.Entity.MultiLinguals.Pages;

public class IndexModel : MultiLingualsPageModel
{
    public void OnGet()
    {

    }

    public async Task OnPostLoginAsync()
    {
        await HttpContext.ChallengeAsync("oidc");
    }
}
