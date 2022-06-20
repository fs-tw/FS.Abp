﻿using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace FS.Abp.Identity.Pages;

public class IndexModel : IdentityPageModel
{
    public void OnGet()
    {

    }

    public async Task OnPostLoginAsync()
    {
        await HttpContext.ChallengeAsync("oidc");
    }
}
