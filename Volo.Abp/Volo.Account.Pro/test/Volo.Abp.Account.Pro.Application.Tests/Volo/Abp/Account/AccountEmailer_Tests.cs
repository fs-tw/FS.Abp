using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using NSubstitute;
using Shouldly;
using Volo.Abp.Account.Emailing;
using Volo.Abp.Account.Localization;
using Volo.Abp.Emailing;
using Volo.Abp.Identity;
using Xunit;

namespace Volo.Abp.Account
{
    public class AccountEmailer_Tests : AbpAccountApplicationTestBase
    {
        private readonly IAccountEmailer _accountEmailer;
        private IEmailSender _emailSender;
        private readonly IIdentityUserRepository _identityUserRepository;
        private  readonly ILookupNormalizer _lookupNormalizer;
        private readonly IStringLocalizer<AccountResource> _stringLocalizer;

        public AccountEmailer_Tests()
        {
            _stringLocalizer = GetRequiredService<IStringLocalizer<AccountResource>>();
            _accountEmailer = GetRequiredService<IAccountEmailer>();
            _identityUserRepository = GetRequiredService<IIdentityUserRepository>();
            _lookupNormalizer = GetRequiredService<ILookupNormalizer>();
            _stringLocalizer = GetRequiredService<IStringLocalizer<AccountResource>>();
        }

        protected override void AfterAddApplication(IServiceCollection services)
        {
            _emailSender = Substitute.For<IEmailSender>();
            services.AddSingleton(_emailSender);
        }

        [Fact]
        public async Task SendPasswordResetLinkAsync()
        {
            var user = await _identityUserRepository.FindByNormalizedEmailAsync(
                _lookupNormalizer.NormalizeEmail("john.nash@abp.io"));
            user.ShouldNotBeNull();

            await _accountEmailer.SendPasswordResetLinkAsync(user, "TestPasswordResetToken", "MVC");

#pragma warning disable 4014
            _emailSender.Received().SendAsync("john.nash@abp.io", _stringLocalizer["PasswordReset"], Arg.Is<string>(x => x.Contains("TestPasswordResetToken")));
#pragma warning restore 4014
        }

        [Fact]
        public async Task SendEmailConfirmationLinkAsync()
        {
            var user = await _identityUserRepository.FindByNormalizedEmailAsync(
                _lookupNormalizer.NormalizeEmail("john.nash@abp.io"));
            user.ShouldNotBeNull();

            await _accountEmailer.SendEmailConfirmationLinkAsync(user, "TestEmailConfirmationToken", "MVC");

#pragma warning disable 4014
            _emailSender.Received().SendAsync("john.nash@abp.io", _stringLocalizer["EmailConfirmation"], Arg.Is<string>(x => x.Contains("TestEmailConfirmationToken")));
#pragma warning restore 4014
        }
    }
}
