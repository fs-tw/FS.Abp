using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace Volo.Abp.Account
{
    public interface IAccountSettingsAppService : IApplicationService
    {
        Task<AccountSettingsDto> GetAsync();

        Task UpdateAsync(AccountSettingsDto input);

        Task<AccountLdapSettingsDto> GetLdapAsync();

        Task UpdateLdapAsync(AccountLdapSettingsDto input);

        Task<AccountTwoFactorSettingsDto> GetTwoFactorAsync();

        Task UpdateTwoFactorAsync(AccountTwoFactorSettingsDto input);

        Task<AccountRecaptchaSettingsDto> GetRecaptchaAsync();

        Task UpdateRecaptchaAsync(AccountRecaptchaSettingsDto input);

        Task<AccountExternalProviderSettingsDto> GetExternalProviderAsync();

        Task UpdateExternalProviderAsync(List<UpdateExternalProviderDto> input);
    }
}
