using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace FS.Coding.Codes.Pages;

public class IndexModel : CodesPageModel
{
    public void OnGet()
    {

    }

    public async Task OnPostLoginAsync()
    {
        await HttpContext.ChallengeAsync("oidc");
    }
}
