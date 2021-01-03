﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using the template for generating AbpSettings.
// 402.0.2
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using FS.Abp.Emailing.Dtos;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace FS.Abp.Emailing
{
    public partial class EmailSettingsAppService : ApplicationService, IEmailSettingsAppService // auto-generated
    {
        private IEmailSettingsFactory factory;
        protected IEmailSettingsFactory Factory => this.LazyGetRequiredService(ref factory);

        public async Task<EmailSettingsDto> GetAsync(EmailSettingsGetDto EmailSettingsGet = null, bool fallback = true)
        {
            EmailSettingsDto result = new EmailSettingsDto();
            return ObjectMapper.Map(await Factory.GetAsync(EmailSettingsGet.ProviderName,EmailSettingsGet.ProviderKey), result);
        }

        public async Task UpdateAsync(EmailSettingsDto EmailSettings, string providerName = null, string providerKey = null)
        {
            var domain = new EmailSettings();

            ObjectMapper.Map(EmailSettings, domain);

            await Factory.SetAsync(domain, providerName, providerKey);

        }
    }
}
