using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Volo.Abp.Identity.Settings;
using Volo.Abp.Settings;
using Volo.Abp.SettingManagement;

namespace Volo.Abp.Identity
{
    [Authorize(IdentityPermissions.SettingManagement)]
    public class IdentitySettingsAppService : IdentityAppServiceBase, IIdentitySettingsAppService
    {
        protected ISettingManager SettingManager { get; }
        protected IOptions<IdentityOptions> IdentityOptions { get; }

        public IdentitySettingsAppService(ISettingManager settingManager, IOptions<IdentityOptions> identityOptions)
        {
            SettingManager = settingManager;
            IdentityOptions = identityOptions;
        }

        public virtual async Task<IdentitySettingsDto> GetAsync()
        {
            await IdentityOptions.SetAsync();

            return new IdentitySettingsDto
            {
                Password = new IdentityPasswordSettingsDto
                {
                    RequiredLength = IdentityOptions.Value.Password.RequiredLength,
                    RequiredUniqueChars = IdentityOptions.Value.Password.RequiredUniqueChars,
                    RequireNonAlphanumeric = IdentityOptions.Value.Password.RequireNonAlphanumeric,
                    RequireLowercase = IdentityOptions.Value.Password.RequireLowercase,
                    RequireUppercase = IdentityOptions.Value.Password.RequireUppercase,
                    RequireDigit = IdentityOptions.Value.Password.RequireDigit
                },
                Lockout = new IdentityLockoutSettingsDto
                {
                    AllowedForNewUsers = IdentityOptions.Value.Lockout.AllowedForNewUsers,
                    LockoutDuration = (int) IdentityOptions.Value.Lockout.DefaultLockoutTimeSpan.TotalSeconds,
                    MaxFailedAccessAttempts = IdentityOptions.Value.Lockout.MaxFailedAccessAttempts
                },
                SignIn = new IdentitySignInSettingsDto
                {
                    RequireConfirmedEmail = IdentityOptions.Value.SignIn.RequireConfirmedEmail,
                    EnablePhoneNumberConfirmation = await SettingProvider.GetAsync(IdentitySettingNames.SignIn.EnablePhoneNumberConfirmation, true),
                    RequireConfirmedPhoneNumber = IdentityOptions.Value.SignIn.RequireConfirmedPhoneNumber
                },
                User = new IdentityUserSettingsDto
                {
                    IsEmailUpdateEnabled = await SettingProvider.GetAsync(IdentitySettingNames.User.IsEmailUpdateEnabled, true),
                    IsUserNameUpdateEnabled = await SettingProvider.GetAsync(IdentitySettingNames.User.IsUserNameUpdateEnabled, true)
                }
            };
        }

        public virtual async Task UpdateAsync(IdentitySettingsDto input)
        {
            await IdentityOptions.SetAsync();

            if (input.Password != null)
            {
                await SettingManager.SetForCurrentTenantAsync(IdentitySettingNames.Password.RequiredLength, input.Password.RequiredLength.ToString());
                await SettingManager.SetForCurrentTenantAsync(IdentitySettingNames.Password.RequiredUniqueChars, input.Password.RequiredUniqueChars.ToString());
                await SettingManager.SetForCurrentTenantAsync(IdentitySettingNames.Password.RequireNonAlphanumeric, input.Password.RequireNonAlphanumeric.ToString());
                await SettingManager.SetForCurrentTenantAsync(IdentitySettingNames.Password.RequireLowercase, input.Password.RequireLowercase.ToString());
                await SettingManager.SetForCurrentTenantAsync(IdentitySettingNames.Password.RequireUppercase, input.Password.RequireUppercase.ToString());
                await SettingManager.SetForCurrentTenantAsync(IdentitySettingNames.Password.RequireDigit, input.Password.RequireDigit.ToString());
            }

            if (input.Lockout != null)
            {
                await SettingManager.SetForCurrentTenantAsync(IdentitySettingNames.Lockout.AllowedForNewUsers, input.Lockout.AllowedForNewUsers.ToString());
                await SettingManager.SetForCurrentTenantAsync(IdentitySettingNames.Lockout.MaxFailedAccessAttempts, input.Lockout.MaxFailedAccessAttempts.ToString());
                await SettingManager.SetForCurrentTenantAsync(IdentitySettingNames.Lockout.LockoutDuration, input.Lockout.LockoutDuration.ToString());
            }

            if (input.SignIn != null)
            {
                await SettingManager.SetForCurrentTenantAsync(IdentitySettingNames.SignIn.RequireConfirmedEmail, input.SignIn.RequireConfirmedEmail.ToString());
                await SettingManager.SetForCurrentTenantAsync(IdentitySettingNames.SignIn.RequireConfirmedPhoneNumber, input.SignIn.RequireConfirmedPhoneNumber.ToString());

                var enablePhoneNumberConfirmationValue = input.SignIn.EnablePhoneNumberConfirmation || input.SignIn.RequireConfirmedPhoneNumber;
                await SettingManager.SetForCurrentTenantAsync(IdentitySettingNames.SignIn.EnablePhoneNumberConfirmation, enablePhoneNumberConfirmationValue.ToString());
            }

            if (input.User != null)
            {
                await SettingManager.SetForCurrentTenantAsync(IdentitySettingNames.User.IsUserNameUpdateEnabled, input.User.IsUserNameUpdateEnabled.ToString());
                await SettingManager.SetForCurrentTenantAsync(IdentitySettingNames.User.IsEmailUpdateEnabled, input.User.IsEmailUpdateEnabled.ToString());
            }
        }
    }
}
