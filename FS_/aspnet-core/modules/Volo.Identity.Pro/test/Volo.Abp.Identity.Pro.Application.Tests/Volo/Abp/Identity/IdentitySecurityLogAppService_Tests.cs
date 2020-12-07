using System;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using NSubstitute;
using Shouldly;
using Volo.Abp.Users;
using Xunit;

namespace Volo.Abp.Identity
{
    public class IdentitySecurityLogAppService_Tests : AbpIdentityApplicationTestBase
    {
        private readonly IIdentitySecurityLogAppService _identitySecurityLogAppService;
        private readonly IIdentitySecurityLogRepository _identitySecurityLogRepository;
        private readonly IdentityTestData _testData;
        private ICurrentUser _currentUser;
        private Guid _userJohnId;

        public IdentitySecurityLogAppService_Tests()
        {
            _identitySecurityLogAppService = GetRequiredService<IIdentitySecurityLogAppService>();
            _identitySecurityLogRepository = GetRequiredService<IIdentitySecurityLogRepository>();
            _testData = GetRequiredService<IdentityTestData>();
            _userJohnId = _testData.UserJohnId;
        }

        protected override void AfterAddApplication(IServiceCollection services)
        {
            _currentUser = Substitute.For<ICurrentUser>();
            _currentUser.Id.Returns(info => _userJohnId);
            services.AddSingleton(_currentUser);
        }

        [Fact]
        public async Task GetListAsync()
        {
             var logs = await _identitySecurityLogAppService.GetListAsync(new GetIdentitySecurityLogListInput());

             logs.TotalCount.ShouldBe(2);
             logs.Items.ShouldNotBeEmpty();
             logs.Items.ShouldContain(x => x.ApplicationName == "Test-ApplicationName" && x.UserId == _testData.UserJohnId);
             logs.Items.ShouldContain(x => x.ApplicationName == "Test-ApplicationName" && x.UserId == _testData.UserDavidId);
        }

        [Fact]
        public async Task GetMyListAsync()
        {
            var logs = await _identitySecurityLogAppService.GetMyListAsync(new GetIdentitySecurityLogListInput());
            logs.Items.ShouldAllBe(x => x.UserId == _testData.UserJohnId);
        }

        [Fact]
        public async Task GetMyAsync()
        {
            var davidLog = await _identitySecurityLogAppService.GetMyAsync(_testData.UserDavidSecurityLogId);
            davidLog.ShouldBeNull();

            var johnLog = await _identitySecurityLogAppService.GetMyAsync(_testData.UserJohnSecurityLogId);
            johnLog.ShouldNotBeNull();
            johnLog.UserId.ShouldBe(_currentUser.Id);
        }
    }
}
