using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace FS.Coding.Pages;

public class IndexModel : CodingPageModel
{
    public void OnGet()
    {

    }

    public async Task OnPostLoginAsync()
    {
        await HttpContext.ChallengeAsync("oidc");
    }
}
