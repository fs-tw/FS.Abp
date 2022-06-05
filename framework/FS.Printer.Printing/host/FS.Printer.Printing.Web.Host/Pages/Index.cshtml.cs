using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace FS.Printer.Printing.Pages;

public class IndexModel : PrintingPageModel
{
    public void OnGet()
    {

    }

    public async Task OnPostLoginAsync()
    {
        await HttpContext.ChallengeAsync("oidc");
    }
}
