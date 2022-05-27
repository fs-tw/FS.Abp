using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace FS.Abp.SyncTable.Pages;

public class IndexModel : SyncTablePageModel
{
    public void OnGet()
    {

    }

    public async Task OnPostLoginAsync()
    {
        await HttpContext.ChallengeAsync("oidc");
    }
}
