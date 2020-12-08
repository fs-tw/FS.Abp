using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.Identity;

namespace Volo.Abp.Account
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IdentityUserDto> RegisterAsync(RegisterDto input);

        Task SendPasswordResetCodeAsync(SendPasswordResetCodeDto input);

        Task ResetPasswordAsync(ResetPasswordDto input);

        Task SendPhoneNumberConfirmationTokenAsync();

        Task SendEmailConfirmationTokenAsync(SendEmailConfirmationTokenDto input);

        Task ConfirmPhoneNumberAsync(ConfirmPhoneNumberInput input);

        Task ConfirmEmailAsync(ConfirmEmailInput input);

        Task SetProfilePictureAsync(ProfilePictureInput input);
        
        Task<ProfilePictureSourceDto> GetProfilePictureAsync(Guid id);
    }
}
