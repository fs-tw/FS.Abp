using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Volo.Abp.Identity
{
    public class IdentitySettingsDto
    {
        public IdentityPasswordSettingsDto Password { get; set; }

        public IdentityLockoutSettingsDto Lockout { get; set; }

        public IdentitySignInSettingsDto SignIn { get; set; }

        public IdentityUserSettingsDto User { get; set; }
    }

    public class IdentityPasswordSettingsDto
    {
        [Range(2, 128)]
        [Display(Name = "Abp.Identity.Password.RequiredLength")]
        public int RequiredLength { get; set; }

        [Range(1, 128)]
        [Display(Name = "Abp.Identity.Password.RequiredUniqueChars")]
        public int RequiredUniqueChars { get; set; }

        public bool RequireNonAlphanumeric { get; set; }

        public bool RequireLowercase { get; set; }

        public bool RequireUppercase { get; set; }

        public bool RequireDigit { get; set; }
    }

    public class IdentityLockoutSettingsDto
    {
        public bool AllowedForNewUsers { get; set; }

        [Display(Name = "Abp.Identity.Lockout.LockoutDuration")]
        public int LockoutDuration { get; set; }

        [Display(Name = "Abp.Identity.Lockout.MaxFailedAccessAttempts")]
        public int MaxFailedAccessAttempts { get; set; }
    }

    public class IdentitySignInSettingsDto
    {
        public bool RequireConfirmedEmail { get; set; }

        public bool EnablePhoneNumberConfirmation { get; set; }

        public bool RequireConfirmedPhoneNumber { get; set; }
    }

    public class IdentityUserSettingsDto
    {
        public bool IsUserNameUpdateEnabled { get; set; }

        public bool IsEmailUpdateEnabled { get; set; }
    }
}