using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using Microsoft.Extensions.Options;
using Volo.Abp.Account.Feature;
using Volo.Abp.Account.Settings;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Features;
using Volo.Abp.Guids;
using Volo.Abp.Identity;
using Volo.Abp.Ldap;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Settings;

namespace Volo.Abp.Account.Public.Web.Ldap
{
    public class LdapExternalLoginProvider : ExternalLoginProviderBase, ITransientDependency
    {
        public const string Name = "Ldap";

        public ILogger<LdapExternalLoginProvider> Logger { get; set; }

        protected OpenLdapManager LdapManager { get; }

        protected IOptions<AbpLdapOptions> LdapOptionsAccessor { get; }

        protected IFeatureChecker FeatureChecker { get; }

        protected ISettingProvider SettingProvider { get; }

        public LdapExternalLoginProvider(IGuidGenerator guidGenerator,
            ICurrentTenant currentTenant,
            IdentityUserManager userManager,
            IIdentityUserRepository identityUserRepository,
            OpenLdapManager ldapManager,
            IOptions<AbpLdapOptions> ldapOptions,
            IFeatureChecker featureChecker,
            ISettingProvider settingProvider,
            IOptions<IdentityOptions> identityOptions)
                : base(guidGenerator,
                    currentTenant,
                    userManager,
                    identityUserRepository,
                    identityOptions)
        {
            LdapManager = ldapManager;
            LdapOptionsAccessor = ldapOptions;
            FeatureChecker = featureChecker;
            SettingProvider = settingProvider;

            Logger = NullLogger<LdapExternalLoginProvider>.Instance;
        }

        public override async Task<bool> TryAuthenticateAsync(string userName, string plainPassword)
        {
            if (!await FeatureChecker.IsEnabledAsync(AccountFeature.EnableLdapLogin))
            {
                Logger.LogWarning("Ldap login feature is not enabled!");
                return false;
            }

            if (!await SettingProvider.IsTrueAsync(AccountSettingNames.EnableLdapLogin))
            {
                Logger.LogWarning("Ldap login setting is not enabled!");
                return false;
            }

            await LdapOptionsAccessor.SetAsync();

            return await LdapManager.AuthenticateAsync(NormalizeUserName(userName), plainPassword);
        }

        protected override async Task<ExternalLoginUserInfo> GetUserInfoAsync(string userName)
        {
            await LdapOptionsAccessor.SetAsync();

            var email = await LdapManager.GetUserEmailAsync(userName);
            if (email.IsNullOrWhiteSpace())
            {
                throw new Exception("Unable to get the email of ldap user!");
            }
            return new ExternalLoginUserInfo(email);
        }

        protected virtual string NormalizeUserName(string userName)
        {
            return $"uid={userName}, {LdapOptionsAccessor.Value.BaseDc}";
        }
    }
}
