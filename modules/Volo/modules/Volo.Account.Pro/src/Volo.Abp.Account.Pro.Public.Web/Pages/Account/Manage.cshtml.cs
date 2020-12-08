using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Volo.Abp.Account.Public.Web.ProfileManagement;
using Volo.Abp.Auditing;
using Volo.Abp.Identity;
using Volo.Abp.Identity.Features;
using Volo.Abp.Identity.Settings;
using Volo.Abp.Settings;
using Volo.Abp.Users;
using Volo.Abp.Validation;

namespace Volo.Abp.Account.Public.Web.Pages.Account
{
    public class ManageModel : AccountPageModel
    {
        [HiddenInput]
        [BindProperty(SupportsGet = true)]
        public string ReturnUrl { get; set; }
        
        public ProfileManagementPageCreationContext ProfileManagementPageCreationContext { get; private set; }

        protected ProfileManagementPageOptions Options { get; }

        public ManageModel(IOptions<ProfileManagementPageOptions> options)
        {
            Options = options.Value;
        }

        public virtual async Task<IActionResult> OnGetAsync()
        {
            ProfileManagementPageCreationContext = new ProfileManagementPageCreationContext(ServiceProvider);

            foreach (var contributor in Options.Contributors)
            {
                await contributor.ConfigureAsync(ProfileManagementPageCreationContext);
            }

            return Page();
        }

        public virtual Task<IActionResult> OnPostAsync()
        {
            return Task.FromResult<IActionResult>(Page());
        }
    }
}
