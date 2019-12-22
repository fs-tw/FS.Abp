﻿using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace FS.Cms.Pages
{
    public class IndexModel : CmsPageModel
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