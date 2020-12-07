using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace Volo.Abp.Account
{
    [RemoteService(Name= AccountProAdminRemoteServiceConsts.RemoteServiceName)]
    [Area("accountAdmin")]
    [Route("api/account-admin/settings")]
    public class AccountSettingsController: AbpController, IAccountSettingsAppService
    {
        protected IAccountSettingsAppService AccountSettingsAppService { get; }

        public AccountSettingsController(IAccountSettingsAppService accountSettingsAppService)
        {
            AccountSettingsAppService = accountSettingsAppService;
        }

        [HttpGet]
        public virtual async Task<AccountSettingsDto> GetAsync()
        {
            return await AccountSettingsAppService.GetAsync();
        }

        [HttpPut]
        public virtual async Task UpdateAsync(AccountSettingsDto input)
        {
            await AccountSettingsAppService.UpdateAsync(input);
        }

        [HttpGet]
        [Route("ldap")]
        public virtual async Task<AccountLdapSettingsDto> GetLdapAsync()
        {
            return await AccountSettingsAppService.GetLdapAsync();
        }

        [HttpPut]
        [Route("ldap")]
        public virtual async Task UpdateLdapAsync(AccountLdapSettingsDto input)
        {
            await AccountSettingsAppService.UpdateLdapAsync(input);
        }

        [HttpGet]
        [Route("two-factor")]
        public virtual async Task<AccountTwoFactorSettingsDto> GetTwoFactorAsync()
        {
            return await AccountSettingsAppService.GetTwoFactorAsync();
        }

        [HttpPut]
        [Route("two-factor")]
        public virtual async Task UpdateTwoFactorAsync(AccountTwoFactorSettingsDto input)
        {
            await AccountSettingsAppService.UpdateTwoFactorAsync(input);
        }

        [HttpGet]
        [Route("recaptcha")]
        public async Task<AccountRecaptchaSettingsDto> GetRecaptchaAsync()
        {
            return await AccountSettingsAppService.GetRecaptchaAsync();
        }

        [HttpPut]
        [Route("recaptcha")]
        public async Task UpdateRecaptchaAsync(AccountRecaptchaSettingsDto input)
        {
            await AccountSettingsAppService.UpdateRecaptchaAsync(input);
        }

        [HttpGet]
        [Route("external-provider")]
        public async Task<AccountExternalProviderSettingsDto> GetExternalProviderAsync()
        {
            return await AccountSettingsAppService.GetExternalProviderAsync();
        }

        [HttpPut]
        [Route("external-provider")]
        public async Task UpdateExternalProviderAsync(List<UpdateExternalProviderDto> input)
        {
            await AccountSettingsAppService.UpdateExternalProviderAsync(input);
        }
    }
}
