using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Volo.Abp.Identity.Web.Pages.Identity.Users
{
    public class TwoFactorModel : IdentityPageModel
    {
        [BindProperty]
        public TwoFactorViewModel TwoFactorInput { get; set; }

        public string UserName { get; set; }

        protected IIdentityUserAppService IdentityUserAppService { get; }

        public TwoFactorModel(IIdentityUserAppService identityUserAppService)
        {
            IdentityUserAppService = identityUserAppService;
        }

        public virtual async Task OnGetAsync(Guid id)
        {
            var user = await IdentityUserAppService.GetAsync(id);
            UserName = user.UserName;
            TwoFactorInput = new TwoFactorViewModel
            {
                Id = id,
                TwoFactorEnabled = await IdentityUserAppService.GetTwoFactorEnabledAsync(id)
            };
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            ValidateModel();

            await IdentityUserAppService.SetTwoFactorEnabledAsync(TwoFactorInput.Id, TwoFactorInput.TwoFactorEnabled);

            return NoContent();
        }

        public class TwoFactorViewModel
        {
            [HiddenInput]
            public Guid Id { get; set; }

            public bool TwoFactorEnabled { get; set; }
        }
    }
}
