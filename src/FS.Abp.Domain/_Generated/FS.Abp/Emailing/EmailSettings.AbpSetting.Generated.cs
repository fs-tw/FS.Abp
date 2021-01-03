﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using the template for generating AbpSettings.
// 402.0.2
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Volo.Abp.Domain.Services;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using FS.Abp.SettingManagement;
using Volo.Abp.Localization;
using Volo.Abp.Settings;
using Volo.Abp.SettingManagement;
using FS.Abp.Localization;


namespace FS.Abp.Emailing
{
    public partial class AbpSettingNames
    {
        public partial class EmailSettings
        {
            private const string Prefix = "Abp.Mailing";
            public const string DefaultFromAddress = Prefix + ".DefaultFromAddress";
            public const string DefaultFromDisplayName = Prefix + ".DefaultFromDisplayName";
            private const string Smtp = Prefix + ".Smtp";
            public const string SmtpHost = Smtp + ".Host";
            public const string SmtpPort = Smtp + ".Port";
            public const string SmtpUserName = Smtp + ".UserName";
            public const string SmtpPassword = Smtp + ".Password";
            public const string SmtpDomain = Smtp + ".Domain";
            public const string SmtpEnableSsl = Smtp + ".EnableSsl";
            public const string SmtpUseDefaultCredentials = Smtp + ".UseDefaultCredentials";
        }
    }
    public partial interface IEmailSettingsFactory : FS.Abp.Settings.IFactory<EmailSettings>, ITransientDependency { }
    public partial class EmailSettingsFactory : DomainService, IEmailSettingsFactory
    {
        public ISettingManager settingManager;
        public ISettingManager SettingManager => this.LazyGetRequiredService(ref settingManager);

        public ISettingProvider settingProvider;
        public ISettingProvider SettingProvider => this.LazyGetRequiredService(ref settingProvider);

        public async Task<EmailSettings> GetAsync(string providerName = null, string providerKey = null, bool fallback = true)
        {
            var result = new EmailSettings();
            result.DefaultFromAddress = await this.TryGetAsync(AbpSettingNames.EmailSettings.DefaultFromAddress, providerName, providerKey, fallback);
            result.DefaultFromDisplayName = await this.TryGetAsync(AbpSettingNames.EmailSettings.DefaultFromDisplayName, providerName, providerKey, fallback);
            result.Smtp.Host = await this.TryGetAsync(AbpSettingNames.EmailSettings.SmtpHost, providerName, providerKey, fallback);
            result.Smtp.Port = await this.TryGetAsync(AbpSettingNames.EmailSettings.SmtpPort, providerName, providerKey, result.Smtp.Port, fallback);
            result.Smtp.UserName = await this.TryGetAsync(AbpSettingNames.EmailSettings.SmtpUserName, providerName, providerKey, fallback);
            result.Smtp.Password = await this.TryGetAsync(AbpSettingNames.EmailSettings.SmtpPassword, providerName, providerKey, fallback);
            result.Smtp.Domain = await this.TryGetAsync(AbpSettingNames.EmailSettings.SmtpDomain, providerName, providerKey, fallback);
            result.Smtp.EnableSsl = await this.TryGetAsync(AbpSettingNames.EmailSettings.SmtpEnableSsl, providerName, providerKey, result.Smtp.EnableSsl, fallback);
            result.Smtp.UseDefaultCredentials = await this.TryGetAsync(AbpSettingNames.EmailSettings.SmtpUseDefaultCredentials, providerName, providerKey, result.Smtp.UseDefaultCredentials, fallback);
            return result;
        }

        public async Task SetAsync(EmailSettings input, string providerName, string providerKey)
        {
            await this.TrySetAsync(AbpSettingNames.EmailSettings.DefaultFromAddress, input.DefaultFromAddress.ToString(), providerName, providerKey);
            await this.TrySetAsync(AbpSettingNames.EmailSettings.DefaultFromDisplayName, input.DefaultFromDisplayName.ToString(), providerName, providerKey);
            await this.TrySetAsync(AbpSettingNames.EmailSettings.SmtpHost, input.Smtp.Host.ToString(), providerName, providerKey);
            await this.TrySetAsync(AbpSettingNames.EmailSettings.SmtpPort, input.Smtp.Port.ToString(), providerName, providerKey);
            await this.TrySetAsync(AbpSettingNames.EmailSettings.SmtpUserName, input.Smtp.UserName.ToString(), providerName, providerKey);
            await this.TrySetAsync(AbpSettingNames.EmailSettings.SmtpPassword, input.Smtp.Password.ToString(), providerName, providerKey);
            await this.TrySetAsync(AbpSettingNames.EmailSettings.SmtpDomain, input.Smtp.Domain.ToString(), providerName, providerKey);
            await this.TrySetAsync(AbpSettingNames.EmailSettings.SmtpEnableSsl, input.Smtp.EnableSsl.ToString(), providerName, providerKey);
            await this.TrySetAsync(AbpSettingNames.EmailSettings.SmtpUseDefaultCredentials, input.Smtp.UseDefaultCredentials.ToString(), providerName, providerKey);
        }
    }
}
