using System;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Volo.Abp.Identity.Web.Pages.Identity.Users
{
    public class Lock : IdentityPageModel
    {
        [BindProperty]
        public LockViewModel LockInput { get; set; }

        public string UserName { get; set; }

        protected IIdentityUserAppService IdentityUserAppService { get; }

        public Lock(IIdentityUserAppService identityUserAppService)
        {
            IdentityUserAppService = identityUserAppService;
        }

        public virtual async Task OnGetAsync(Guid id)
        {
            var user = await IdentityUserAppService.GetAsync(id);
            UserName = user.UserName;
            LockInput = new LockViewModel {Id = id};
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            ValidateModel();

            var seconds = LockInput.LockDurationType switch
            {
                LockDurationType.Second => LockInput.LockoutDuration,
                LockDurationType.Minute => TimeSpan.FromMinutes(LockInput.LockoutDuration).TotalSeconds,
                LockDurationType.Hour => TimeSpan.FromHours(LockInput.LockoutDuration).TotalSeconds,
                LockDurationType.Day => TimeSpan.FromDays(LockInput.LockoutDuration).TotalSeconds,
                LockDurationType.Month => TimeSpan.FromDays(LockInput.LockoutDuration * 30).TotalSeconds,
                LockDurationType.Year => TimeSpan.FromDays(LockInput.LockoutDuration * 365).TotalSeconds,
                _ => 0
            };

            await IdentityUserAppService.LockAsync(LockInput.Id, (int) seconds);

            return NoContent();
        }

        public class LockViewModel
        {
            [HiddenInput]
            public Guid Id { get; set; }

            [Required]
            public LockDurationType LockDurationType { get; set; }

            [Required]
            public int LockoutDuration { get; set; }
        }

        public enum LockDurationType
        {
            Second,
            Minute,
            Hour,
            Day,
            Month,
            Year
        }
    }
}
