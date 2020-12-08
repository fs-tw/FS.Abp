using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using NSubstitute;
using Shouldly;
using Volo.Abp.Account.Emailing;
using Volo.Abp.Identity;
using Xunit;
using IdentityUser = Volo.Abp.Identity.IdentityUser;

namespace Volo.Abp.Account.Pro.Application.Tests.Volo.Abp.Account
{
    public class AccountAppService_Tests : AbpAccountApplicationTestBase
    {
        private readonly IAccountAppService _accountAppService;
        private readonly IIdentityUserRepository _identityUserRepository;
        private readonly ILookupNormalizer _lookupNormalizer;
        private readonly IdentityUserManager _userManager;
        private readonly IOptions<IdentityOptions> _identityOptions;

        private IAccountEmailer _accountEmailer { get; set; }

        public AccountAppService_Tests()
        {
            _accountAppService = GetRequiredService<IAccountAppService>();
            _identityUserRepository = GetRequiredService<IIdentityUserRepository>();
            _lookupNormalizer = GetRequiredService<ILookupNormalizer>();
            _userManager = GetRequiredService<IdentityUserManager>();
            _identityOptions = GetRequiredService<IOptions<IdentityOptions>>();
        }

        protected override void AfterAddApplication(IServiceCollection services)
        {
            _accountEmailer = Substitute.For<IAccountEmailer>();
            services.AddSingleton(_accountEmailer);
        }

        [Fact]
        public async Task RegisterAsync()
        {
            await _identityOptions.SetAsync();

            var registerDto = new RegisterDto()
            {
                UserName = "bob.lee",
                EmailAddress = "bob.lee@abp.io",
                Password = "P@ssW0rd",
                AppName = "MVC"
            };

            await _accountAppService.RegisterAsync(registerDto);

            var user = await _identityUserRepository.FindByNormalizedUserNameAsync(
                _lookupNormalizer.NormalizeName("bob.lee"));

            user.ShouldNotBeNull();
            user.UserName.ShouldBe("bob.lee");
            user.Email.ShouldBe("bob.lee@abp.io");

            (await _userManager.CheckPasswordAsync(user, "P@ssW0rd")).ShouldBeTrue();
        }

        [Fact]
        public async Task SendPasswordResetCodeAsync()
        {
            await _accountAppService.SendPasswordResetCodeAsync(new SendPasswordResetCodeDto()
            {
                Email = "john.nash@abp.io",
                AppName = "MVC"
            });

#pragma warning disable 4014
            _accountEmailer.Received()
                .SendPasswordResetLinkAsync(Arg.Is<IdentityUser>(x => x.Email == "john.nash@abp.io"), Arg.Any<string>(),
                    "MVC");
#pragma warning restore 4014
        }

        [Fact]
        public async Task ResetPasswordAsync()
        {
            await _identityOptions.SetAsync();

            var user = await _identityUserRepository.FindByNormalizedEmailAsync(
                _lookupNormalizer.NormalizeEmail("david@abp.io"));
            user.ShouldNotBeNull();

            var resetToken = await _userManager.GeneratePasswordResetTokenAsync(user);

            await _accountAppService.ResetPasswordAsync(new ResetPasswordDto()
            {
                UserId = user.Id,
                Password = "P@ssW0rd",
                ResetToken = resetToken
            });

            var resetPasswordUser = await _identityUserRepository.FindByNormalizedEmailAsync(
                _lookupNormalizer.NormalizeEmail("david@abp.io"));
            resetPasswordUser.ShouldNotBeNull();
            (await _userManager.CheckPasswordAsync(resetPasswordUser, "P@ssW0rd")).ShouldBeTrue();
        }
    }
}
