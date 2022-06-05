using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace FS.Printer.Pages;

public class IndexModel : PrinterPageModel
{
    public void OnGet()
    {

    }

    public async Task OnPostLoginAsync()
    {
        await HttpContext.ChallengeAsync("oidc");
    }
}
