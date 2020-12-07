using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Shouldly;
using Volo.Abp.Identity.Settings;
using Volo.Abp.Settings;
using Xunit;

namespace Volo.Abp.Identity
{
    public class IdentitySettingsAppService_Tests : AbpIdentityApplicationTestBase
    {
        private readonly IIdentitySettingsAppService _identitySettingsAppService;
        private readonly IdentityOptions _identityOptions;
        private readonly ISettingProvider _settingProvider;


        public IdentitySettingsAppService_Tests()
        {
            _identitySettingsAppService = GetRequiredService<IIdentitySettingsAppService>();
            _identityOptions = GetRequiredService<IOptions<IdentityOptions>>().Value;
            _settingProvider = GetRequiredService<ISettingProvider>();
        }

        [Fact]
        public async Task GetAsync()
        {
            var identitySettingsDto = await _identitySettingsAppService.GetAsync();
            identitySettingsDto.Password.RequiredLength = _identityOptions.Password.RequiredLength;
            identitySettingsDto.Password.RequiredUniqueChars = _identityOptions.Password.RequiredUniqueChars;
            identitySettingsDto.Password.RequireNonAlphanumeric = _identityOptions.Password.RequireNonAlphanumeric;
            identitySettingsDto.Password.RequireLowercase = _identityOptions.Password.RequireLowercase;
            identitySettingsDto.Password.RequireUppercase = _identityOptions.Password.RequireUppercase;
            identitySettingsDto.Password.RequireDigit = _identityOptions.Password.RequireDigit;

            identitySettingsDto.Lockout.AllowedForNewUsers = _identityOptions.Lockout.AllowedForNewUsers;
            identitySettingsDto.Lockout.LockoutDuration =
                (int) _identityOptions.Lockout.DefaultLockoutTimeSpan.TotalSeconds;
            identitySettingsDto.Lockout.MaxFailedAccessAttempts = _identityOptions.Lockout.MaxFailedAccessAttempts;

            identitySettingsDto.SignIn.RequireConfirmedEmail = _identityOptions.SignIn.RequireConfirmedEmail;
            identitySettingsDto.SignIn.RequireConfirmedPhoneNumber =
                _identityOptions.SignIn.RequireConfirmedPhoneNumber;

            identitySettingsDto.User.IsEmailUpdateEnabled =
                await _settingProvider.GetAsync(IdentitySettingNames.User.IsEmailUpdateEnabled, true);
            identitySettingsDto.User.IsUserNameUpdateEnabled =
                await _settingProvider.GetAsync(IdentitySettingNames.User.IsUserNameUpdateEnabled, true);
        }

        [Fact]
        public async Task UpdateAsync()
        {
            var isEmailUpdateEnabled =
                (await _settingProvider.GetOrNullAsync(IdentitySettingNames.User.IsEmailUpdateEnabled)).Equals("true",
                    StringComparison.InvariantCultureIgnoreCase);

            var isUserNameUpdateEnabled =
                (await _settingProvider.GetOrNullAsync(IdentitySettingNames.User.IsUserNameUpdateEnabled)).Equals(
                    "true",
                    StringComparison.InvariantCultureIgnoreCase);

            await _identitySettingsAppService.UpdateAsync(new IdentitySettingsDto()
            {
                User = new IdentityUserSettingsDto()
                {
                    IsEmailUpdateEnabled = !isEmailUpdateEnabled,
                    IsUserNameUpdateEnabled = !isUserNameUpdateEnabled
                }
            });


            (isEmailUpdateEnabled ==
                !(await _settingProvider.GetOrNullAsync(IdentitySettingNames.User.IsEmailUpdateEnabled)).Equals("true",
                    StringComparison.InvariantCultureIgnoreCase)).ShouldBeTrue();

            (isUserNameUpdateEnabled ==
             !(await _settingProvider.GetOrNullAsync(IdentitySettingNames.User.IsUserNameUpdateEnabled)).Equals(
                 "true",
                 StringComparison.InvariantCultureIgnoreCase)).ShouldBeTrue();

        }
    }
}
